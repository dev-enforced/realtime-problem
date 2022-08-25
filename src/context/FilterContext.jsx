import { createContext, useContext, useState, useReducer } from "react";
import { filterReducer, initialFilterState } from "reducers";
import {
  filterProductsWRTBrand,
  filterProductsWRTPrice,
  filterProductsWRTSize,
  sortProductsWRTPrice,
  cumulativeFiltersAndSorts,
} from "utilities/index.js";
import { useProducts } from "./ProductContext";

const FiltersContext = createContext();
const FiltersProvider = ({ children }) => {
  const { productsReceived } = useProducts();

  const [filterState, updateFilterState] = useReducer(
    filterReducer,
    initialFilterState
  );

  const finalProducts = cumulativeFiltersAndSorts(sortProductsWRTPrice)(
    filterState,
    [...productsReceived]
  );
  return (
    <FiltersContext.Provider
      value={{ filterState, updateFilterState, finalProducts }}
    >
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
