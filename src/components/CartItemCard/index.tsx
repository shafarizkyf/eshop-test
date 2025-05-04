import FastImage from '@d11/react-native-fast-image';
import Icon from '@react-native-vector-icons/ionicons';
import Checkbox from 'components/Checkbox';
import useProduct from 'hooks/useProduct';
import {navigationRef} from 'navigations/NavigationRef';
import {useMemo, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from 'styles/color';
import style from 'styles/style';

type Props = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

const CartItemCard = (props: Props) => {
  const {removeFromCart, updateProductInCart, selectItemFromCart} =
    useProduct();
  const [quantity, setQuantity] = useState<number>(props.quantity);
  const [isChecked, setIsChecked] = useState<boolean>(true);

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

  const onToggleSelect = () => {
    setIsChecked(prev => !prev);
    selectItemFromCart(props.id, !isChecked);
  };

  const onRemove = () => {
    Alert.alert(
      'Are you sure?',
      `You are going to remove ${props.title} from the cart`,
      [
        {
          text: 'Yes',
          onPress: () => removeFromCart(props.id),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          isPreferred: true,
        },
      ],
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigationRef.navigate('ProductDetailScreen', props)}>
      <View style={[style.row, style.gap18]}>
        <Checkbox
          checked={isChecked}
          onPress={onToggleSelect}
          testID={`Checkbox-${props.title.replace(/\s/, '')}`}
        />
        <FastImage source={{uri: props.thumbnail}} style={styles.thumbnail} />
        <View style={[style.flex1, style.gap8]}>
          <Text>{props.title}</Text>
          <Text>{`$${subTotal}`}</Text>
          <View style={style.rowBetweenInCenter}>
            <View style={styles.quantityControlContainer}>
              <TouchableOpacity
                style={styles.quantityControl}
                activeOpacity={0.8}
                onPress={() => onChangeQuantity('substract')}
                testID={`substractQtyBtn-${props.title.replace(/\s/, '')}`}>
                <Icon name="remove-outline" />
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityControl}
                activeOpacity={0.8}
                onPress={() => onChangeQuantity('add')}
                testID={`addQtyBtn-${props.title.replace(/\s/, '')}`}>
                <Icon name="add-outline" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
              <Icon name="trash-outline" color={color.muted} size={16} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
