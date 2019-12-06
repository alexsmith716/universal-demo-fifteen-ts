module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
    'universal-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-transform-runtime',{corejs: {version: 3, proposals: true}}]
  ]
};

// '@babel/plugin-transform-runtime',{corejs: {version: 3, proposals: true}}
//    * without: 626/999 KB
//    * with:    561/909 KB
