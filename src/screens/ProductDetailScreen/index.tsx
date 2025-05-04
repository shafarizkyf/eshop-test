import FastImage from '@d11/react-native-fast-image';
import Icon from '@react-native-vector-icons/ionicons';
import {StackHeaderProps} from '@react-navigation/stack';
import Button from 'components/Button';
import Chip from 'components/Chip';
import ProductDetailHeader from 'components/ProductDetailHeader';
import {AppContext} from 'context/AppContext';
import useProduct from 'hooks/useProduct';
import {RootStackProps} from 'navigations/type';
import {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {getProductById} from 'services/product';
import color from 'styles/color';
import style from 'styles/style';
import {Product} from 'types/product';
import {colorAlpha} from 'utils/color';
import ReviewCard from './ReviewCard';

const ProductDetailScreen = ({
  route,
  navigation,
}: RootStackProps<'ProductDetailScreen'>) => {
  const {id, thumbnail, title, price} = route.params;

  const {favorites} = useContext(AppContext);
  const {addToCart, toggleFavorite} = useProduct();

  const [product, setProduct] = useState<Product>();

  const renderProductDetailHeader = (props: StackHeaderProps) => (
    <ProductDetailHeader
      {...props}
      toggleFavorite={() => toggleFavorite(route.params)}
      isFavorite={favorites.find(f => f.id === id) !== undefined}
    />
  );

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, [id]);

  useEffect(() => {
    navigation.setOptions({
      header: renderProductDetailHeader,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, favorites]);

  return (
    <View style={style.flex1}>
      <ScrollView contentContainerStyle={style.gap4}>
        <FastImage
          source={{uri: thumbnail}}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.section}>
          <View style={[style.gap4, style.mb5]}>
            <Text style={styles.title} numberOfLines={2}>
              {product?.title || title}
            </Text>
            <Text style={style.f10} numberOfLines={2}>
              {`By ${product?.brand}`}
            </Text>
          </View>
          <Text style={styles.price} numberOfLines={2}>
            {`$${product?.price || price}`}
          </Text>
          <View style={[style.row, style.gap8]}>
            <Chip>
              <Icon name="star" color={color.primary} size={14} />
              <Text style={style.f12}>{product?.rating}</Text>
              <Text style={style.f10}>Reviews</Text>
            </Chip>
            <Chip>
              <Icon name="cube" color={color.primary} size={14} />
              <Text style={style.f12}>{product?.stock}</Text>
              <Text style={style.f10}>Stock</Text>
            </Chip>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={style.headerText}>Description</Text>
          <Text style={styles.desc}>{product?.description}</Text>
        </View>
        <View style={styles.section}>
          <Text style={style.headerText}>Reviews</Text>
          {product?.reviews.map((review, index) => (
            <ReviewCard key={`ReviewCard-${index}`} {...review} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button text="Add to cart" onPress={() => addToCart(route.params)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  image: {
    width: undefined,
    height: 200,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  price: {
    fontSize: 16,
    fontWeight: 500,
  },
  desc: {
    marginTop: 10,
    color: colorAlpha('#000', 0.5),
  },
  footer: {
    marginBottom: 40,
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
