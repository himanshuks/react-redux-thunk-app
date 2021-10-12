import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// Thunk is the middleware library
import thunk from "redux-thunk";

// This will provide Redux dev tools in browser to track the state changes
import { composeWithDevTools } from "redux-devtools-extension";

// This library can be used to console redux logs
// It includes Previous state, Action called, Next state
import logger from "redux-logger";

// import reducer from "./reducers/index";
import reducers from "./reducers/index";

// Below function will return NEXT function which will return ACTION function
// Returning NEXT function by passing action means proceed to next ACTION
// This can be the next MIDDLEWARE or REDUCER
const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Middleware ran...");
      return next(action);
    };
  };
};

// Above function can also be defined as below syntax
// It uses concatenated arrow functions
const crispMyLogger = (store) => (next) => (action) => {
  console.log("Middleware created using concatenated arrow functions...");
  return next(action);
};

// Below function will increment till 5, then decrements the value on NEXT click
const maxAtFive = (store) => (next) => (action) => {
  console.log("Stop the counter at Five...");
  console.log(`Store items ->`, store);

  if (store.getState().count >= 5) return next({ type: "DECREMENT" });
  return next(action);
};

// Store is created from REDUX library
// Order of middleware defines the sequence of running middleware
// Wrapping the middleware with redux dev tools

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(myLogger, crispMyLogger, maxAtFive, logger, thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
