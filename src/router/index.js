import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import E404 from '@/components/E404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      component: () => import('../components/HelloWorld.vue')
      // component: () => import('/home/zj/_github/f_web/web_/front_vue/src/views/Initial.vue')
    },
    {
      path: '/login',
      name: 'Login',
      meta: { activeRoute: '/login', navName: 'login' },
      // component: () => import('../views/Login.vue')
      // component: () => import('../components/HelloWorld.vue')
      component: () => import('/home/zj/_github/f_web/web_/front_vue/src/components/E404.vue')
      // component: () => import('/home/zj/_github/f_web/web_/front_vue/src/views/404/404.vue')
    }
  ]
})
