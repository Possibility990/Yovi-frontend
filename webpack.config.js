// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//     mode: 'production',

//     entry: './src/app.js',

//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js',
//         clean: true,
//         publicPath: '/'
//     },

//     devServer: {
//         static: {
//             directory: path.resolve(__dirname, 'dist')
//         },
//         port: 3000,
//         open: true,
//         hot: true,
//         compress: true,
//         historyApiFallback: true
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.css$/,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader']
//             },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             },
//             {
//                 test: /\.(png|jpg|jpeg|gif|svg)$/i,
//                 type: 'asset/resource'
//             }
//         ]
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: './src/index.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'account-type.html',
//             template: './src/account-type.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'signup.html',
//             template: './src/signup.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'verify.html',
//             template: './src/verify.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'service_provider_profile_setup.html',
//             template: './src/service_provider_profile_setup.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'profile_setup.html',
//             template: 'profile_setup.html'
//         }),

//         new MiniCssExtractPlugin({
//             filename: "styles.css"
//         })
//     ]
// };



const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: 'images/[name].[contenthash][ext]',
    clean: true,
    publicPath: '/',
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      // CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },

      // JS (Babel)
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      // Images (modern asset system)
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb inline limit
          },
        },
      },

      // HTML (IMPORTANT for image paths inside HTML)
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'account-type.html',
      template: './src/account-type.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'signup.html',
      template: './src/signup.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'verify.html',
      template: './src/verify.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'service_provider_profile_setup.html',
      template: './src/service_provider_profile_setup.html',
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'profile_setup.html',
    //   template: './src/profile_setup.html',
    // }),
  ],
};