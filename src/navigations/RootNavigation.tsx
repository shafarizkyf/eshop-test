import {createStackNavigator} from '@react-navigation/stack';
import StackHeader from 'components/StackHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CartScreen from 'screens/CartScreen';
import ProductDetailScreen from 'screens/ProductDetailScreen';
import ProductsCategoryScreen from 'screens/ProductsCategoryScreen';
import color from 'styles/color';
import {Category, ProductSimple} from 'types/product';
import BottomTabNavigation from './BottomTabNavigation';
import RegistrationScreen from 'screens/RegistrationScreen';
import LoginScreen from 'screens/LoginScreen';

export type RootStackParamList = {
  BottomTabNavigation: undefined;
  ProductsCategoryScreen: {
    category: Category;
  };
  CartScreen: undefined;
  ProductDetailScreen: ProductSimple;
  RegistrationScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <StackHeader {...props} />,
      }}>
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
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
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          cardStyle: {
            backgroundColor: color.bgWhite,
          },
        }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
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
