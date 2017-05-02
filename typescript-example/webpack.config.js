const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: __dirname,
    filename: "./dist/app.js"
  },
  plugins: [
  ],  
  module: {
    loaders: [
    ],
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  devtool: "source-map"
};
