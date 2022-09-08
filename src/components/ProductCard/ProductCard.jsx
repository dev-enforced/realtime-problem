import React from "react";
import styles from "./ProductCard.module.css";
const ProductCard = ({ title, brand, gender, price, size }) => {
  return (
    <li>
      <strong>{brand}</strong>
      <p>{title}</p>
      <p>Rs {price}</p>
      <p>Size: {size}</p>
      <p>For: {gender}</p>
    </li>
  );
};

export { ProductCard };
