import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Dialog, Rate } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import live2d4vue from 'live2d4vue'

Vue.config.productionTip = false

Vue.use(Dialog)
Vue.use(Rate)
Vue.use(VueLazyload)
Vue.use(live2d4vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
