import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width: wWidth} = Dimensions.get('window');
const CARD_SIZE = wWidth / 2 - 25;

type Props = {
  text: string;
  thumbnail: string;
};

const ProductCard = ({text, thumbnail}: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: thumbnail}} style={styles.image} />
      <Text style={styles.text} numberOfLines={2}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE + 100,
    padding: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: CARD_SIZE,
    height: CARD_SIZE,
  },
});

export default ProductCard;
