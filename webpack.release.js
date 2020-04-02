var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main",
  output: {
    path: __dirname + "/dist",
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/
      },
      {
        test: /\.tsx$/,
        exclude: /(node_modules)/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".tsx"]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),

    new HtmlWebpackPlugin({ template: "template.ejs" })
  ]
};
