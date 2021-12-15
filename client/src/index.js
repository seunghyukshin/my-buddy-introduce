import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";

import userReducer from "./reducers/User";

const store = createStore(userReducer);
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
