const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'source-map';

webpackConfig.devServer = {
	historyApiFallback: true,
	hot: true,
	inline: true,
};

webpackConfig.plugins = webpackConfig.plugins.concat([
	new webpack.HotModuleReplacementPlugin()
]);

module.exports = webpackConfig;