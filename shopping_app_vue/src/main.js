import Vue from 'vue'
import router from './router/router'
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = false

import App from './App.vue'
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
