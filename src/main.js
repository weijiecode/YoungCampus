import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/css/global.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080/account'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
