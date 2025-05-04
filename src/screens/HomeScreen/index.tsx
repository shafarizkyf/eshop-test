import ProductCard from 'components/ProductCard';
import {AppContext} from 'context/AppContext';
import useProduct from 'hooks/useProduct';
import {RootStackProps} from 'navigations/type';
import {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getProducts, searchProducts} from 'services/product';
import style from 'styles/style';
import {Products} from 'types/product';
import CartIcon from './CartIcon';
import CategoriesSection from './CategoriesSection';
import SearchBar from './SearchBar';

const INIT_PRODUCTS: Products = {
  limit: 0,
  products: [],
  skip: 0,
  total: 0,
};

const HomeScreen = ({navigation}: RootStackProps<'HomeScreen'>) => {
  const {cart, favorites} = useContext(AppContext);
  const {addToCart, toggleFavorite} = useProduct();

  const [products, setProducts] = useState<Products>(INIT_PRODUCTS);
  const [productsByKeyword, setProductsByKeyword] =
    useState<Products>(INIT_PRODUCTS);

  const onSearch = async (keyword: string) => {
    if (!keyword.length) {
      setProductsByKeyword(INIT_PRODUCTS);
      return;
    }

    const _productsByKeyword = await searchProducts(keyword);
    setProductsByKeyword(_productsByKeyword);
  };

  useEffect(() => {
    getProducts({
      select: 'title,thumbnail,price',
    }).then(setProducts);
  }, []);

  return (
    <View style={[style.flex1, style.gap18]}>
      <FlatList
        ListHeaderComponent={
          <View style={style.gap18}>
            <View style={[style.row, style.gap18]}>
              <SearchBar onChangeKeyword={onSearch} />
              <CartIcon
                counter={cart.length}
                onPress={() => navigation.navigate('CartScreen')}
              />
            </View>
            <CategoriesSection />
            <Text style={styles.headerText}>Products</Text>
          </View>
        }
        keyExtractor={item => `Product-${item.id}`}
        data={
          productsByKeyword.products.length
            ? productsByKeyword.products
            : products.products
        }
        renderItem={({item}) => (
          <ProductCard
            text={item.title}
            thumbnail={item.thumbnail}
            onAddToCart={() => addToCart(item)}
            onToggleFavorite={() => toggleFavorite(item)}
            isFavorite={favorites.find(f => f.id === item.id) !== undefined}
          />
        )}
        numColumns={2}
        contentContainerStyle={style.gap8}
        style={style.ph20}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: 800,
  },
});

export default HomeScreen;
