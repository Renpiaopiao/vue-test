<template>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
</template>

<script>
import { ref, customRef } from "vue";
export default {
  name: 'App',
  setup() {

    function myRef(value,delay) {
      let timer
      //通过customRef去实现自定义
      return customRef((track, trigger) => {
        return {
          get() {
            track() //告诉Vue这个value值是需要被“追踪”的
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() //告诉Vue去更新界面
            }, delay)
          }
        }
      })
    }

    // let keyword = ref('')
    let keyword = myRef('',2000)

    return {
      keyword
    }
  }
}
</script>

<style>

</style>
