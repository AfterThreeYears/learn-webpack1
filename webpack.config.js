// const path = require('path');
// const webpack = require('webpack');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: '[name].js',
//     sourceMapFilename: '[name].js.map'
//   },
//   mode: 'development',
//   // devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.js$/i,
//         use: 'babel-loader',
//         // use: path.resolve('./build/babel-loader'),
//       },
//       {
//         test: /\.css$/i,
//         use: [
//           // { loader: path.resolve('./build/style-loader') },
//           { loader: 'style-loader' },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /.png$/,
//         use: [
//           {
//             // loader: path.resolve('./build/url-loader'),
//             loader: 'url-loader',
//             options: {
//               limit: 1,
//             }
//           },
//         ],
//       }
//     ],
//   },
//   devServer: {
//     hot: true,
//     contentBase: './dist',
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       PRODUCTION: '"PRODUCTION"',
//       'process.env.NODE_ENV': '"dev"',
//       TWO: 2,
//       BROWSER_SUPPORTS_HTML5: false
//     })
//   ]
// }


const path = require('path')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, '/')
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /.js$/,
          use: [
            {
              loader: path.resolve('./build/babel-loader'),
              // loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.css$/i,
          use: [
            { loader: path.resolve('./build/style-loader') },
            // { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /.png$/,
          use: [
            {
              loader: path.resolve('./build/url-loader'),
              // loader: 'url-loader',
              options: {
                limit: 1,
              }
            },
          ],
        }
      ],
    },
    devServer: {
      contentBase: './dist',
      hot: true
    }
}