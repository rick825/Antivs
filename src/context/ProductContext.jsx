import React, { createContext, useState, useContext, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {


  const getDataFromStorage = (key, defaultValue) => {
    try {
      const item = localStorage.getItem(key);
      const parsedItem = item ? JSON.parse(item) : defaultValue;
      
     
      if (key === 'antivCart' && !Array.isArray(parsedItem)) {
        console.error(`Data from localStorage for ${key} is not an array`);
        return defaultValue;
      }
      
      return parsedItem;
    } catch (error) {
      console.error(`Error parsing ${key} from localStorage`, error);
      return defaultValue;
    }
  };


  const [cart, setCart] = useState(() => getDataFromStorage('antivCart', []));
  const [productToShow, setProductToShow] = useState(() => getDataFromStorage('selectedProduct', ''));


  useEffect(() => {
    localStorage.setItem('selectedProduct', JSON.stringify(productToShow));
  }, [productToShow]);


  useEffect(() => {
    localStorage.setItem('antivCart', JSON.stringify(cart));
  }, [cart]);

  return (
    <ProductContext.Provider value={{ cart, setCart, productToShow, setProductToShow }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
