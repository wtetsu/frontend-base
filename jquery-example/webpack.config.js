const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/app.js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],  
  module: {
    loaders: [
    ]
  }
};
