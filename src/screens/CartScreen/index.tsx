import Button from 'components/Button';
import CartItemCard from 'components/CartItemCard';
import {AppContext} from 'context/AppContext';
import {useContext, useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import style from 'styles/style';

const CartScreen = () => {
  const {cart} = useContext(AppContext);

  const total = useMemo(() => {
    return cart.reduce((a, b) => a + b.price * b.quantity, 0);
  }, [cart]);

  return (
    <View style={style.flex1}>
      <FlatList
        data={cart}
        keyExtractor={item => item.id + item.title}
        renderItem={({item}) => (
          <CartItemCard
            id={item.id}
            price={item.price}
            quantity={item.quantity}
            thumbnail={item.thumbnail}
            title={item.title}
          />
        )}
        contentContainerStyle={style.gap18}
        ListEmptyComponent={<Text>Empty Cart</Text>}
        style={style.ph20}
      />
      <View style={styles.footer}>
        <View style={style.rowBetweenInCenter}>
          <Text>Total</Text>
          <Text>{total.toFixed(2)}</Text>
        </View>
        <Button text="Checkout" disabled={!cart.length} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingTop: 20,
    paddingBottom: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    gap: 18,
  },
});

export default CartScreen;
