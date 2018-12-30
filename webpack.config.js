const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css/,
        loaders: ExtractTextPlugin.extract('css-loader'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],
};
