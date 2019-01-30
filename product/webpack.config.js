const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 删除文件
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: __dirname + "/src/lottery/index.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/dist", //打包后的文件存放的地方
        filename: "lottery.js" //打包后输出文件的文件名
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/lottery/index.html',
            filename: './index.html',
            minify: {
                // 移除空属性
                removeEmptyAttributes: true,
                // 压缩css
                minifyCSS: true,
                // 压缩JS
                minifyJS: true,
                // 移除空格
                collapseWhitespace: true
            },
            hash: true,
            inject: true
        }),
        new CopyWebpackPlugin([{
            from: './src/css',
            to: './css'
        }, {
            from: './src/data',
            to: './data'
        }, {
            from: './src/img',
            to: './img'
        }, {
            from: './src/lib',
            to: './lib'
        }])
    ]
};