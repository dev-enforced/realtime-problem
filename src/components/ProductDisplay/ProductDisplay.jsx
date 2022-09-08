import React from "react";
import { useProducts, useFilters } from "context";
import { ProductCard } from "components";
import styles from "./ProductDisplay.module.css";
const ProductDisplay = () => {
  const { loading } = useProducts();
  const { finalProducts } = useFilters();
  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <ol className={styles.product_display_parent_container}>
          {finalProducts.map((everyProduct) => {
            return <ProductCard {...everyProduct} key={everyProduct.id} />;
          })}
        </ol>
      )}
    </>
  );
};

export { ProductDisplay };
