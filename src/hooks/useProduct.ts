import {AppContext} from 'context/AppContext';
import {useContext} from 'react';
import {ProductSimple} from 'types/product';
import {toast} from 'utils/feature';

const useProduct = () => {
  const {cart, setCart, favorites, setFavorites} = useContext(AppContext);

  const toggleFavorite = (product: ProductSimple) => {
    const _favorites = [...favorites];
    const index = _favorites.findIndex(item => item.id === product.id);

    if (index === -1) {
      _favorites.push({
        ...product,
      });

      toast('Added to favorite');
    } else {
      _favorites.splice(index, 1);
      toast('Removed from favorite');
    }

    setFavorites(_favorites);
  };

  const addToCart = (product: ProductSimple) => {
    const _cart = [...cart];
    const index = _cart.findIndex(item => item.id === product.id);

    if (index === -1) {
      _cart.push({
        ...product,
        quantity: 1,
        selected: true,
      });

      toast('Added to Cart');
    } else {
      _cart[index].quantity += 1;

      toast('Cart Updated');
    }

    setCart(_cart);
  };

  const updateProductInCart = (productId: number, quantity: number) => {
    const _cart = [...cart];
    const index = _cart.findIndex(item => item.id === productId);

    if (index !== -1) {
      _cart[index].quantity = quantity;
      setCart(_cart);
    }
  };

  const removeFromCart = (productId: number) => {
    const _cart = [...cart];
    const index = _cart.findIndex(item => item.id === productId);

    if (index !== -1) {
      _cart.splice(index, 1);
      setCart(_cart);
    }
  };

  const selectItemFromCart = (productId: number, isSelected: boolean) => {
    const _cart = [...cart];
    const index = _cart.findIndex(item => item.id === productId);

    if (index !== -1) {
      _cart[index].selected = isSelected;
      setCart(_cart);
    }
  };

  return {
    addToCart,
    removeFromCart,
    updateProductInCart,
    selectItemFromCart,
    toggleFavorite,
  };
};

export default useProduct;
