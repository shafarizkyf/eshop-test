import {createStackNavigator} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HomeScreen from 'screens/HomeScreen';
import ProductsCategoryScreen from 'screens/ProductsCategoryScreen';
import color from 'styles/color';
import {Category} from 'types/product';

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductsCategoryScreen: {
    category: Category;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
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
          cardStyle: {
            paddingTop: insets.top,
            backgroundColor: color.bgWhite,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
