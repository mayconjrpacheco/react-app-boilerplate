const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './src/index.js'
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      { test: /\.(png|svg|woff|woff2|ttf|eot)/, loader: 'file-loader' },
      { test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader', 
            options: {
              data: '@import "variables";',
              includePaths: [path.resolve(__dirname, './src/core/style/')]
            }
          } 
        ]
      },
      { 
        test: /\.js(x)?$/, 
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader']
      }
    ],
  },

  resolve: {
    alias: {
      component: path.resolve(__dirname, './src/core/components'),
      scss: path.resolve(__dirname, './src/core/style'),
      image: path.resolve(__dirname, './src/core/style/assets/img'),
      state: path.resolve(__dirname, './src/core/state')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin({
      filename: './src/css/[name].css',
      disable: false, 
      allChunks: true
    })
  ]
}