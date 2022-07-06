import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from 'axios'
import store from './store'
import './api/mock.js'
import { create } from 'core-js/core/object'
import { createNamespacedHelpers } from 'vuex'


Vue.prototype.$http = http

Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  // 获取token信息,调用getToken
  store.commit('getToken')
  // 拿到store中的token
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login'})  
  }else if(token && to.name ==='login'){
    next({name:'homeView'})
  }else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
// 刷新白屏问题的解决
  created(){
    store.commit('addToken',router)
  }

}).$mount('#app')
