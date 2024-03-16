const webpack = require("webpack");
const childProcess = require("child_process");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const apiMocker = require("connect-api-mocker");


module.exports = {
  mode: "development",
  devServer: {
    proxy: [{
      context: ['/api'],
      target: 'http://localhost:8081',
    }],
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      devServer.app.use(apiMocker('/api', 'mocks/api'));
      return middlewares;
    },
  },
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
    assetModuleFilename: "[name][ext]?[hash]",
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader // 프로덕션 환경
            : "style-loader", // 개발 환경
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png)$/,
        type: "asset",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
                Build Date: ${new Date().toLocaleString()}
                Commit Version: ${childProcess.execSync("git rev-parse --short HEAD")}
            `,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
      hash: process.env.NODE_ENV === "production",
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
      : []),
  ],
};
