import {ProductSimple} from './product';

export type Cart = ProductSimple & {
  quantity: number;
  selected: boolean;
};

export type FavoriteProduct = ProductSimple & {
  isFavorite: boolean;
};
