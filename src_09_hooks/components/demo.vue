<template>
  <!-- vue3 组件中的模板结构可以没有跟标签div -->
  <h2>求和：{{sum}}</h2>
  <button @click="sum++">点击+1</button>
  <hr>
  <h2>坐标：x:{{point.x}},y:{{point.y}}</h2>
</template>
    
<script>
import { reactive, ref, watch } from 'vue'
import usePoint from '../hooks/usePoint'
export default {
  name: 'App',
  setup(props, context) {

    let sum = ref(0)

    let point = usePoint()

    

    return {
      point,
      sum
    }
  }
}
</script>
    
<style>

</style>
    