import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";

import store from "store";

const Component = () => <div>Hello, world</div>;

const HotComponent = hot(module)(Component);

const App = () => (
  <Provider store={store}>
    <HotComponent />
  </Provider>
);

export default App;
