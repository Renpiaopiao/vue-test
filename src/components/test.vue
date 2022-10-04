<template>
  <div>我是test组件</div>
  <h2>坐标：x:{{point.x}},y:{{point.y}}</h2>
</template>

<script>
import usePoint from '@/hooks/usePoint';
export default {
    setup(){
        let point = usePoint()
        return {
            point
        }
    }
}
</script>

<style>

</style>