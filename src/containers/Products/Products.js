import React from "react";
import { connect } from "react-redux";

import { FILTRATION_PANEL_VALUES } from "common/constants";
import {} from "actions/actions";
import ProductsList from "components/ProductList/ProductList";

const mapStateToProps = (state) => {
  return { products: state.products, filter: state.visibilityFilter };
};

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  filterByOrder = (products, filter) => {
    products.sort((first, second) => {
      switch (filter) {
        case FILTRATION_PANEL_VALUES.ALPHABETICAL:
          if (first.name.toLowerCase() < second.name.toLowerCase()) return -1;
          if (first.name.toLowerCase() > second.name.toLowerCase()) return 1;
          return 0;
        case FILTRATION_PANEL_VALUES.ASCENDING:
          if (first.price < second.price) return -1;
          if (first.price > second.price) return 1;
          return 0;
        case FILTRATION_PANEL_VALUES.DESCENDING:
          if (first.price > second.price) return -1;
          if (first.price < second.price) return 1;
          return 0;
      }
    });
  };

  render() {
    const { products, filter } = this.props;
    const filtredProducts = this.filterByOrder(products, filter);

    return <ProductsList products={products} />;
  }
}

export default connect(mapStateToProps, null)(ProductsContainer);
