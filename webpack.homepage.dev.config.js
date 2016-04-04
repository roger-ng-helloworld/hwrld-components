var path = require('path');
var webpack = require('webpack');

var dedupePlugin = new webpack.optimize.DedupePlugin();
var providePlugin = new webpack.ProvidePlugin({
	'Promise': 'es6-promise',
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  });

module.exports = {
	context: path.resolve('components'),
	entry: './homepage-v2/hwrld-homepage-v2.js',
	output: {
		path: path.resolve('./public'),
		filename: 'react-homepage-v2.js'
	},

	plugins: [dedupePlugin],

	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{
				test: /\.(es6|js)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss/,
				exclude: /node_modules/,
				loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext', 'sass']
			}
		]
	},

	resolve: {
		extensions: ['', '.js', '.es6']
	}
}
