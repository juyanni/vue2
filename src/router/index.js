import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views//HomeView.vue'
import Login from '../components/Login.vue'
import a from '../components/a.vue'
import Router from 'vue-router'
// 导入全局样式表
import '../assets/css/global.css'
Vue.use(VueRouter)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/a',
    name: 'a',
    component: () => import('../components/a.vue'),
    //redirect: '/HomeView',
    children: [
      {
        path: 'HomeView',
        name: 'homeview',
        component: () => import('../views//HomeView.vue'),

      },
      {
        path: 'mall',
        name: 'mall',
        component: () => import('../views/mall/index.vue'),
      },
      {
        path: 'user',
        name: 'user',
        component: () => import('../views/user/index.vue'),
      },
      {
        path: 'page1',
        name: 'page1',
        component: () => import('../views/other/pageOne.vue'),
        
      },
      {
        path: 'page2',
        name: 'page2',
        component: () => import('../views/other/pageTwo.vue'),
      },

      {
        path: 'First_page',
        name: 'first_page',
        component: () => import('../components/First_page.vue'),
      }
    ]
  },
  // {
  //   path: '/Second',
  //   name: 'second',
  //   component: () => import('../components/Second.vue'),
  // {
  //   path: '/Headerage',
  //   name: 'headerage',
  //   component: () => import('../components/Headerage.vue')
  // },
  {
    path: 'Mypage',
    name: 'mypage',
    component: () => import('../components/Mypage.vue')
  },

]
const router = new VueRouter({
  routes
})

// import Router from 'vue-router'
// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export default router
