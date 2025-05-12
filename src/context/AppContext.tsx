import {focusManager, onlineManager, useQuery} from '@tanstack/react-query';
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {getProductCategories} from 'services/product';
import {Cart} from 'types/app';
import {Category, ProductSimple} from 'types/product';
import {retrieveObject} from 'utils/storage';
import * as Network from 'expo-network';
import {useAppState} from 'hooks/useAppState';
import {Session} from '@supabase/supabase-js';
import {supabase} from 'services/supabase';
import cartService from 'services/cart';

export type AppContextProps = {
  categories: Category[];
  cart: Cart[];
  setCart: (value: Cart[]) => void;
  favorites: ProductSimple[];
  setFavorites: (value: ProductSimple[]) => void;
  session: Session | null;
  setSession: (value: Session | null) => void;
};

export const AppContext = createContext<AppContextProps>({
  categories: [],
  cart: [],
  setCart: () => null,
  favorites: [],
  setFavorites: () => null,
  session: null,
  setSession: () => null,
});

export default ({children}: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<ProductSimple[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);
  const [session, setSession] = useState<Session | null>(null);

  const cartQuery = useQuery({
    queryKey: ['cart'],
    queryFn: cartService.getCart,
  });

  console.log('cartQuery: ', cartQuery.data);

  const categoriesQuery = useQuery({
    queryKey: ['categories'],
    queryFn: getProductCategories,
  });

  useAppState(status => {
    // refetch on app focus
    focusManager.setFocused(status === 'active');

    // Tells Supabase Auth to continuously refresh the session automatically if
    // the app is in the foreground. When this is added, you will continue to receive
    // `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
    // if the user's session is terminated. This should only be registered once.
    if (status === 'active') {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
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

    supabase.auth.getSession().then(response => {
      setSession(response.data.session);
    });

    supabase.auth.onAuthStateChange((_event, respoonse) => {
      setSession(respoonse);
    });

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
        session,
        setSession,
      }}>
      {children}
    </AppContext.Provider>
  );
};
