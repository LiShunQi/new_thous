import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import index from '@/components/index/index'
import jtqk from '@/components/jtqk/jtqk'
import qyqk from '@/components/qyqk/qyqk'
import white from '@/components/whiteboard/white'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    { //login (登录)
      path: '/login',
      name: 'Login',
      component: Login
    },
    { // 首页
      path: '/',
      name: 'index',
      component: index
    },
    { //集团情况
      path: '/jtqk',
      name: 'jtqk',
      component: jtqk
    },
    { //企业情况
      path: '/qyqk',
      name: 'qyqk',
      component: qyqk
    },
    { //企业情况
      path: '/white',
      name: 'white',
      component: white
    },
  ]
})
