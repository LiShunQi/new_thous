import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const Login = r => require.ensure([], () => r(require('@/components/login/Login.vue')), 'login');
const index = r => require.ensure([], () => r(require('@/components/index/index.vue')), 'index');
const jtqk = r => require.ensure([], () => r(require('@/components/jtqk/jtqk.vue')), 'jtqk');
const qyqk = r => require.ensure([], () => r(require('@/components/qyqk/qyqk.vue')), 'qyqk');
const white = r => require.ensure([], () => r(require('@/components/whiteboard/white.vue')), 'white');

Vue.use(Router);

const routes = [
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
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    component: index
  },
  { //集团情况
    path: '/jtqy',
    name: 'jtqk',
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    component: jtqk
  },
  { //企业情况
    path: '/qyqk',
    name: 'qyqk',
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    component: qyqk
  },
  { //数据白板
    path: '/white',
    name: 'white',
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    component: white
  },
];

const router =  new Router({
  routes
});

// router.beforeEach((to, from, next) => {
//   console.log('router',to);
// });

export default router;
