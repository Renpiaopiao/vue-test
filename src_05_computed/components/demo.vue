<template>
    <!-- vue3 组件中的模板结构可以没有跟标签div -->
      <h1>我是h1</h1>
      姓：<input type="text" v-model="person.fname"><br>
      名：<input type="text" v-model="person.lname"><br>
      <span>{{fullname}}</span><br>
      全名：<input type="text" v-model="fullname">
    </template>
    
    <script>
    import { reactive,computed } from '@vue/reactivity'
    export default {
      name: 'App',
      setup(props,context){

        let person = reactive({
          fname:'张',
          lname:'三',
          age: 18
        })

        // 计算属性  -  简写
        // let fullname =  computed(() => {
        //   return person.fname + '-' + person.lname
        // })
        
        // 计算属性  -  完整
        let fullname =  computed({
          get(){
            return person.fname + '-' + person.lname
          },
          set(value){
            const nameArr = value.split('-')
            person.fname = nameArr[0]
            person.lname = nameArr[1]
          }
        })
    
        return {
          person,
          fullname
        }
      }
    }
    </script>
    
    <style>
    
    </style>
    