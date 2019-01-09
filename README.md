# react-redux-typescript-saga-immutable

This project includes a working example of React, React Router, Redux, Redux Saga, ImmutableJS and Styled Components.

All the code is in TypeScript, written as either .ts or .tsx files.

## Setup

```
yarn
yarn start
```
├── mockserver            ->可在此文件夹下运行"node mockserver.js"运行本地mockserver
├── node_modules          ->依赖的 node modules
└── src                   ->项目源代码
    ├── actions           ->所有的 actions






1.componentWillMount  将要装载，在render之前调用；
  componentDidMount，（装载完成），在render之后调用

2.componentWillMount  每一个组件render之前立即调用；
componentDidMount  render之后并不会立即调用，而是所有的子组件都render完之后才可以调用

3、componentWillMount  可以在服务端被调用，也可以在浏览器端被调用；
  componentDidMount  只能在浏览器端被调用，在服务器端使用react的时候不会被调用
