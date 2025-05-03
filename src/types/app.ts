import {ProductSimple} from './product';

export type Cart = ProductSimple & {
  quantity: number;
};
