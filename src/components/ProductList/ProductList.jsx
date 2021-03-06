import React from "react";

import ProductItem from "components/ProductItem/ProductItem";

import "./ProductList.scss";

const ProductList = (props) => {
  const { products, currency } = props;

  return (
    <div className="products-component">
      {products.map(({ id, name, price, image, description }) => (
        <div className="product-items" key={id}>
          <ProductItem
            currency={currency}
            name={name}
            price={price}
            image={image}
            description={description}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
