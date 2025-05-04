import Icon from '@react-native-vector-icons/ionicons';
import {StackHeaderProps} from '@react-navigation/stack';
import {navigationRef} from 'navigations/NavigationRef';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import color from 'styles/color';
import style from 'styles/style';

type Props = StackHeaderProps & {
  toggleFavorite: () => void;
  isFavorite: boolean;
};

const ProductDetailHeader = ({
  navigation,
  toggleFavorite,
  isFavorite,
}: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: insets.top + 20}]}>
      <View style={style.row}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          testID="productDetailBackBtn">
          <Icon name="arrow-back" size={18} />
        </TouchableOpacity>
        <View style={style.flex1} />
        <View style={[styles.icons]}>
          <TouchableOpacity
            style={styles.icon}
            onPress={toggleFavorite}
            testID="productDetailFavoriteBtn">
            <Icon
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={16}
              color={isFavorite ? color.favorite : '#000'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => navigationRef.navigate('CartScreen')}
            testID="productDetailToCartBtn">
            <Icon name="cart-outline" size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  icons: {
    flexDirection: 'row',
    gap: 8,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.muted,
  },
});

export default ProductDetailHeader;
