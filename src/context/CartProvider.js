import { useState } from "react";
import { CartContext } from "./cartContext";

const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    let prodID = item.id
    let existe = cart.some((prod) => prod.id === prodID);

    if (existe) {
      let carrito = cart.find((prod)=> prod.id === prodID ? prod.quantity += quantity : prod.quantity)
      setCart([carrito])
    } else {
      const newProd = {
        id: item.id,
        img: item.img,
        name: item.title,
        price: item.price,
        category: item.category,
        quantity: quantity,
        description: item.description,
        stock: item.stock,
        launchment: item.launchment
      };
      setCart([...cart, newProd]);
    }
  };

  const clear = () => setCart([]);

  const removeItem = (id) => {
    let prodID = id;
    let newCart = cart.filter((item) => item.id !== prodID);
    setCart([...newCart]);
  };


  return (
    <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
