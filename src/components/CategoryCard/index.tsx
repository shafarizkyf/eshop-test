import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {width: wWidth} = Dimensions.get('window');
const CARD_SIZE = wWidth / 3 - 20;

type Props = {
  text: string;
};

const CategoryCard = ({text}: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{text}</Text>
    </View>
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
