import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import Button from 'components/Button';
import Icon from '@react-native-vector-icons/ionicons';
import color from 'styles/color';
import {PRODUCT_CARD_SIZE} from 'constant/card';

type Props = {
  text: string;
  thumbnail: string;
  onPress: () => void;
  onAddToCart: () => void;
  onToggleFavorite: () => void;
  isFavorite: boolean;
};

const ProductCard = ({
  text,
  thumbnail,
  onPress,
  onAddToCart,
  onToggleFavorite,
  isFavorite,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      testID={`ProductCard-${text.replace(/\s/, '')}`}>
      <FastImage
        source={{uri: thumbnail}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text} numberOfLines={2}>
        {text}
      </Text>
      <Button style={styles.button} onPress={onAddToCart}>
        <Icon name="cart-outline" size={16} color={color.primary} />
        <Text style={styles.addToCartText}>Add to cart</Text>
      </Button>
      <TouchableOpacity
        style={styles.heartIcon}
        activeOpacity={0.8}
        onPress={onToggleFavorite}>
        <Icon
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={18}
          color={isFavorite ? color.favorite : '#000'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: PRODUCT_CARD_SIZE,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 600,
  },
  image: {
    width: PRODUCT_CARD_SIZE,
    height: PRODUCT_CARD_SIZE,
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: color.primary,
    alignItems: 'center',
    gap: 4,
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 10,
  },
  addToCartText: {
    color: color.primary,
    fontSize: 12,
  },
  heartIcon: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default ProductCard;
