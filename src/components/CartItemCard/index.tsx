import FastImage from '@d11/react-native-fast-image';
import useProduct from 'hooks/useProduct';
import {useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import style from 'styles/style';

type Props = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

const CartItemCard = (props: Props) => {
  const {removeFromCart, updateProductInCart} = useProduct();
  const [quantity, setQuantity] = useState<number>(props.quantity);

  const subTotal = useMemo(() => {
    return (props.price * quantity).toFixed(2);
  }, [props, quantity]);

  const onChangeQuantity = (action: 'add' | 'substract') => {
    if (action === 'add') {
      setQuantity(prev => prev + 1);
      updateProductInCart(props.id, quantity + 1);
    } else if (quantity > 1) {
      setQuantity(prev => prev - 1);
      updateProductInCart(props.id, quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[style.row, style.gap18]}>
        <FastImage source={{uri: props.thumbnail}} style={styles.thumbnail} />
        <View style={[style.flex1, style.gap8]}>
          <Text>{props.title}</Text>
          <Text>{subTotal}</Text>
          <View style={style.rowBetweenInCenter}>
            <View style={styles.quantityControlContainer}>
              <TouchableOpacity
                style={styles.quantityControl}
                activeOpacity={0.8}
                onPress={() => onChangeQuantity('substract')}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityControl}
                activeOpacity={0.8}
                onPress={() => onChangeQuantity('add')}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => removeFromCart(props.id)}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  quantityControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityControl: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartItemCard;
