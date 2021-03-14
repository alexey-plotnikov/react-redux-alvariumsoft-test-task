import React from "react";

import FiltrationContainer from "containers/Filtration/Filtration";
import ProductsContainer from "containers/Products/Products";
import "./Content.scss";

const ContentComponent = (props) => {
  return (
    <div className="content-component">
      <div className="filtred-products">
        <FiltrationContainer />
        <ProductsContainer />
      </div>
    </div>
  );
};

export default ContentComponent;
