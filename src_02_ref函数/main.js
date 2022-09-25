// 引入不是Vue构造函数，引入一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// vue3 写法
/**
 
const app =  createApp(App)
app.mount('#app')

 */

// vue2 怎么写的？
/*
    new Vue({
        render:h => h(App) 
    }).$mount('#app)
*/


/**
    const vm = new Vue({
        render:h => h(App) 
    })
    vm.$mount('#App')
 */