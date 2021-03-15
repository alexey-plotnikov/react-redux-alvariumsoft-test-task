import React from "react";

import { connect } from "react-redux";
import { setVisibilityFilter } from "actions/actions";
import FiltrationPanel from "components/FiltrationPanel/FiltrationPanel";

const mapStateToProps = (state) => {
  return { filter: state.visibilityFilter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
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

  render() {
    const { filter } = this.props;

    return <FiltrationPanel handleVisibilityFilter={this.handleVisibilityFilter} filter={filter} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltrationContainer);
