import React, { createContext, useState } from 'react'
const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [productsData, setProductsData] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <ProductContext.Provider value={{productsData, setProductsData, cart, setCart}}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductContext, ProductProvider}