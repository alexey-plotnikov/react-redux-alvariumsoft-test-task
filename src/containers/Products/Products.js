import React from "react";
import { connect } from "react-redux";

import { FILTRATION_PANEL_VALUES } from "common/constants";
import { setPriceLimits } from "actions/actions";
import ProductsList from "components/ProductList/ProductList";

const mapStateToProps = (state) => {
  return { products: state.products, currency: state.currency, filter: state.visibilityFilter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPriceLimits: (min, max) => dispatch(setPriceLimits(min, max)),
  };
};

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSorting = () => {
    const { products, currency, filter } = this.props;

    let filtredProducts = [...products];

    filtredProducts = this.handleNewPrice(filtredProducts, currency);

    this.test(filtredProducts);

    filtredProducts = this.filterByOrder(filtredProducts, filter);

    return filtredProducts;
  };

  test = (products) => {
    const { setPriceLimits } = this.props;

    const min = products.reduce((acc, curr) => {
      return parseFloat(acc.price) < parseFloat(curr.price) ? acc : curr;
    });
    const max = products.reduce((acc, curr) => {
      return parseFloat(acc.price) > parseFloat(curr.price) ? acc : curr;
    });

    setPriceLimits(min.price, max.price);
  };

  handleNewPrice = (products, currency) => {
    if (currency === FILTRATION_PANEL_VALUES.USD) {
      products = products.map((product) => {
        let result = {
          ...product,
          price: parseFloat((product.price * FILTRATION_PANEL_VALUES.USD_CURRENCY).toFixed(2)),
        };
        return result;
      });
    }
    return products;
  };

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

    return products;
  };

  render() {
    const { currency } = this.props;
    const filtredProducts = this.handleSorting();

    return <ProductsList products={filtredProducts} currency={currency} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
