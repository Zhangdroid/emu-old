import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

const middleware = [];
const composeEnhancers = composeWithDevTools;

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
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
