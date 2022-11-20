// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import 'element-plus/theme-chalk/index.css'
// // import locale from 'element-plus/lib/locale/lang/zh-cn'


import ElementUI from 'element-ui';                      // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css';           // element-ui的css样式要单独引入

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn'


// import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// const app = createApp(App) //输出一个vue对象
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//     app.component(key, component)
// }
// app.use(router).use(ElementPlus).mount('#app')



Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(ElementPlus)
// Vue.use({locale})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
