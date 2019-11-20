# universal-demo-fifteen-ts

## Overview:

App is a continuation of fourteen and uses TypeScript.. 

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












