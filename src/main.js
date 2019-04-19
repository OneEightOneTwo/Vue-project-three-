import Vue from 'vue'
import App from './App.vue'
//引入rem.js移动端比例自适应
import './rem.js'
//引入路由对象
import '../src/assets/css/index.css'
import router from './Router.js'
Vue.config.productionTip = false

new Vue({
  //挂载路由实例
  router,
  render: h => h(App),
}).$mount('#app')
