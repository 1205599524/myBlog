import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible'
import VueRouter from 'vue-router'
import router from './router'
import axios from './assets/js/axios'
Vue.config.productionTip = false
Vue.prototype.$axios=axios
Vue.use(ElementUI)
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
