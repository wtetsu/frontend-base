const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "./dist/app.js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [],
  devServer: {
    contentBase: "dist/",
    historyApiFallback: true,
    port: 3355,
    hot: true
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  devtool: "source-map"
};
