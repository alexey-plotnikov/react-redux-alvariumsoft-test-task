import React from "react";

import ProductItem from "components/ProductItem/ProductItem";

import "./ProductList.scss";

const ProductList = (props) => {
  return (
    <div>
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
