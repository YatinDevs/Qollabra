import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";
function ProductList({ products }) {
  return (
    <div className="allContainer">
      {products.map((product, index) => (
        <Product {...product} key={index}></Product>
      ))}
    </div>
  );
}

export default ProductList;
