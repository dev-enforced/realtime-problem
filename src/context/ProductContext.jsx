import { createContext, useContext, useEffect, useState } from "react";
import data from "data/products.json";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [productsReceived, updateProductsReceived] = useState([]);
  const setNewProductsList = () => {
    updateProductsReceived(data?.products);
    setLoading(false);
  };
  useEffect(() => {
    const timer = setTimeout(setNewProductsList, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ProductContext.Provider value={{ loading, productsReceived }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProducts = () => {
  const contextReceived = useContext(ProductContext);
  if (contextReceived === undefined) {
    throw new Error("useProducts must be used within a product provider");
  }
  return contextReceived;
};
export { ProductProvider, useProducts };
