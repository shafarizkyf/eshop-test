import ProductCard from 'components/ProductCard';
import {RootStackProps} from 'navigations/type';
import {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getProductsByCategory} from 'services/product';
import style from 'styles/style';
import {Products} from 'types/product';

const ProductsCategoryScreen = ({
  route,
  navigation,
}: RootStackProps<'ProductsCategoryScreen'>) => {
  const {category} = route.params;
  const [products, setProducts] = useState<Products>({
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  });

  console.log(products);

  useEffect(() => {
    getProductsByCategory(category.slug).then(setProducts);
  }, [category.slug]);

  return (
    <View style={style.container}>
      <FlatList
        data={products.products}
        keyExtractor={item => item.id + item.title}
        ListHeaderComponent={
          <View style={[style.rowBetweenInCenter]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>

            <Text style={styles.headerText}>{category.name}</Text>
          </View>
        }
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
  headerText: {
    fontSize: 28,
    fontWeight: 800,
  },
});

export default ProductsCategoryScreen;
