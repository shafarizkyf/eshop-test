import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {getProductCategories} from 'services/product';
import {Cart} from 'types/app';
import {Category, ProductSimple} from 'types/product';
import {retrieveObject} from 'utils/storage';

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
  const [categories, setCategories] = useState<Category[]>([]);
  const [favorites, setFavorites] = useState<ProductSimple[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    getProductCategories().then(setCategories);

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
  }, []);

  return (
    <AppContext.Provider
      value={{categories, cart, setCart, favorites, setFavorites}}>
      {children}
    </AppContext.Provider>
  );
};
