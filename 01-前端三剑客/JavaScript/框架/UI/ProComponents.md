# 1. ProForm
## 1.1 开篇有益
* 如果你想要设置默认值，请使用 ```initialValues```, ```任何直接使用组件 value 和 onChange 的方式都有可能导致值绑定失效```。
* 如果想要表单联动或者做一些依赖，可以使用 ```render props``` 模式, ```ProFormDependency``` 绝对是最好的选择
* ProForm 的 onFinish 与 antd 的 Form 不同，是个 Promise，如果你正常返回会自动为你设置按钮的加载效果
* 如果想要监听某个值，建议使用 onValuesChange。保持单向的数据流无论对开发者还是维护者都大有裨益
* ProForm 没有黑科技，只是 antd 的 Form 的封装，如果要使用自定义的组件可以用 Form.Item 包裹后使用，```支持混用```

## 1.2 ProFormFields 表单项
* 每个表单项都支持 fieldProps 属性来支持设置输入组件的props。
* 支持 ```placeholder``` 的透传，你可以直接在组件上设置 placeholder。
* 每个表单项同时也支持了 readonly ，不同的组件会有不同的只读样式，与 disable 相比 readonly 展示更加友好
* 原理：（ProFormText 是 FormItem + Input 的产物）
```js
const ProFormText = (props) => {
  return (
    <ProForm.Item {...props}>
      <Input placeholder={props.placeholder} {...props.fieldProps} />
    </ProForm.Item>
  );
};
```
* <font color="#dd0000">所以给 ProFormText 设置的 props 其实是 Form.Item 的，fieldProps 才是包含的组件的，要切记。</font><br /> 
### 1.2.1 name
* name 如果是```string```获取的是全局变量,如果是```string[]```,获取的是嵌套变量
* 例如：
```js
// name =['a', 'b'] 实际取值为a.b
```
* ProFormDependency 的 name 参数必须要是一个数组
```js
// name={['name', ['name2', 'text']]} 从renderProp中获取的值为 { name: string,name2: { text:string } }
```