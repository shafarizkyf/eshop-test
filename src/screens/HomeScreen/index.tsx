import CategoryCard from 'components/CategoryCard';
import ProductCard from 'components/ProductCard';
import {AppContext} from 'context/AppContext';
import {RootStackProps} from 'navigations/type';
import {useContext, useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {getProducts} from 'services/product';
import style from 'styles/style';
import {Products} from 'types/product';

const HomeScreen = ({navigation}: RootStackProps<'HomeScreen'>) => {
  const {categories} = useContext(AppContext);

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
    getProducts().then(setProducts);
  }, []);

  return (
    <View style={[style.container, style.gap18]}>
      <FlatList
        ListHeaderComponent={
          <View style={style.gap18}>
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
          <ProductCard text={item.title} thumbnail={item.thumbnail} />
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
});

export default HomeScreen;
