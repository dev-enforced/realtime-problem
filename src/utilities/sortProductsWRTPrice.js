const sortProductsWRTPrice = ({ sortChoice }, currentProductsList) => {
  if (sortChoice === "HIGH-TO-LOW") {
    return [...currentProductsList];
  } else if (sortChoice === "LOW-TO-HIGH") {
    return [...currentProductsList];
  } else {
    return [...currentProductsList];
  }
};
export { sortProductsWRTPrice };
