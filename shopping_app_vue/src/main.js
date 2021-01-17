import Vue from 'vue'
import router from './router/router'
import Mint from 'mint-ui';
// import store from './store/index.js'
// import axios from 'axios'
import 'mint-ui/lib/style.css'
import './common/stylus/index.styl'
// import VueTouch from 'vue-touch'
Vue.use(Mint);

Vue.config.productionTip = false
global.storage = window.localStorage

// 默认设置axios请求
// axios.default.baseUrl = 'http://localhost:3000/'  //设置默认请求的前缀
// axios.defaults.withCredentials = true //允许跨域
// global.axios = axios //设置为全局引用

// Vue.prototype.$http = axios //在vue的原型链上添加axios
Vue.config.productionTip = false
// Vue.use(MintUI)
// Vue.use(VueTouch, {name: 'v-touch'})

import App from './App.vue'
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
