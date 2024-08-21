// module.exports={
//     module:{
//         rules:{
//             test:/\.js$/,
//             exclude:/node_modules/,
//             use:{
//                 loader:"babel-loader"
//             }
//         }
//     }
// }

const path = require('path');

module.exports = {
  //   mode: 'development', // or 'production', depending on your needs
  //   entry: './leadmanager/frontend/src/index.js', // adjust according to your entry point
  //   output: {
  //     filename: 'bundle.js',
  //     path: path.resolve(__dirname, 'dist')
  //   },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader', // Injects CSS into the DOM
          'css-loader' // Resolves CSS imports and URLs
        ],
      }, {
        test: /\.svg$/,
        use: ['svg-url-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.js'] // add other extensions if needed
  },
  devtool: 'source-map', // add source maps for easier debugging
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // set the content base for the dev server
    compress: true, // enable gzip compression
    port: 9000 // change to your preferred port
  }
};
