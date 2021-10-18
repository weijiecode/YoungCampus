import Vue from 'vue'
import Vuex from 'vuex'

// 挂载Vuex
Vue.use(Vuex)

//创建Vuex对象
const store = new Vuex.Store({
    state:{
        // 存放的键值对就是所要管理的状态
        token:''
    },
    mutations:{
        set_token(state,token) {
            state.token = token
            sessionStorage.token = token
            // localStorage.token = token
        },
        del_token(state) {
            state.token = ''
            sessionStorage.removeItem('token')
        }
    }
})

export default store