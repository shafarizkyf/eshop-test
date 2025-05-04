import {SheetProps} from 'react-native-actions-sheet';
import BaseActionSheet from './BaseActionSheet';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import CheckoutItemCard from 'components/CheckoutItemCard';
import color from 'styles/color';
import style from 'styles/style';

const {height: wHeight} = Dimensions.get('window');

const CartActionSheet = ({sheetId, payload}: SheetProps<'cart-sheet'>) => {
  return (
    <BaseActionSheet sheetId={sheetId}>
      <FlatList
        keyExtractor={item => item.id + item.title}
        data={payload?.cart || []}
        ListHeaderComponent={
          <Text style={[style.headerText, style.mb20]}>Checkout</Text>
        }
        renderItem={({item}) => (
          <CheckoutItemCard
            key={item.id + item.title}
            title={item.title}
            thumbnail={item.thumbnail}
            subtotal={(item.price * item.quantity).toFixed(2)}
          />
        )}
        style={styles.container}
      />
      <View style={styles.footer}>
        <Text style={[styles.total]}>Total</Text>
        <Text style={[styles.total, styles.totalAmount]}>
          {'$' + payload?.subtotal.toFixed(2)}
        </Text>
      </View>
    </BaseActionSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    height: wHeight * 0.6,
    padding: 20,
  },
  footer: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: color.primary,
    paddingVertical: 22,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    color: '#fff',
  },
  totalAmount: {
    fontWeight: 800,
  },
});

export default CartActionSheet;
