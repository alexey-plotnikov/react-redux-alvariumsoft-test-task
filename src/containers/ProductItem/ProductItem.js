import React from "react";

import ProductItem from "components/ProductItem/ProductItem";

class ProductItemContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProductItem />
      </div>
    );
  }
}

export default ProductItemContainer;
