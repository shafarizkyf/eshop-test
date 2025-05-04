import {createStackNavigator} from '@react-navigation/stack';
import StackHeader from 'components/StackHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CartScreen from 'screens/CartScreen';
import HomeScreen from 'screens/HomeScreen';
import ProductDetailScreen from 'screens/ProductDetailScreen';
import ProductsCategoryScreen from 'screens/ProductsCategoryScreen';
import color from 'styles/color';
import {Category, ProductSimple} from 'types/product';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductsCategoryScreen: {
    category: Category;
  };
  CartScreen: undefined;
  ProductDetailScreen: ProductSimple;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      screenOptions={{header: props => <StackHeader {...props} />}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          cardStyle: {
            paddingTop: insets.top,
            backgroundColor: color.bgWhite,
          },
        }}
      />
      <Stack.Screen
        name="ProductsCategoryScreen"
        component={ProductsCategoryScreen}
        options={{
          headerShown: false,
          cardStyle: {
            paddingTop: insets.top,
            backgroundColor: color.bgWhite,
          },
        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: 'Cart',
          cardStyle: {
            backgroundColor: color.bgWhite,
          },
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={{
          cardStyle: {
            backgroundColor: color.bgWhite,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
