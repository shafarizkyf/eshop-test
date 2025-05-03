import {AppContext} from 'context/AppContext';
import {useContext} from 'react';
import {ProductSimple} from 'types/product';
import {toast} from 'utils/feature';

const useProduct = () => {
  const {cart, setCart} = useContext(AppContext);

  const addToCart = (product: ProductSimple) => {
    const _cart = [...cart];
    const index = _cart.findIndex(item => item.id === product.id);

    if (index === -1) {
      _cart.push({
        ...product,
        quantity: 1,
      });

      toast('Added to Cart');
    } else {
      _cart[index].quantity += 1;

      toast('Cart Updated');
    }

    setCart(_cart);
  };

  return {
    addToCart,
  };
};

export default useProduct;
