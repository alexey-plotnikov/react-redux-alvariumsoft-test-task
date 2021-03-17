import React from "react";

import "./ProductItem.scss";

const ProductItem = (props) => {
  const { currency, name, price, image, description } = props;

  return (
    <div className="product-item-component">
      <div className="product-item-image">
        <img className="image" src={process.env.PUBLIC_URL + "assets/img/" + image} alt="" />
      </div>
      <div className="product-item-information">
        <p className="product-item-name">{name}</p>
        <p className="product-item-price">{price + " " + currency}</p>
        <div className="product-item-description">{description}</div>
      </div>
    </div>
  );
};

export default ProductItem;
