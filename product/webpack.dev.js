const baseConfig = require("./webpack.config");
const {merge} = require("webpack-merge");
const serve = require("../server/server.js");

module.exports = merge(baseConfig, {
  devtool: "eval-source-map",
  devServer: {
    hot: true, // 启用 webpack 的 热模块替换 特性
    compress: true,
    port: 9000,
    open: true,
    proxy: {
      "*": "http://localhost:18888"
    },
    onBeforeSetupMiddleware:function () {
      serve.run(18888, "n");
    },
    client: {
      progress: true,
    }
  }
});
