module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    'react-hot-loader/babel',
    'universal-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-transform-runtime',{corejs: {version: 3, proposals: true}}]
  ]
};

// https://github.com/kangax/compat-table/blob/gh-pages/environments.json

// "node12_11": {
//   "full": "Node.js",
//   "family": "Node.js",
//   "short": "Node &gt;=12.11 &lt;13",
//   "platformtype": "engine",
//   "note_id": "harmony-flag",
//   "equals": "chrome77",
//   "release": "2019-09-25",
//   "retire": "2022-04-30",
//   "obsolete": false
// },

// https://webpack.js.org/loaders/babel-loader/#note-transform-runtime--custom-polyfills-eg-promise-library
// the 'transform-runtime' plugin tells Babel to
// require the runtime instead of inlining it.

// ['@babel/plugin-transform-runtime',{corejs: {version: 3, proposals: true}}]

// By default, "@babel/plugin-transform-runtime" doesn't polyfill proposals. 
// If you are using "corejs: 3", you can opt into this by enabling using the "proposals: true" option.

// This option requires changing the dependency used to provide the necessary runtime helpers:

//  corejs option:  |  Install command:
// ================ |  ===========================================
//   false          |   npm install --save @babel/runtime
//     2            |   npm install --save @babel/runtime-corejs2
//     3            |   npm install --save @babel/runtime-corejs3

// useBuiltIns: 'usage':
//    * Adds specific imports for polyfills when they are used in each file
//    * >>>> babel takes advantage of the fact that a bundler loads the same polyfill only once <<<<

// '@babel/plugin-transform-runtime',{corejs: {version: 3, proposals: true}}:
//    * plugin defaults to assuming that all polyfillable APIs will be provided by the user
//        Otherwise the "corejs" option needs to be specified.
//    * By default, "@babel/plugin-transform-runtime" doesn't polyfill proposals. 
//        If you are using "corejs: 3", you can opt into this by enabling using the "proposals: true" option.
//    * This option requires changing the dependency used to provide the necessary runtime helpers:

//    * without: 626/999 KB
//    * with:    561/909 KB
