import {focusManager, onlineManager, useQuery} from '@tanstack/react-query';
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {getProductCategories} from 'services/product';
import {Cart} from 'types/app';
import {Category, ProductSimple} from 'types/product';
import {retrieveObject} from 'utils/storage';
import * as Network from 'expo-network';
import {useAppState} from 'hooks/useAppState';

export type AppContextProps = {
  categories: Category[];
  cart: Cart[];
  setCart: (value: Cart[]) => void;
  favorites: ProductSimple[];
  setFavorites: (value: ProductSimple[]) => void;
};

export const AppContext = createContext<AppContextProps>({
  categories: [],
  cart: [],
  setCart: () => null,
  favorites: [],
  setFavorites: () => null,
});

export default ({children}: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<ProductSimple[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: getProductCategories,
  });

  // refetch on app focus
  useAppState(status => {
    focusManager.setFocused(status === 'active');
  });

  useEffect(() => {
    // get saved favorite products
    const _favorites = retrieveObject<ProductSimple[]>('FAVORITE_PRODUCTS');
    if (_favorites) {
      setFavorites(_favorites);
    }

    // get saved cart items
    const _cart = retrieveObject<Cart[]>('CART');
    if (_cart) {
      setCart(_cart);
    }

    // auto refetch on reconnect
    onlineManager.setEventListener(setOnline => {
      const networkSubscription = Network.addNetworkStateListener(state => {
        setOnline(!!state.isConnected);
      });

      return networkSubscription.remove;
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        categories: categoriesQuery.data || [],
        cart,
        setCart,
        favorites: favorites,
        setFavorites,
      }}>
      {children}
    </AppContext.Provider>
  );
};
