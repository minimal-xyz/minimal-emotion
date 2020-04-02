var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main",
  output: {
    path: __dirname + "/dist",
    filename: "main.js"
  },
  module: {
    rules: [
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
  plugins: [new HtmlWebpackPlugin({ template: "template.ejs" })]
};
