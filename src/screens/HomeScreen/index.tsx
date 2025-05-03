import ProductCard from 'components/ProductCard';
import {AppContext} from 'context/AppContext';
import useProduct from 'hooks/useProduct';
import {RootStackProps} from 'navigations/type';
import {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getProducts} from 'services/product';
import style from 'styles/style';
import {Products} from 'types/product';
import CartIcon from './CartIcon';
import CategoriesSection from './CategoriesSection';

const HomeScreen = ({navigation}: RootStackProps<'HomeScreen'>) => {
  const {cart} = useContext(AppContext);
  const {addToCart} = useProduct();

  const [products, setProducts] = useState<Products>({
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  });

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
            <CartIcon
              counter={cart.length}
              onPress={() => navigation.navigate('CartScreen')}
            />
            <CategoriesSection />
            <Text style={styles.headerText}>Products</Text>
          </View>
        }
        keyExtractor={item => `Product-${item.id}`}
        data={products.products}
        renderItem={({item}) => (
          <ProductCard
            text={item.title}
            thumbnail={item.thumbnail}
            onAddToCart={() => addToCart(item)}
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
