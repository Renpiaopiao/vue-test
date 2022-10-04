<template>
  <!-- vue3 组件中的模板结构可以没有跟标签div -->
  <h2>求和：{{sum}}</h2>
  <button @click="sum++">点击+1</button>
</template>
    
<script>
import { reactive, ref, watch ,watchEffect,
  onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
export default {
  name: 'App',
  setup(props, context) {

    let sum = ref(0)

    onBeforeMount(()=>{
      console.log('---onBeforeMount---');
    })
    onMounted(()=>{
      console.log('---onMounted---');
    })
    onBeforeUpdate(()=>{
      console.log('---onBeforeUpdate---');
    })
    onUpdated(()=>{
      console.log('---onBeforeUpdate---');
    })
    onBeforeUnmount(()=>{
      console.log('---onBeforeUnmount---');
    })
    onUnmounted(()=>{
      console.log('---onUnmounted---');
    })
    return {
      sum
    }
  }
}
</script>
    
<style>

</style>
    