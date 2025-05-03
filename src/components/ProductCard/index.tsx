import {Dimensions, StyleSheet, Text, View} from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import Button from 'components/Button';

const {width: wWidth} = Dimensions.get('window');
const CARD_SIZE = wWidth / 2 - 25;

type Props = {
  text: string;
  thumbnail: string;
  onAddToCart: () => void;
};

const ProductCard = ({text, thumbnail, onAddToCart}: Props) => {
  return (
    <View style={styles.card}>
      <FastImage source={{uri: thumbnail}} style={styles.image} />
      <Text style={styles.text} numberOfLines={2}>
        {text}
      </Text>
      <Button text="Add to cart" onPress={onAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    textAlign: 'center',
    fontWeight: 600,
  },
  image: {
    width: CARD_SIZE,
    height: CARD_SIZE,
  },
});

export default ProductCard;
