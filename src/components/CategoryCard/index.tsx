import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

const {width: wWidth} = Dimensions.get('window');
const CARD_SIZE = wWidth / 3 - 20;

type Props = {
  text: string;
  onPress: () => void;
};

const CategoryCard = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default CategoryCard;
