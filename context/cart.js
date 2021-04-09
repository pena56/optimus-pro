import { createContext, useState, useEffect } from 'react';
import { formatPrice } from '@/utils/helpers';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // const [cart, setCart] = useState(courses);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  const addToCart = (item) => {
    console.log(`Adding ${item} to cart`);
    return setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id) => {
    let newCart = [...cart];
    const index = cart.findIndex((cartItem) => cartItem.id === id);
    if (index >= 0) {
      newCart.splice(index, 1);
    }
    return setCart(newCart);
  };

  const checkIfItemInCart = (item) => {
    return cart.includes(item);
  };

  const getCartTotal = () => {
    let totalCost = cart?.reduce((amount, item) => item.price + amount, 0);
    setTotal(formatPrice(totalCost));
    return total;
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // useEffect(() => {
  //   // Loca storage
  //   let newCartItems = cart.reduce((total, cartItems) => {
  //     // console.log({total, cartItems})
  //     return (total += cartItems);
  //   }, 0);
  //   setCartItems(newCartItems);
  //   // console.log(newCartItems)

  //   // cart total
  //   let newTotal = cart.reduce((total, cartItem) => {
  //     return (total += cartItem * cartItem.price);
  //   }, 0);

  //   Number(newTotal);
  //   newTotal = parseFloat(newTotal.toFixed(2));
  //   setTotal(newTotal);
  // }, [cart]);

  const value = {
    cart,
    getCartTotal,
    total,
    addToCart,
    removeFromCart,
    checkIfItemInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
