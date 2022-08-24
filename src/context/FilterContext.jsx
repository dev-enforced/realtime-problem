import { createContext, useContext, useState } from "react";
import {
  filterProductsWRTBrand,
  filterProductsWRTPrice,
  filterProductsWRTSize,
  sortProductsWRTPrice,
} from "utilities.js";
import { useProducts } from "./ProductContext";

const FiltersContext = createContext();
const FiltersProvider = ({ children }) => {
  const { productsReceived } = useProducts();
  const [filterState, setFilterState] = useState({
    sortChoice: "",
  });
  return (
    <FiltersContext.Provider value={{ filterState, setFilterState }}>
      {children}
    </FiltersContext.Provider>
  );
};
const useFilters = () => {
  const contextReceived = useContext(FiltersContext);
  if (contextReceived === undefined) {
    throw new Error("useFilters must be used within a Filter Provider");
  }
  return contextReceived;
};
export { useFilters, FiltersProvider };
