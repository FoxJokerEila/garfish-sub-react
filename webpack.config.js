// webpack.config.js
const webpack = require("webpack");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  output: {
    // 开发环境设置 true 将会导致热更新失效
    clean: isDevelopment ? false : true,
    filename: "[name].[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    // 需要配置成 umd 规范
    libraryTarget: "umd",
    // 修改不规范的代码格式，避免逃逸沙箱
    globalObject: "window",
    // webpack5 使用 chunkLoadingGlobal 代替，或不填保证 package.json name 唯一即可
    // 保证子应用的资源路径变为绝对路径
    publicPath: "http://localhost:8080",
  },
  plugin: [
    // 保证错误堆栈信息及 sourcemap 行列信息正确
    new webpack.BannerPlugin({
      banner: "Micro front-end",
    }),
  ],
  devServer: {
    // 保证在开发模式下应用端口不一样
    port: "8000",
    headers: {
      // 保证子应用的资源支持跨域，在上线后需要保证子应用的资源在主应用的环境中加载不会存在跨域问题（**也需要限制范围注意安全问题**）
      "Access-Control-Allow-Origin": "*",
    },
  },
};
