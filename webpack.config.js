const path = require("path");
const buildPath = path.resolve(__dirname, "dist");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const srcPath = path.resolve(__dirname, "src");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const TsCheckerPlugin = require("fork-ts-checker-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: path.resolve(srcPath, "index.tsx"),
  target: !isProd ? "web" : "browserlist",
  devtool: isProd ? 'hidden-source-map': 'eval-source-map',
  output: {
    path: buildPath,
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
    }),
    !isProd && new ReactRefreshWebpackPlugin(),
    new TsCheckerPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.[tj]sx?/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|jpeg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      components: path.join(srcPath, "components"),
    },
  },
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
  },
};