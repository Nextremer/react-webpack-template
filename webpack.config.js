const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: __dirname + '/src/js/app.js',
  output: {
    path: __dirname + '/www/js',
    publicPath: '/www/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    root: [ path.resolve(__dirname, './src/js') ],
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      include: path.resolve(__dirname, './src/js'),
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', [ 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss' ])
    },
    {
      test: /\.(png|jpe?g|gif)$/,
      loader: 'url-loader?limit=100000'
    }
    ]
  },
  postcss: [ autoprefixer({ browsers: [ 'last 2 versions'  ] }) ],
  plugins: [
    new ExtractTextPlugin('../assets/css/style.css', { allChunks: true })
  ]
}
