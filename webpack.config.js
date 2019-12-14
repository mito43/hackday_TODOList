const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OUTPUT_PATH = path.join(__dirname, 'dist');

// const prodConfig = {
//   entry: path.join(__dirname, 'src', 'index'),
//   output: {
//     path: path.join(__dirname, 'dist'),
//     publicPath: '/dist/',
//     filename: "bundle.js",
//     chunkFilename: '[name].js'
//   },
//   module: {
//     rules: [
//       {
//         test: /.js?$/,
//         include: [
//           path.resolve(__dirname, 'src')
//         ],
//         exclude: /node_modules\/(?!(@webcomponents\/shadycss|lit-element|lit-html)\/).*/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: [
//                 [
//                   '@babel/preset-env',
//                   {
//                     useBuiltIns: 'usage',
//                     corejs: 3
//                   }
//                 ]
//               ],
//               plugins: [
//                 '@babel/plugin-proposal-object-rest-spread',
//                 '@babel/plugin-transform-destructuring'
//               ]
//             },
//           }
//         ],
//       },
//       {
//         test: /\.(js|ts)$/,
//         exclude: /\.(css|scss)$/,
//         loader: 'inline-lit-element-loader'
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.json', '.js', '.jsx']
//   },
// };

const devConfig = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: OUTPUT_PATH,
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /\.(css|scss)$/,
        loader: 'inline-lit-element-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/index.html'
    }])
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    open: true,
    port: 8080,
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};

module.exports = (env, options) => {
  const { mode } = options;
  console.log(mode);
  switch(mode) {
    case 'development':
      return devConfig;
    default:
      return prodConfig;
  }
};
