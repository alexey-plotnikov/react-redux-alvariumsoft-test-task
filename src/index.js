import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "store/store";

import ContentComponent from "components/Content/Content";

import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ContentComponent />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
