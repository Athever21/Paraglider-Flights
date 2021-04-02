const path = require("path");
const webpack = require("webpack");
const cwd = process.cwd();
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  name: "browser",
  devtool: "eval-source-map",
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(cwd, "client", "index.tsx"),
  ],
  output: {
    path: path.join(cwd, "build"),
    filename: "bundle.js",
    publicPath: "/build/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.join(cwd, "client"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.join(cwd, "client"),
      },
    ],
  },
  optimization: {
    emitOnErrors: false,
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  resolve: {
    extensions: [".ts", ".tsx",".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
