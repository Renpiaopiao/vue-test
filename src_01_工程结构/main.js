// 引入不是Vue构造函数，引入一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

/**
 
const app =  createApp(App)
app.mount('#app')

 */



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