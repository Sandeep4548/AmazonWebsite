import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./componets/store/store";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Contextprovider from "./componets/context/Contextprovider";

ReactDOM.render(
  // <Provider store={store}>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </Provider>,
  <Contextprovider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Contextprovider>,
  document.getElementById("root")
);

reportWebVitals();
