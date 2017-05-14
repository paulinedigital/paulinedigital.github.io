const path = require('path');
const webpack = require('webpack');
const config = require('./package.json');

const cssnext = require('postcss-cssnext');
const cssimport = require('postcss-import');
const postcssReporter = require('postcss-reporter');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const ENV = process.env.NODE_ENV || 'development';
const isPROD = ENV === 'production';

module.exports = {

	entry: './index.js',

	context: path.resolve(__dirname, 'src'),

	output: {

		path: path.resolve(__dirname, 'dist'),

		publicPath: '/',

		filename: 'static/js/bundle.js',

		chunkFilename: 'static/js/lib/[name].[chunkhash].js'

	},

	externals: {
		'TweenMax': 'TweenMax',
		'ScrollToPlugin': 'ScrollToPlugin',
		'ScrollMagic': 'ScrollMagic'
	},

	resolve: {

		modules: [
			'node_modules',
			path.resolve(__dirname, 'src/static'),
			path.resolve(__dirname, 'src/components'),
			path.resolve(__dirname, 'src/containers')
		],

		extensions: ['.js', '.jsx', '.css']

	},

	module: {

		rules: [

			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},

			{
				test: /\.css$/,
				exclude: [/node_modules/, /src\/static\/styles\//],
				loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&sourceMap&importLoaders=1!postcss-loader'
			},

			{
				test: /\.global.css$/,
				include: /src\/static\/styles\//,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					loader: 'css-loader?root=./src&importLoaders=1!postcss-loader'
				})
			},

			{
				test: /\.critical.css$/,
				include: /src\/static\/styles\//,
				loader: StyleExtHtmlWebpackPlugin.inline('postcss-loader')
			},

			{
				test: /\.css$/,
				include: /node_modules/,
				loader: 'style-loader!css-loader'
			},

			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				include: /src\/static\/fonts\//,
				loader: 'file-loader?name=static/fonts/[name].[ext]'
			},

			{
				test: /\.(jpg|png|gif)$/,
				include: /src\/static\/images\//,
				loader: 'file-loader?name=static/images/[name].[ext]'
			},

			{
				test: /\.html$/,
				loader: 'html-loader'
			},

			{
				test: /\.json$/,
				loader: 'json-loader'
			},

			{
				test: /\.(mp4|webm|svg)$/,
				loader: 'url-loader?limit=10000'
			}

		]

	},

	plugins: ([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),

		new webpack.ProvidePlugin({
			'Promise': 'es6-promise'
		}),

		new webpack.LoaderOptionsPlugin({
			options: {
				context: __dirname,
				postcss() {
					return [
						cssimport({
							addDependencyTo: webpack
						}),
						cssnext({
							browsers: ['last 2 versions', 'IE > 10']
						}),
						postcssReporter({
							clearMessages: true
						})
					];
				}
			}
		}),

		new HtmlWebpackPlugin({
			template: './index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			inject: true,
			cache: false
		}),

		new FaviconsWebpackPlugin({
			source: './static/images/favicon.png',
			prefix: 'static/meta/',
			defaults: {
				appName: config.title,
				appDescription: config.description,
				developerName: config.author,
				developerURL: config.homepage,
				background: '#bef8ec',
				orientation: 'portrait',
				start_url: 'index.html',
				icons: {
					android: true,
					appleIcon: false,
					appleStartup: false,
					coast: false,
					favicons: true,
					firefox: false,
					opengraph: false,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		}),

		new StyleExtHtmlWebpackPlugin({
			minify: true
		}),

		new ExtractTextPlugin('static/css/[name].css'),

		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: { discardComments: false },
			canPrint: true
		})

	]).concat(isPROD ? [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),

		new OfflinePlugin({
			relativePaths: false,
			publicPath: '/',

			excludes: ['CNAME'],

			caches: {
				main: [':rest:'],

				additional: [
					'static/js/lib/*.js'
				]
			},

			safeToUseOptionalCaches: true,

			AppCache: false
		})
	] : [
		new webpack.HotModuleReplacementPlugin()
	]),

	devtool: isPROD ? 'source-map' : 'cheap-source-map',

	target: 'web',

	devServer: {
		port: 8080,
		host: '0.0.0.0',
		publicPath: '/',
		hot: true,
		inline: true,
		contentBase: path.join(__dirname, 'src'),
		historyApiFallback: true,
		https: true
	}
};
