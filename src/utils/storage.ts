import {MMKV} from 'react-native-mmkv';

export const STORAGE_KEYS = {
  FAVORITE_PRODUCTS: 'favorite_products',
  CART: 'cart',
};

export const storage = new MMKV();

export const saveObject = (key: keyof typeof STORAGE_KEYS, value: any) => {
  storage.set(key, JSON.stringify(value));
};

export const retrieveObject = <T>(key: keyof typeof STORAGE_KEYS) => {
  const valueStr = storage.getString(key);
  if (valueStr) {
    return JSON.parse(valueStr) as T;
  }

  return null;
};
