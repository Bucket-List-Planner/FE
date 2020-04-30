const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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

  // Source maps provide mapping between the original and the transformed source code, so that developers can debugg original code in the browser.
  // During development, it writes the mapping information in the bundle. (.map)
  devtool: "source-map",

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

  devServer: {
    // get content of transpiled code to run on default port 8080
    contentBase: __dirname + "/dist",
  },

  // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ]
};

