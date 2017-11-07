var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/main",
  output: {
    path: __dirname + "/dist",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),

    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({ template: "template.ejs" }),
    new UglifyJSPlugin({
      uglifyOptions: { ie8: false, ecma: 8 }
    })
  ]
};
