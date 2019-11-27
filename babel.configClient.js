module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 'core-js@3',
        targets: undefined
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  extends: './babel.configMAIN.js'
}
