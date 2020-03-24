const path = require("path");
// const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIB = [
  "axios",
  "firebase",
  "path",
  "react",
  "react-dom",
  "react-redux",
  "react-router-dom",
  "redux",
  "redux-persist",
  "redux-thunk",
  "reselect"
];

const entry = {
  bundle: path.join(__dirname, "src/index.js"),
  vendor: VENDOR_LIB
};

const output = {
  path: path.join(__dirname, "dist"),
  filename: "[name].[chunkhash].js"
};

const devServer = {
  contentBase: path.join(__dirname, "dist"),
  port: 3000
};

const _module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: "babel-loader"
    },
    {
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"]
    },
    {
      test: /\.(css|scss)$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /\.(jpe?g|gif|png|svg|woff|woff2|eot|ttf|wav|mp3|ico)$/,
      use: [
        {
          loader: "file-loader"
        }
      ]
    }
  ]
};

const optimization = {
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /node_modules[\\/]/,
        name: "vendor",
        enforce: true,
        chunks: "all"
      }
    }
  }
};

const plugins = [
  new HtmlWebpackPlugin({ template: path.join(__dirname, "src/index.html") })
];

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry,
  output,
  devServer,
  module: _module,
  optimization,
  plugins
};
