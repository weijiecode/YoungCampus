import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import './assets/css/global.css'
import './assets/iconfont/iconfont.css'
import store from './store/index'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080/'


//axios.defaults.headers.common['Authentication-Tokens'] = store.state.token;


axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // 判断是否存在token,如果存在将每个页面header都添加token
  if(store.state.token){
    //config.headers.Authorization  = store.state.token
    config.headers.Authorization = store.state.token;
// config.headers.common['token'] = store.state.token;
  }
  return config;
},error => {
  return Promise.reject(error)
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  store, // store和router一样,将我们创建的Vuex实例挂载到这个vue实例中
  render: h => h(App)
}).$mount('#app')
