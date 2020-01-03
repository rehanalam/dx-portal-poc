const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
    docs: Path.resolve(__dirname, '../src/scripts/docs.js'),
    'docs-v-01': Path.resolve(__dirname, '../src/scripts/docs-v-01.js'),
    'docs-v02': Path.resolve(__dirname, '../src/scripts/docs-v-02.js'),
    'docs-v03': Path.resolve(__dirname, '../src/scripts/docs-v-03.js')
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' }
    ]),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html')
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/docs.html'),
      inject: true,
      chunks: ['docs'],
      filename: 'docs.html'
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/docs-v-01.html'),
      
      filename: 'docs-v-01.html'
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/docs-v-02.html'),
     
      filename: 'docs-v-02.html'
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/docs-v-03.html'),
     
      filename: 'docs-v-03.html'
    })
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};
