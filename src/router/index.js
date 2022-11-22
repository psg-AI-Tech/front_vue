import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import E404 from '@/components/E404'

Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/', component: () => import('@/views/test')},
    { path: '/', component: () => import('@/views/login')},

    //配置登录成功页面，使用时需要使用 path 路径来实现跳转
    { path: '/success', component: () => import('@/views/success')},
    { path: '/successTest', component: () => import('@/views/loginTest')},

    //配置登录失败页面，使用时需要使用 path 路径来实现跳转
    { path: '/error', component: () => import('@/views/error'), hidden: true }

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   // component: HelloWorld
    //   component: () => import('../components/HelloWorld.vue')
    //   // component: () => import('/home/zj/_github/f_web/web_/front_vue/src/views/Initial.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   meta: { activeRoute: '/login', navName: 'login' },
    //   // component: () => import('../views/Login.vue')
    //   // component: () => import('../components/HelloWorld.vue')
    //   component: () => import('/home/zj/_github/f_web/web_/front_vue/src/components/E404.vue')
    //   // component: () => import('/home/zj/_github/f_web/web_/front_vue/src/views/404/404.vue')
    // }
  ]
})
