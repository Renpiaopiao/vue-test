<template>
<!-- vue3 组件中的模板结构可以没有跟标签div -->
  <h1>我是h1</h1>
  <div>{{name}}</div>
  <div>{{age}}</div>
  <div @click="sayHELLO">按钮</div>
</template>

<script>
export default {
  name: 'App',
  setup(){
    let name = '张三'
    let age = 18

    function sayHELLO(){
      alert('setup 里面创建的sayHELLO函数')
    }
    // 1、返回对象
    return {
      name:name,
      age:age,
      sayHELLO:sayHELLO
    }
    
    // 2、返回一个渲染函数
  }
}
</script>

<style>

</style>
