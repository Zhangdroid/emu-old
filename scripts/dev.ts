import serve, { Options as WebpackServeOptions } from "webpack-serve";

import webpackDevConfig from "../configs/webpack/dev";

const argv = {};
const webpackServeConfig: WebpackServeOptions = {
  config: webpackDevConfig,
  logLevel: "silent",
  devMiddleware: {
    publicPath: "/",
    logLevel: "silent"
  },
  hotClient: {
    logLevel: "silent",
  }
};

serve(argv, webpackServeConfig).then(() => {
  console.log('Start building 🚀');
});
