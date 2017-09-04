/**
 * Created by zhang-j on 2017/8/18.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './demo.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js'
    },
    module: {
       rules: [
           {
               test: /\.jsx/,
               use: [
                   'babel-loader'
               ],
               exclude: /node_modules/
           },
           {
               test: /\.scss/,
               use: [
                   'style-loader',
                   'css-loader',
                   // 依赖node-sass
                   'sass-loader'
               ]
           }
       ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template/index.html'
        })
    ]
};