import { createContext, useState, useEffect } from 'react'
import courses from '../course.json'

const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState(courses)
  const [total, setTotal] = useState(0)
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    // Loca storage
    let newCartItems = cart.reduce((total, cartItems) => {
      // console.log({total, cartItems})
      return (total += cartItems)
    }, 0)
    setCartItems(newCartItems)
    console.log(newCartItems)

    // cart total
    let newTotal = cart.reduce((total, cartItem) => {
      return total += (cartItem * cartItem.price)
    }, 0);

    Number(newTotal)
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal)
  }, [cart])



  return <CartContext.Provider value={{cart, total, cartItems}} >
    {children}
  </CartContext.Provider>
} 



export { CartContext, CartProvider }