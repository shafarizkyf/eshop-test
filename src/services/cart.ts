import {supabase} from './supabase';

type AddToCartRequest = {
  product_id: number;
  quantity: number;
};

export default {
  getCart: async () => {
    try {
      return await supabase.from('carts').select();
    } catch (error) {
      throw error;
    }
  },
  addToCart: async (data: AddToCartRequest) => {
    try {
      return await supabase.from('carts').insert(data);
    } catch (error) {
      throw error;
    }
  },
};
