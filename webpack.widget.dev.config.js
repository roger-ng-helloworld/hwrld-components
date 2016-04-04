var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('hwrld-core-widget.js');
var dedupePlugin = new webpack.optimize.DedupePlugin();
var providePlugin = new webpack.ProvidePlugin({
	'Promise': 'es6-promise',
    'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  });

module.exports = {
	context: path.resolve('components'),
	entry: {
		'hwrld-activities-widget': './activities/hwrld-activities-widget',
		   'hwrld-chart-widget': './chart/hwrld-chart-widget',
  	       'hwrld-hotel-map-widget': './hotel-map/hwrld-hotel-map-widget',
  	       'hwrld-flight-rate-widget': './flight-rate/hwrld-flight-rate-widget',
  	       'hwrld-hotel-rate-widget': './hotel-rate/hwrld-hotel-rate-widget'
	},
	output: {
		path: path.resolve('./public/'),
		filename: '[name].js'
	},

	plugins: [dedupePlugin, commonsPlugin],

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
