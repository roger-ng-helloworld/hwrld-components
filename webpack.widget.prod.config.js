var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.widget.dev.config');
var stripLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.log')
}

//var uglifyLoader = {
//    test: /\.js$/,
//    exclude: /node_modules/,
//    loader: 'uglify-loader'
//}

devConfig.module.loaders.push(stripLoader);
//devConfig.module.loaders.push(uglifyLoader);

module.exports = devConfig;

