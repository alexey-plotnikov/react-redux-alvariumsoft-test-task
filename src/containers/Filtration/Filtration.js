import React from "react";

import FiltrationPanel from "components/FiltrationPanel/FiltrationPanel";

class FiltrationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FiltrationPanel />
      </div>
    );
  }
}

export default FiltrationContainer;
