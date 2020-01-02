# universal-demo-fifteen-ts

1/2 ran 'DuplicatesPlugin' none identified

check for duplicate 'react' in dependency tree: `npm ls react`

https://reactjs.org/warnings/invalid-hook-call-warning.htmls
https://github.com/facebook/react/issues/14257
https://github.com/facebook/react/issues/2402
https://github.com/facebook/react/issues/13991
https://webpack.js.org/configuration/resolve/#resolvealias

https://webpack.js.org/configuration/target/
https://webpack.js.org/concepts/targets/

## Overview:

=============================================================
=============================================================

### Removed without errors:

* ['@babel/plugin-transform-runtime',{corejs: {version: 3,proposals: true}}],
* '@babel/plugin-proposal-object-rest-spread',
* '@babel/plugin-transform-async-to-generator',

=============================================================
=============================================================

### TypeScript compiler > target > ES5/6

Will initially target ES6
 
https://github.com/microsoft/TypeScript-Handbook
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

#### compilerOptions:

* lib:    List of library files to be included in the compilation
* target: Specify ECMAScript target version

#### Babel uses https://github.com/kangax/compat-table to check which JavaScript features to convert and polyfill for specified browserslistrc/babelrc > (presets:[[{targets}]]) target environments

List of library files to be included in the compilation.
Possible values are:
► ES5
► ES6
► ES2015
► ES7
► ES2016
► ES2017
► ES2018
► ESNext
► DOM
► DOM.Iterable
► WebWorker
► ScriptHost
► ES2015.Core
► ES2015.Collection
► ES2015.Generator
► ES2015.Iterable
► ES2015.Promise
► ES2015.Proxy
► ES2015.Reflect
► ES2015.Symbol
► ES2015.Symbol.WellKnown
► ES2016.Array.Include
► ES2017.object
► ES2017.Intl
► ES2017.SharedMemory
► ES2017.String
► ES2017.TypedArrays
► ES2018.Intl
► ES2018.Promise
► ES2018.RegExp
► ESNext.AsyncIterable
► ESNext.Array
► ESNext.Intl
► ESNext.Symbol

#### =================================

babel-runtime operations >>> babel-polyfill >>> emulate an ES2015 environment but in a different way

babel-polyfill: emulates ES2015 by assigning methods on the global (adds Promise to global scope)
babel-runtime: doesn't change the global namespace

typescript will not add any polyfill to your code

opposed to Babel, TypeScript does not have a runtime

set target to ES6+ and use Babel on the result

#### =================================

Typescript && Babel Bundling Methods:

METHOD 1:
Babel   >>>>>>>> webpack > babel-loader > typescript loader (ATL)
(combine 2 compilers > merge JS outputted from TS compile > pipe that JS output through Babel-loader > result is ES5 with Babel provided polyfills)

METHOD 2:
Babel 7 >>>>>>>> '@babel/preset-typescript' && '@babel/plugin-transform-typescript' > webpack 'test: /\.(js|ts)x?$/'

#### =================================

`typescript` and `prop-types` serve different purposes:
* 'Typescript' validates types at compile time
* 'PropTypes' are checked at runtime

#### =================================
#### =================================

typescript babel (ES6 > ES5)

Babel disables type-checking
Babel removes TypeScript code and turns it into JS

https://github.com/s-panferov/awesome-typescript-loader
https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
run typescript type checker on a separate process
static type checking running in a separate process

#### =================================

https://iamturns.com/typescript-babel/
https://medium.com/@francesco.agnoletto/how-to-set-up-typescript-with-babel-and-webpack-6fba1b6e72d5

https://2ality.com/2019/10/babel-loader-typescript.html
ts-loader has one downside: 
* you can't pipe the output of another loader into it; it always reads the original file 
as a work-around, use babel-loader to compile TypeScript

https://github.com/TypeStrong/ts-loader/tree/master/examples/fork-ts-checker-webpack-plugin

'@babel/preset-typescript': (TypeScript loader / compiling)

https://medium.com/webpack/typescript-webpack-super-pursuit-mode-83cc568dea79

'ts-loader': (TypeScript loader)
  1) transpiles TypeScript into JavaScript and hands it off to webpack
  2) collects any TypeScript compilation errors and reports them to webpack 

'fork-ts-checker-webpack-plugin': (TypeScript checker)
  1) transpiles TypeScript into JavaScript and hands it off to webpack
    >>> forget about #2 above <<<<
  2) It removes the responsibility for type checking from 'ts-loader', so 'ts-loader' can focus on transpilation
    >>> it relieves 'ts-loader' from type-checking and runs it in a separate process

#### =================================

typescript: for using Typescript
@babel/preset-typescript: for building Typescript by using babel / compile Typescript in babel
ts-loader: for compiling Typescript in Webpack
fork-ts-checker-webpack-plugin: for making ts-loader faster
tslint, tslint-react: for checking code conventions


https://github.com/TypeStrong/ts-loader
https://github.com/Realytics/fork-ts-checker-webpack-plugin
https://github.com/palantir/tslint-react

#### =================================

TypeScript:               (target: es5/es6)
@babel/preset-typescript: (@babel/preset-env)

@babel/preset-env / .browserlistrc:
* compile with the latest browsers during development (for speed)
* compile with a larger range of browsers in production (for compatibility)

TypeScript requires it's own compiler — it's what provides type checking

babel doesn't check TypeScript types

`tsc --noEmit`: typechecks project, without compiling

TypeScript compiles entire project at once
Babel only compiles one file at a time

For custom transformations that only Babel provides, 
  the build pipeline is to pass the TypeScript files to the TypeScript compiler and then to Babel afterwards

babel: transpile typescript && loadable components

By default `@babel/preset-env` will use `.browserslistrc` config sources 
  unless either the `targets` or `ignoreBrowserslistConfig` options are set.

Browserslist defaults: > 0.5%, last 2 versions, Firefox ESR, not dead

#### =================================
#### =================================

Basic Hooks:

    useState
    useEffect
    useContext


Additional Hooks:

    useReducer
    useCallback
    useMemo
    useRef
    useImperativeHandle
    useLayoutEffect
    useDebugValue

#### =================================
#### =================================

https://babeljs.io/docs/en/next/babel-preset-env.html
https://babeljs.io/docs/en/next/babel-plugin-transform-typescript.html
https://babeljs.io/docs/en/next/babel-plugin-transform-typescript.html#caveats
https://babeljs.io/docs/en/configuration

https://babeljs.io/docs/en/config-files

Function-returning configs are given a few special powers because they can access an API exposed by Babel itself. 
See Config Function API for more information.

JS config files may export a function that will be passed config function API:

The `api` object exposes everything Babel itself exposes from its index module, along with config-file specific APIs:

`api.cache`:

JS configs are great because they can compute a config on the fly, but the downside there is that it makes caching harder. Babel wants to avoid re-executing the config function every time a file is compiled, because then it would also need to re-execute any plugin and preset functions referenced in that config.

To avoid this, Babel expects users of config functions to tell it how to manage caching within a config file.

    api.cache.forever() - Permacache the computed config and never call the function again.
    api.cache.never() - Do not cache this config, and re-execute the function every time.
    api.cache.using(() => process.env.NODE_ENV) - Cache based on the value of NODE_ENV. Any time the using callback returns a value other than the one that was expected, the overall config function will be called again and a new entry will be added to the cache.
    api.cache.invalidate(() => process.env.NODE_ENV) - Cache based on the value of NODE_ENV. Any time the using callback returns a value other than the one that was expected, the overall config function will be called again and all entries in the cache will be replaced with the result.
    api.cache(true) - Same as api.cache.forever()
    api.cache(false) - Same as api.cache.never()

Since the actual callback result is used to check if the cache entry is valid, it is recommended that:

    Callbacks should be small and side-effect free.
    Callbacks should return values with the smallest range possible. For example, the .using(() => process.env.NODE_ENV) usage above is not ideal because it would create an unknown number of cache entries depending on how many values of NODE_ENV are detected. It would be safer to do .using(() => process.env.NODE_ENV === "development") because then the cache entry can only ever be true or false.

`api.env(...)`:

Since `NODE_ENV` is a fairly common way to toggle behavior, Babel also includes an API function meant specifically for that. This API is used as a quick way to check the "envName" that Babel was loaded with, which takes `NODE_ENV` into account if no other overriding environment is set.

It has a few different forms:

    api.env("production") returns true if envName === "production".
    api.env(["development", "test"]) returns true if ["development", "test"].includes(envName).
    api.env() returns the current envName string.
    api.env(envName => envName.startsWith("test-")) returns true if the env starts with "test-".

    Note: This function internally makes use of api.cache mentioned above to ensure that Babel is aware that this build depends on a specific envName. You should not use it alongside with api.cache.forever() or api.cache.never().


```js

module.exports = function(api) {
  return {};
}

{
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  },
}

module.exports = api => {
  const isTest = api.env('test')
  api.cache(true)
  return {
    presets: [
      ['@babel/preset-env', {
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true
        },
        debug: false,
        modules: isTest ? 'commonjs' : false,
      }],
      '@babel/preset-react',
      '@babel/preset-typescript'
    ],
    plugins: [
      ['@babel/plugin-transform-runtime',{corejs: {version: 3,proposals: true}}],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-syntax-dynamic-import',
      'react-hot-loader/babel',
      'universal-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-export-default-from'
    ]
  }
}

```

#### =================================

removed 'core-js' and 'regenerator-runtime'
using '@babel/runtime-corejs3' (contains 'core-js' and 'regenerator-runtime')

build 140KB smaller than 'bootstrap-react-redux-ssr-fourteen'

#### =================================

@babel/preset-env:
  'Using polyfills with `usage` option:'
  'Based on your code and targets, added regenerator-runtime.'

Error without `usage`: 'ReferenceError: regeneratorRuntime is not defined'

Files affected:

* client.js
* asyncMatchRoutes.js
* info.js
* mockAPI.js
* App.js
