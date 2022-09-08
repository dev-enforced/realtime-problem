const filterProductsWRTBrand = (filterStateReceived, currentProductsList) => {
  const { brandsChosen } = filterStateReceived;
  if (
    Object.keys(brandsChosen).length === 0 ||
    Object.keys(brandsChosen).every(
      (everyBrand) => brandsChosen[everyBrand] === false
    )
  ) {
    return [...currentProductsList];
  } else {
    return [...currentProductsList].filter(
      (everyProduct) => brandsChosen[everyProduct.brand]
    );
  }
};
export { filterProductsWRTBrand };
