import Icon from '@react-native-vector-icons/ionicons';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from 'styles/color';

type Props = {
  counter: number;
  onPress: () => void;
};

const CartIcon = (props: Props) => (
  <TouchableOpacity
    style={styles.cartContainer}
    activeOpacity={0.8}
    onPress={props.onPress}>
    <Icon name="cart-outline" size={18} />
    {!!props.counter && (
      <View style={styles.cartCounter}>
        <Text style={styles.cartCounterText}>{props.counter}</Text>
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cartContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCounter: {
    position: 'absolute',
    top: 8,
    right: 4,
    width: 12,
    height: 12,
    borderRadius: 12 / 2,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCounterText: {
    fontSize: 8,
    color: '#fff',
  },
});

export default CartIcon;
