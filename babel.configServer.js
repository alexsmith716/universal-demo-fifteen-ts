module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: undefined,
        corejs: false,
        targets: { node: 'current' }
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  extends: './babel.configMAIN.js'
}
