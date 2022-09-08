import { actionConstants } from "constants";
const {
  SORTERS: {
    SORT_BY_PRICE: { HIGH_TO_LOW, LOW_TO_HIGH },
  },
} = actionConstants;
const sortProductsWRTPrice = ({ sortChoice }, currentProductsList) => {
  if (sortChoice === HIGH_TO_LOW) {
    return [...currentProductsList].sort(
      (product1, product2) => Number(product2.price) - Number(product1.price)
    );
  } else if (sortChoice === LOW_TO_HIGH) {
    return [...currentProductsList].sort(
      (product1, product2) => Number(product1.price) - Number(product2.price)
    );
  } else {
    return [...currentProductsList];
  }
};
export { sortProductsWRTPrice };
