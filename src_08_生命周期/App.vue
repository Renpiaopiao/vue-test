<template>
  <demo v-if="isShow"></demo>
  <button @click="isShow=!isShow">切换隐藏</button>
</template>

<script>
import demo from './components/demo.vue'
import { ref } from "vue";
export default {
  name: 'App',
  components:{
    demo
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
