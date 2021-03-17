import React from "react";

import { connect } from "react-redux";
import { setVisibilityFilter, setCurrency } from "actions/actions";
import FiltrationPanel from "components/FiltrationPanel/FiltrationPanel";

const mapStateToProps = (state) => {
  return { filter: state.visibilityFilter, 
    min: state.priceLimits.min, 
    max: state.priceLimits.max 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
    setCurrency: (currency) => dispatch(setCurrency(currency)),
  };
};

class FiltrationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handleVisibilityFilter = (event) => {
    const { setVisibilityFilter } = this.props;
    setVisibilityFilter(event.target.value);
  };

  handleCurrencyChange = (currency) => {
    const { setCurrency } = this.props;
    setCurrency(currency);
  };

  render() {
    const { filter } = this.props;
    
    return (
      <FiltrationPanel
        handleCurrencyChange={this.handleCurrencyChange}
        handleVisibilityFilter={this.handleVisibilityFilter}
        filter={filter}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltrationContainer);
