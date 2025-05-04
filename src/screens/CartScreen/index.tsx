import Button from 'components/Button';
import CartItemCard from 'components/CartItemCard';
import RenderIf from 'components/RenderIf';
import {AppContext} from 'context/AppContext';
import LottieView from 'lottie-react-native';
import {useContext, useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import style from 'styles/style';

const CartScreen = () => {
  const {cart} = useContext(AppContext);

  const selectedCartItems = useMemo(() => {
    return cart.filter(item => item.selected);
  }, [cart]);

  const total = useMemo(() => {
    return selectedCartItems.reduce((a, b) => a + b.price * b.quantity, 0);
  }, [selectedCartItems]);

  const onCheckout = () => {
    SheetManager.show('cart-sheet', {
      payload: {
        cart: selectedCartItems,
        subtotal: total,
      },
    });
  };

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
        ListEmptyComponent={
          <View style={style.alignItemsCenter}>
            <LottieView
              source={require('@lottie/think-emoji.json')}
              style={styles.empty}
              autoPlay
            />
            <Text style={style.f24}>Cart Empty</Text>
          </View>
        }
        style={style.ph20}
      />
      <RenderIf isTrue={Boolean(cart.length)}>
        <View style={styles.footer}>
          <View style={style.rowBetweenInCenter}>
            <Text>Total</Text>
            <Text style={styles.total}>{'$' + total.toFixed(2)}</Text>
          </View>
          <Button
            text="Checkout"
            onPress={onCheckout}
            disabled={!selectedCartItems.length}
            testID="checkoutBtn"
          />
        </View>
      </RenderIf>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    gap: 18,
  },
  total: {
    fontWeight: 600,
    fontSize: 18,
  },
  empty: {
    width: 250,
    height: 250,
  },
});

export default CartScreen;
