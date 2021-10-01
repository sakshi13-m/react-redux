const path = require('path');
 
module.exports = {
 entry: "./src/index.js",
 module: {
   rules: [
     {
       test: /\.m?js$/,
       exclude: /node_modules/,
       use: {
         loader: "babel-loader"
       }
     }
   ]
 },
 externals: {
   reactRedux: 'react-redux',
   react: 'react'
 },
 output: {
   filename: "index.js",
   path: path.resolve(__dirname, "dist"),
   libraryTarget: "umd",
   library: "react-library"
 }
};
