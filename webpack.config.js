const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "/dist"),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [new ESLintPlugin({ files: "src/**/*.ts" })],
  resolve: {
    extensions: [".jsx", ".js"],
  },
};
