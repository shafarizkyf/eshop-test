import ProductCard from 'components/ProductCard';
import {AppContext} from 'context/AppContext';
import useProduct from 'hooks/useProduct';
import {HomeTabProps} from 'navigations/type';
import {useContext, useMemo, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {getProducts, searchProducts} from 'services/product';
import style from 'styles/style';
import CartIcon from './CartIcon';
import CategoriesSection from './CategoriesSection';
import SearchBar from './SearchBar';
import {ShimmerPlaceholder} from 'components/ShimmerPlaceholder';
import {CATEGORY_CARD_SIZE, PRODUCT_CARD_SIZE} from 'constant/card';
import RenderIf from 'components/RenderIf';
import {useQuery} from '@tanstack/react-query';
import {useRefreshByUser} from 'hooks/useRefreshByUser';
import {useRefreshOnFocus} from 'hooks/useRefreshOnFocus';

const HomeScreen = ({navigation}: HomeTabProps<'HomeScreen'>) => {
  const {cart, categories, favorites} = useContext(AppContext);
  const {addToCart, toggleFavorite} = useProduct();
  const [keyword, setKeyword] = useState<string>('');

  const productsQuery = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts({select: 'title,thumbnail,price'}),
  });

  const productsByKeywordQuery = useQuery({
    enabled: !!keyword.length,
    queryKey: ['products', keyword],
    queryFn: () => searchProducts(keyword),
  });

  const {isRefetchingByUser, refetchByUser} = useRefreshByUser(
    productsQuery.refetch,
  );

  useRefreshOnFocus(productsQuery.refetch);

  const isLoading = useMemo(() => {
    return productsQuery.isLoading || productsByKeywordQuery.isLoading;
  }, [productsQuery, productsByKeywordQuery]);

  return (
    <View style={[style.flex1, style.gap18, style.pt20]}>
      <View style={[style.row, style.gap18, style.mh20]}>
        <SearchBar onChangeKeyword={setKeyword} />
        <CartIcon
          counter={cart.length}
          onPress={() => navigation.navigate('CartScreen')}
        />
      </View>
      <FlatList
        ListHeaderComponent={
          <View style={style.gap18}>
            <RenderIf isTrue={Boolean(categories.length) && !keyword}>
              <CategoriesSection />
            </RenderIf>
            <RenderIf isTrue={!categories.length}>
              <View style={styles.shimmerContainer}>
                {Array(8)
                  .fill('')
                  .map((_, i) => (
                    <ShimmerPlaceholder
                      key={`ShimmerPlaceholder-${i}`}
                      width={CATEGORY_CARD_SIZE}
                      height={CATEGORY_CARD_SIZE / 2}
                      borderRadius={10}
                    />
                  ))}
              </View>
            </RenderIf>
            <RenderIf isTrue={!keyword}>
              <Text style={style.headerText}>Products</Text>
            </RenderIf>
          </View>
        }
        keyExtractor={item => `Product-${item.id}`}
        data={
          productsByKeywordQuery.data
            ? productsByKeywordQuery.data.products
            : productsQuery.data?.products || []
        }
        renderItem={({item}) => (
          <ProductCard
            text={item.title}
            thumbnail={item.thumbnail}
            onAddToCart={() => addToCart(item)}
            onToggleFavorite={() => toggleFavorite(item)}
            isFavorite={favorites.find(f => f.id === item.id) !== undefined}
            onPress={() => navigation.navigate('ProductDetailScreen', item)}
          />
        )}
        ListEmptyComponent={
          <RenderIf isTrue={isLoading}>
            <View style={styles.shimmerContainer}>
              {Array(8)
                .fill('')
                .map((_, i) => (
                  <ShimmerPlaceholder
                    key={`ShimmerPlaceholder-${i}`}
                    width={PRODUCT_CARD_SIZE}
                    height={PRODUCT_CARD_SIZE * 2}
                    borderRadius={10}
                  />
                ))}
            </View>
          </RenderIf>
        }
        numColumns={2}
        contentContainerStyle={style.gap8}
        style={style.ph20}
        refreshControl={
          <RefreshControl
            refreshing={isRefetchingByUser}
            onRefresh={refetchByUser}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shimmerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default HomeScreen;
