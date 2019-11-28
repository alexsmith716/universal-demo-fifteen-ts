module.exports = {
  plugins: [
    ['@babel/plugin-transform-runtime',{corejs: {version: 3,proposals: true}}],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-syntax-dynamic-import',
    'react-hot-loader/babel',
    'universal-import',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from'
  ]
};
