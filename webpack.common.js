const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [ 
        // use babel-loader to load jsx and tsx files
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: "babel-loader" 
        }
    ]
  },

  // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ]
};
