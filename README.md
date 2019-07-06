# LEGO

## General info

This project is based on Bootstrap 4, Sass and jQuery. 

## Getting Started

1) Create a directory for project. Initialize npm to create a package.json file, then install webpack locally.

```sh
$ npm init 

$ npm install webpack --save-dev
```
2) Create the following directory structure for project, separating the “source” code /src from our bundled “distribution” code /dist.
```sh
 bootstrap-webpack
  |- package.json
+ |- /dist
+   |- index.html
+ |- /src
+   |- app.js
```
3) Install Bootstrap
```sh
$ npm install bootstrap jquery popper.js --save
```
4) Install required loaders and postcss plugins for compiling and bundling Bootstrap precompiled Sass files.
```sh
$ npm install autoprefixer css-loader node-sass postcss-loader sass-loader style-loader --save-dev
```
5) Set up webpack configuration file
```sh
  bootstrap-webpack
  |- package.json
+ |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- app.js
  ```  
    
6) Import Bootstrap’s JavaScript by adding this line to your app’s entry point /src/app.js:

  ``` import 'bootstrap'; ```

7) Import Bootstrap styles
```sh
  bootstrap-webpack
  |- package.json
  |- webpack.config.js
  |- /dist
    |- index.html
  |- /src
    |- app.js
+   |- /scss
+     |- app.scss
```
Import all of Bootstrap’s Sass by adding this line to app.scss:
```sh
@import "~bootstrap/scss/bootstrap";
```
Include Bootstrap’s Sass in your bundle by adding this line to app’s entry point /src/app.js:

8) Install FontAwesome

Add these lines to Webpack
```sh
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
```
```sh
$ npm i --save @fortawesome/fontawesome-free
```
Import FontAwesome by adding this line to app’s entry point /src/app.js:
```js
	import '@fortawesome/fontawesome-free/css/all.css';
	import '@fortawesome/fontawesome-free/js/all.js';
```
9) Build the application using ``` npm run build ``` command.






