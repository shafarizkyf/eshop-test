import {useMutation} from '@tanstack/react-query';
import {HTTP_STATUS} from 'constant/http';
import cart from 'services/cart';
import {toast} from 'utils/feature';

const useCart = () => {
  const addToCartMutation = useMutation({
    mutationFn: cart.addToCart,
    onSuccess: data => {
      if (data.status === HTTP_STATUS.CREATED) {
        toast('Added to Cart');
      }
    },
    onError: console.log,
  });

  return {
    addToCartMutation,
  };
};

export default useCart;
