const path = require("path");
const nodeExternals = require("webpack-node-externals");
const TerserPlugin = require("terser-webpack-plugin");
const cwd = process.cwd();

module.exports = {
  name: "server",
  entry: [path.join(cwd, "server", "index.ts")],
  externals: nodeExternals(),
  output: {
    path: path.join(cwd, "build"),
    filename: "server.js",
    publicPath: "/build/",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: path.join(cwd, "server"),
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx",".js"],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
};
