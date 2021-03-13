import React from "react";

import ProductsList from "components/ProductList/ProductList";

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProductsList />
      </div>
    );
  }
}

export default ProductsContainer;
