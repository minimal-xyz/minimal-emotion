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
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: [["env", { modules: false }]],
          plugins: ["transform-react-jsx"]
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [new HtmlWebpackPlugin({ template: "template.ejs" })]
};
