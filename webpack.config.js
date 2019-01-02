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
        test: [/\.css$/],
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
        // loaders: ExtractTextPlugin.extract(
        //   'style-loader',
        //   'css-loader',
        //   'css?modules&importLoaders=1&localIdentName=[hash:base64:5]&minimize',
        // ),
      },
    ],
  },
  // plugins: [
  //   new ExtractTextPlugin('styles.css'),
  // ],
};
