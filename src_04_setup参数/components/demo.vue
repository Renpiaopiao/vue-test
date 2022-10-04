<template>
    <!-- vue3 组件中的模板结构可以没有跟标签div -->
      <h1>我是h1</h1>
      <div>{{person.name}}</div>
      <div>{{person.age}}</div>
      <button @click="sayHELLO">按钮</button>
    </template>
    
    <script>
    import { reactive } from '@vue/reactivity'
    export default {
      name: 'App',
      props:['msg'],
      emits:['hello'],
      setup(props,context){
        console.log('props:',props);
        console.log('context:',context.slots);
        let person = reactive({
          name:'张三',
          age: 18
        })
    
        function sayHELLO(){
            context.emit('hello',666)
        }
        // 1、返回对象
        return {
          person,
          sayHELLO:sayHELLO
        }
        
        // 2、返回一个渲染函数
      }
    }
    </script>
    
    <style>
    
    </style>
    