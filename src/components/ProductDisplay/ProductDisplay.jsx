import React from "react";
import { useProducts, useFilters } from "context";
import { ProductCard } from "components";
import styles from "./ProductDisplay.module.css";
const ProductDisplay = () => {
  const { loading } = useProducts();
  return <>{loading ? <>loading...</> : null}</>;
};

export { ProductDisplay };
