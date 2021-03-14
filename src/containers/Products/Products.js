import React from "react";
import { connect } from "react-redux";
import {} from "actions/actions";
import ProductsList from "components/ProductList/ProductList";

const mapStateToProps = (state) => {
  return { products: state.products, filter: state.visibilityFilter };
};

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;
    return <ProductsList products={products} />;
  }
}

export default connect(mapStateToProps, null)(ProductsContainer);
