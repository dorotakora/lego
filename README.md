# LEGO

## Getting Started

This project utilize Bootstrap 4 with Sass and jQuery. 

### Install with NPM

Create a directory for project. Initialize npm to create a package.json file, then install webpack locally.

$ npm init -y

$ npm install webpack --save-dev

Create the following directory structure for project, separating the “source” code /src from our bundled “distribution” code /dist.

 bootstrap-webpack
  |- package.json
+ |- /dist
+   |- index.html
+ |- /src
+   |- app.js

### Installing Bootsrap

$ npm install bootstrap jquery popper.js --save

And install the required loaders and postcss plugins for compiling and bundling Bootstrap precompiled Sass files.

$ npm install autoprefixer css-loader node-sass postcss-loader sass-loader style-loader --save-dev

### Webpack configuration file

  bootstrap-webpack
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- app.js
    
    
### Importing Bootstrap JavaScript

Import Bootstrap’s JavaScript by adding this line to your app’s entry point /src/app.js:

import 'bootstrap';

### Importing Bootstrap Sass

  bootstrap-webpack
  |- package.json
  |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- app.js
+   |- /scss
+     |- app.scss

Import all of Bootstrap’s Sass by adding this line to app.scss:

@import "~bootstrap/scss/bootstrap";

Include Bootstrap’s Sass in your bundle by adding this line to app’s entry point /src/app.js:

### Install FontAwesome

Add this to Webpack
	{
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // For Font Awesome
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        //publicPath: '../'       // override the default path
                    }
                }]
            }
$ npm i --save @fortawesome/fontawesome-free

Import FontAwesome by adding this line to app’s entry point /src/app.js:

	import '@fortawesome/fontawesome-free/css/all.css';
	import '@fortawesome/fontawesome-free/js/all.js';

Use the "npm run build" command to build bundle with Webpack.






