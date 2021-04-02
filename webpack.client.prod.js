const path = require("path");
const cwd = process.cwd();
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  name: "browser",
  devtool: "eval-source-map",
  entry: [path.join(cwd,"client","index.tsx")],
  output: {
    path: path.join(cwd,"build"),
    filename: "bundle-[name].js",
    publicPath: "/build/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: path.join(cwd,"client")
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"],
        include: path.join(cwd,"client")
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: "all"
    }
  },
  resolve: {
    extensions: [".ts",".tsx"]
  }
}