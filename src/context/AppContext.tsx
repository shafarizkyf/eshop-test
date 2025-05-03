import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {getProductCategories} from 'services/product';
import {Cart} from 'types/app';
import {Category} from 'types/product';

export type AppContextProps = {
  categories: Category[];
  cart: Cart[];
  setCart: (value: Cart[]) => void;
};

export const AppContext = createContext<AppContextProps>({
  categories: [],
  cart: [],
  setCart: () => null,
});

export default ({children}: PropsWithChildren) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    getProductCategories().then(setCategories);
  }, []);

  return (
    <AppContext.Provider value={{categories, cart, setCart}}>
      {children}
    </AppContext.Provider>
  );
};
