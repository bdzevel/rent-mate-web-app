const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app/js/app.jsx'),
    vendor: [ 'react', 'react-dom', 'redux', 'react-redux', 'react-router', 'babel-polyfill' ],
    styles: path.resolve(__dirname, 'app/css/main.scss'),
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compact',
            },
          },
        ]),
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].min.css',
      allChunks: true,
    }),
  ],
};
