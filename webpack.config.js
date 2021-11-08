/* const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackShortHashPlugin = require('html-webpack-short-hash-plugin');

module.exports = {
	//...
	optimization: {
		usedExports: true,
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
	output: {
		chunkFilename: "[name].bundle.js",
		filename: "[name].bundle.js",
		assetModuleFilename: "[name].[ext]",
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				loader: 'react-svg-loader',
				options: {
					jsx: true // true outputs JSX tags
				}
			}
		],
	},
	
}; */