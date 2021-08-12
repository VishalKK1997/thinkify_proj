import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import reducers from "./reducers";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";

const store = createStore(reducers, applyMiddleware(compose(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
