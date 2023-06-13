# 1.为什么每个组件都需要引入一个```import React from 'react'```?
* 因为经过babel转译后每个组件渲染时调用的是```React.createElement```去创建元素，交给```ReactDOM.render```渲染
