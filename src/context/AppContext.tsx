import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {getProductCategories} from 'services/product';
import {Category} from 'types/product';

export type AppContextProps = {
  categories: Category[];
};

export const AppContext = createContext<AppContextProps>({
  categories: [],
});

export default ({children}: PropsWithChildren) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getProductCategories().then(setCategories);
  }, []);

  return (
    <AppContext.Provider value={{categories}}>{children}</AppContext.Provider>
  );
};
