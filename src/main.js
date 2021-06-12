import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'


// 引入适配文件
import "@/utils/shiping.js"

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
