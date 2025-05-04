import {CATEGORY_CARD_SIZE} from 'constant/card';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type Props = {
  text: string;
  onPress: () => void;
};

const CategoryCard = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      testID={`category-${text.toLowerCase()}`}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CATEGORY_CARD_SIZE,
    height: CATEGORY_CARD_SIZE / 2,
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
