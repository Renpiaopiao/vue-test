<template>
  <demo msg="ssg" @hello="showHello">
    <template v-slot:qwe>
      <span>111</span>
    </template>
  </demo>
</template>

<script>
import demo from './components/demo.vue'
export default {
  name: 'App',
  components:{
    demo
  },
  setup(){
    function showHello(value){
      alert(`父组件接收到的参数${value}`)
    }
    return {
      showHello
    }
  }
}
</script>

<style>

</style>
