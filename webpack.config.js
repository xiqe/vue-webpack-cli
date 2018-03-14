var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const timeStamp = '20180308';

module.exports = {
    devtool: 'inline-source-map',

    entry:{
        index: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "/",
        // filename: 'js/' + timeStamp + '.[name].js'
        filename: 'js/[name].js'
    },

    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback: true
    },

    plugins: [
         new webpack.optimize.UglifyJsPlugin({ //压缩代码
         	compress: {
         		warnings: false
         	},
         	except: ['$super', '$', 'exports', 'require'] //排除关键字
         }),

        new ExtractTextPlugin('css/[name].css')
        // new ExtractTextPlugin('css/' + timeStamp + '.[name].css')
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },{
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },{
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url?limit=4096&name=img/[name]_[hash:4].[ext]'
            }, {
                test: /\.(woff|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'images/fonts/[name].[hash:4].[ext]'
                }
            },{
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },

    babel: {
        presets: ['env'],
        plugins: ['transform-runtime']
    },

    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            vue: path.join(__dirname,'/node_modules/vue/dist/vue'),
            components: path.join(__dirname, './src/components')
        }
    },

    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    }
}