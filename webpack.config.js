const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  //Webpack will automatically recompile if it noticed a file change
  watch: true,

  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  },

  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
  },

  devtool: "source-map",

  module: {
    rules: [
        
        // use babel-loader to load jsx and tsx files
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: "babel-loader" 
        },

        // css-loader to bundle all the css files into one file and style-loader to add all the styles inside the style tag of the document
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }

    ]
  },

  plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html',
  })
  ]
};

