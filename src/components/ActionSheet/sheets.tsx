import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import CartActionSheet from './CartActionSheet';
import {Cart} from 'types/app';

registerSheet('cart-sheet', CartActionSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'cart-sheet': SheetDefinition<{
      payload: {
        cart: Cart[];
        subtotal: number;
      };
    }>;
  }
}

export {};
