const webpack = require('webpack'),
    path = require('path');

var webpackConfig = {
    entry: path.resolve(__dirname, 'src'),
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: 'webpack-angular-example-[name].js',
        library: ['webpack-angular-example', '[name]'],
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = webpackConfig; 