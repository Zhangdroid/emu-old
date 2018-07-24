import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";

const middleware = [];
let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  // tslint:disable-next-line no-var-requires
  const { logger } = require("redux-logger");
  middleware.push(logger);

  // tslint:disable-next-line no-var-requires
  const { composeWithDevTools } = require("redux-devtools-extension");
  composeEnhancers = composeWithDevTools;
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

if (module.hot) {
  module.hot.accept("./reducers", () => {
    store.replaceReducer(reducers);
  });
}

export default store;
