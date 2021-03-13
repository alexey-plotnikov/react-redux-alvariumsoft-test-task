import React from "react";

import FiltrationContainer from "containers/Filtration/Filtration";
import ProductsContainer from "containers/Products/Products";
import "./Content.scss";

const ContentComponent = (props) => {
  return (
    <div>
      <FiltrationContainer />
      <ProductsContainer />
    </div>
  );
};

export default ContentComponent;
