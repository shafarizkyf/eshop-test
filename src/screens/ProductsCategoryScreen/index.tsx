import Icon from '@react-native-vector-icons/ionicons';
import ProductCard from 'components/ProductCard';
import RenderIf from 'components/RenderIf';
import {ShimmerPlaceholder} from 'components/ShimmerPlaceholder';
import {PRODUCT_CARD_SIZE} from 'constant/card';
import {AppContext} from 'context/AppContext';
import useProduct from 'hooks/useProduct';
import {RootStackProps} from 'navigations/type';
import {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getProductsByCategory} from 'services/product';
import style from 'styles/style';
import {Products} from 'types/product';

const ProductsCategoryScreen = ({
  route,
  navigation,
}: RootStackProps<'ProductsCategoryScreen'>) => {
  const {category} = route.params;
  const {favorites} = useContext(AppContext);
  const {addToCart, toggleFavorite} = useProduct();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [products, setProducts] = useState<Products>({
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  });

  useEffect(() => {
    setIsLoading(true);
    getProductsByCategory(category.slug)
      .then(setProducts)
      .finally(() => setIsLoading(false));
  }, [category.slug]);

  return (
    <View style={[style.flex1]}>
      <FlatList
        data={products.products}
        keyExtractor={item => item.id + item.title}
        ListHeaderComponent={
          <View style={[style.rowBetweenInCenter]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              testID="productsCategoryBackBtn">
              <Icon name="arrow-back" size={22} />
            </TouchableOpacity>

            <Text style={styles.headerText}>{category.name}</Text>
          </View>
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
        style={style.p20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: 800,
  },
  shimmerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default ProductsCategoryScreen;
