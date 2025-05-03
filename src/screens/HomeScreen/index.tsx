import CategoryCard from 'components/CategoryCard';
import ProductCard from 'components/ProductCard';
import {AppContext} from 'context/AppContext';
import useProduct from 'hooks/useProduct';
import {RootStackProps} from 'navigations/type';
import {useContext, useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getProducts} from 'services/product';
import style from 'styles/style';
import {Products} from 'types/product';

const HomeScreen = ({navigation}: RootStackProps<'HomeScreen'>) => {
  const {categories, cart} = useContext(AppContext);
  const {addToCart} = useProduct();

  const [products, setProducts] = useState<Products>({
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  });

  const categoriesTrimmed = useMemo(() => {
    return categories.slice(0, 6);
  }, [categories]);

  useEffect(() => {
    getProducts({
      select: 'title,thumbnail,price',
    }).then(setProducts);
  }, []);

  return (
    <View style={[style.container, style.gap18]}>
      <FlatList
        ListHeaderComponent={
          <View style={style.gap18}>
            <TouchableOpacity
              style={styles.cartContainer}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('CartScreen')}>
              <Text>{cart.length}</Text>
            </TouchableOpacity>
            <View style={styles.section}>
              <Text style={styles.headerText}>Categories</Text>
              <View style={styles.grid}>
                {categoriesTrimmed.map(item => (
                  <CategoryCard
                    key={item.slug}
                    text={item.name}
                    onPress={() =>
                      navigation.navigate('ProductsCategoryScreen', {
                        category: item,
                      })
                    }
                  />
                ))}
              </View>
            </View>
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
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    gap: 18,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 800,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  cartContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
