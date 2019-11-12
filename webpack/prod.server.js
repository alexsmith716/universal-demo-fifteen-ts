const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');

const WebpackBar = require('webpackbar');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const { DuplicatesPlugin } = require('inspectpack/plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const rootPath = path.resolve(__dirname, '..');

const generatedIdent = (name, localName, lr) => {
  const r = Buffer.from(lr).toString('base64');
  return name + '__' + localName + '--' + r.substring( r.length-12, r.length-3 );
};

// const babelrc = fs.readFileSync('./.babelrc', 'utf8');
// let prodconfig = {};
// 
// try {
//   prodconfig = JSON.parse(babelrc);
//   console.error('>>>>>>>>> webpack prod.server > SUCCESS: parsing .babelrc !!typeof: ', typeof prodconfig)
//   console.error('>>>>>>>>> webpack prod.server > SUCCESS: parsing .babelrc !!: ', prodconfig)
// } catch (err) {
//   console.error('>>>>>>>>> webpack prod.server > ERROR: parsing .babelrc: ', err)
// }

module.exports = {

  context: path.resolve(__dirname, '..'),

  name: 'server',
  target: 'node',
  externals,
  mode: 'production',
  // devtool: (none) > fastest > quality: bundled code

  entry: {
    server: './src/server.js',
    // serverTest: './src/serverTest.js'
  },

  output: {
    path: path.resolve('./build/server'),
    // filename: 'server.js',
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // {
      //   test: /\.tsx?$/,
      //   loader: [
      //     'babel-loader',
      //     {
      //       loader: 'awesome-typescript-loader',
      //       options: {
      //         // useCache: true
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.tsx?$/,
      //   loader: 'awesome-typescript-loader',
      // },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                  if (path.basename(loaderContext.resourcePath).indexOf('global.scss') !== -1) {
                    return localName;
                  } else {
                    return generatedIdent(path.basename(loaderContext.resourcePath).replace(/\.[^/.]+$/, ""), localName, loaderContext.resourcePath);
                  }
                },
                mode: 'local',
              },
              onlyLocals: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                sourceMap: true,
                outputStyle: 'compressed',
              },
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(rootPath, 'src/theme/scss/app/functions.scss'),
                path.resolve(rootPath, 'src/theme/scss/app/variables.scss'),
                path.resolve(rootPath, 'src/theme/scss/app/mixins.scss')
              ],
            },
          },
        ]
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          {
            loader : 'css-loader',
            options: {
              modules: {
                getLocalIdent: (loaderContext, localIdentName, localName, options) => {
                  if (path.basename(loaderContext.resourcePath).indexOf('global.scss') !== -1) {
                    return localName;
                  } else {
                    return generatedIdent(path.basename(loaderContext.resourcePath).replace(/\.[^/.]+$/, ""), localName, loaderContext.resourcePath);
                  }
                },
                mode: 'local',
              },
              onlyLocals: true,
              importLoaders: 2,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
        },
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/octet-stream'
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'image/svg+xml'
        }
      },
    ]
  },

  performance: {
    hints: false
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.css', '.scss'],
  },

  plugins: [

    new WebpackBar({ name: 'Server' }),
    // new webpack.ProgressPlugin(handler),
    // https://webpack.js.org/plugins/module-concatenation-plugin/

    new ForkTsCheckerWebpackPlugin(),

    new webpack.optimize.ModuleConcatenationPlugin(),

    // https://webpack.js.org/plugins/internal-plugins/#occurrenceorderplugin
    new webpack.optimize.OccurrenceOrderPlugin(),

    // https://webpack.js.org/plugins/limit-chunk-count-plugin/
    // After compiling some chunks are too small - creating larger HTTP overhead
    // post-process chunks by merging them
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),

    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') },
      __CLIENT__: false,
      __SERVER__: true,
      __DEVELOPMENT__: false,
      __DEVTOOLS__: false,
      __DLLS__: false
    }),

    new webpack.HashedModuleIdsPlugin(),

    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   reportFilename: '../../analyzers/bundleAnalyzer/prod.serverXXX2.html',
    //   openAnalyzer: false,
    //   generateStatsFile: false
    // }),

    // new DuplicatesPlugin({
    //   emitErrors: false,
    //   emitHandler: undefined,
    //   verbose: true
    // }),

  ],
};
