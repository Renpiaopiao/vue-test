<template>
  <!-- vue3 组件中的模板结构可以没有跟标签div -->
  <h2>求和：{{sum}}</h2>
  <button @click="sum++">点击+1</button>
  <hr>
  <h2>信息：{{msg}}</h2>
  <button @click="msg+='!'">修改</button>
  <hr>
  
</template>
    
<script>
import { reactive, ref, watch ,watchEffect} from 'vue'
export default {
  name: 'App',
  setup(props, context) {

    let sum = ref(0)
    let msg = ref('ni hao')

    let person = reactive({
      name:'zhang san',
      age:18,
      job:{
        j1:{
          salary:100
        }
      }
    })

    watchEffect(() => {
      const x1 = sum.value
      console.log('watchEffect执行了！');
    })

    // 1.监视ref 所定义一个的响应式数据
    // watch(sum,(newval,oldval)=> {
    //   console.log('sum的值发生了变化：',newval,oldval);
    // })

    // 2.监视ref 所定义多个的响应式数据
    // watch([sum,msg],(newval,oldval)=> {
    //   console.log('sum的值发生了变化：',newval,oldval);
    // })

  
    // 3.监视ref 完整写法
    // watch(sum,(newval,oldval)=> {
    //   console.log('sum的值发生了变化：',newval,oldval);
    // },{immediate:true})


    return {
      sum,
      msg,
      person
    }
  }
}
</script>
    
<style>

</style>
    