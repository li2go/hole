var path = require('path');
var webpack = require('webpack');
var localIPAddress=require('./localIPAddress');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://'+localIPAddress+':10086',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {test: /\.(ttf|eot|svg|woff)$/, loader: "file-loader?name=fonts/[name].[ext]"},
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css$/,
                loaders: ['style', 'css'],

            }, {test: /\.(jpg|png|gif)$/, loader: "url-loader?limit=1024&name=img/[name].[ext]"}


        ]
    }

};
