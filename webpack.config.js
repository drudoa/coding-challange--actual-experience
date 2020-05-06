/*
  config adapted from: 
  https://webpack.js.org/configuration/
  https://dev.to/vish448/create-react-project-without-create-react-app-3goh
  https://linguinecode.com/post/how-to-setup-webpack-dev-server-react-babel
*/

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/",
    port: 3000,
    overlay: true,
    compress: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "public/index.html",
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
}
