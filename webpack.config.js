var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js',
    
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'], // Executes right to left. css-loader allows webpack to interpret css files and style-loader implements into html document
        test: /\.css$/
      }
    ]
  }
};
