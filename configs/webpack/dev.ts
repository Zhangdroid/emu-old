import { Configuration } from "webpack";
import merge from "webpack-merge";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";

import webpackBaseConfig from "./base";

const config: Configuration = merge(webpackBaseConfig, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ]
});

export default config;
