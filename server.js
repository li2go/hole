var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var localIPAddress=require('./localIPAddress');
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {colors: true},

}).listen(10086, localIPAddress, function (err, result) {
        if (err) {
            console.log(err);
        }

        console.log('Listening at '+localIPAddress+':10086');
    });
