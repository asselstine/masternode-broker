const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
require("babel-core/register")
require("babel-polyfill")

module.exports = {
  entry: ['babel-polyfill', './app/javascripts/app.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/index.html' },
      { from: './app/images', to: 'images/' },
      { from: './app/favicon.ico' }
    ])
  ],
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.scss', '.css', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true
  }
}


// query: {
//   plugins: ['transform-runtime']
// }
