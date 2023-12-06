1. 不包含依赖项的父子组件的useEffect的执行顺序
* 同组件内部的```useEffect```从上到下依次执行
* 父子组件中，子组件的```useEffect``` 比父组件先执行
* ```useEffect```执行的优先级比```setTimeout`高
```tsx
// father

  useEffect(() => {
    console.count('step1=======================1',);
    return () => {
      // alert('我执行啦')
    }
  }, [])

// child
  useEffect(() => {
    console.count("step==============================2")
    return () => {
      console.count("step==============================3")
    }
  })
```
2. 包含依赖项的父子组件的useEffect的执行顺序
* 当useState的set方法同步调用时，useEffect只触发一次执行
* 当useState的set方法每包裹在一个异步函数中调用时，useEffect就多触发一次执行；
```tsx
useEffect(() => {
    console.count("step==============================10")
    return () => {
      console.count("step==============================11")
    }
  }, [test1,test2,test3])

const test = () => {
        setTimeout(() => {
          setTest1(true)
        }, 0)
        setTimeout(() => {
          setTest2(1)
        }, 0)
        setTimeout(() => {
          setTest3('null')
        }, 0)
        // setTest1(true)
        // setTest2(1)
        // setTest3('null')
      }
```