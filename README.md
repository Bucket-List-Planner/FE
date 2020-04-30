
## Initialize the project 

`npm init -y`

## Install Webpack & React

### Packages

`npm install webpack webpack-cli html-webpack-plugin --save-dev`

    Webpack is a module bundler for JavaScript that can produce 
cross browser–compatible code at no expense when it comes to developer experience.
It bundles our project files into a single file, and let execute tasks.

It requires a `webpack.config.js` file in the root folder, with a configuration featuring the following options:

* entry: The main file of our React application.

* output.path: The root directory to store output files in.
* output.filename: The filename pattern to use for generated files.

* devtool: Enables source-map generation in development mode.
* output.publicPath: The path to the root directory where the files will be deployed on the web server.

### Configuration

=======######=========

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
    favicon: './public/favicon.ico'
  })
  ]
};

=======######=========

## Install React

### Packages

`npm install --save react react-dom`
`npm install --save-dev @types/react @types/react-dom`

That `@types/ prefix` means that we also want to get the declaration files for React and React-DOM. Usually when you import a path like "react", it will look inside of the react package itself; however, not all packages include declaration files, so TypeScript also looks in the @types/react package as well. 

### Configuration

========#####==========

"scripts": {
    "start": "webpack --mode=development",
    "build": "webpack --mode=production"
  }

========#####==========

## Type Script 

### Packages

typescript is installed for access to its awesome type checking properties.

`npm install typescript --save-dev`

### Configuration

It requires a `tsconfig.json` configuration file inside the root of the project directory

=======######=========

{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
     "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],

    // false is default; setting strict to true is really important, false can be considered when you are moving from JS to TS
    "strict": true, 

    // Search under node_modules for non-relative imports.
	"moduleResolution": "node",

    // Don't emit; allow Babel to transform files.
	"noEmit": true,
  "allowJs": true,
  "resolveJsonModule": true,
  "isolatedModules": true,
  "removeComments": true,
  "outDir": "dist/",
  "noImplicitAny": true,
  "jsx": "react", // support for react
  },
  "include": [
    "src"
  ]
}

=======######=========


## Babel

### Packages

`npm install @babel/core babel-loader @babel/preset-react @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread --save-dev`

@babel/core :- It allows us to run babel from tools like webpack.
babel-loader :- Its a webpack plugin. It allows us to teach webpack how to run babel when webpack sees certain files.
@babel/preset-react :- Which Transforms JSX to JavaScript.
@babel/preset-env :- Which helps babel to convert ES6, ES7 and ES8 code to ES5.
@babel/preset-typescript :- 
@babel/plugin-proposal-class-properties :- https://www.tutorialspoint.com/babeljs/babeljs_transpile_es8_features_to_es5.htm
@babel/plugin-proposal-object-rest-spread :- https://www.tutorialspoint.com/babeljs/babeljs_transpile_es8_features_to_es5.htm


It requires a `.babelrc` configuration file inside the root of the project directory

### Configuration

=======######=========

{
  "presets": [
    "@babel/react",
    "@babel/typescript",
    [
      "@babel/env",
      {
        "modules": false,
        <!-- transpile to a minimum version of IE 11 and Chrome 58 -->
        "targets": {
          "chrome": "58",
          "ie": "11"
        }
      }
    ]
  ],
  "plugins": [
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
}

