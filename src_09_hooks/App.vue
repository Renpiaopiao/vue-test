<template>
  <demo v-if="isShow"></demo>
  <button @click="isShow=!isShow">切换隐藏</button>
  <hr>
  <test/>
</template>

<script>
import demo from './components/demo.vue'
import test from './components/test.vue'
import { ref } from "vue";
export default {
  name: 'App',
  components:{
    demo,
    test
  },
  setup(){
    let isShow = ref(true)
    return{
      isShow
    }
  }
}
</script>

<style>

</style>
