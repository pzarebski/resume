const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      // ... your other loaders (css, sass, vue, js, file-loader, etc.)
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': ['vue-style-loader', 'css-loader', 'sass-loader'],
            'sass': ['vue-style-loader', 'css-loader', 'sass-loader?indentedSyntax']
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      { 
        test: /\.(woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm-bundler.js'
    },
    // List valid extensions; remove wildcard '*' if present.
    extensions: ['.js', '.vue', '.json'],
    fallback: {
      // Provide polyfills for Node.js core modules.
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/')
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    historyApiFallback: true,
    devMiddleware: {
      stats: 'minimal'
    },
    client: {
      overlay: true
    }
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // optional: you can provide a custom template or omit it for a default index.
      inject: true
    }),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    })
  ]);
}
