import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import paths from "../paths";

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
    modules: ["node_modules", paths.appSrc]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${paths.appSrc}/index.html`
    })
  ]
};

export default config;
