import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Rate, Scrollbar } from 'element-ui'
import VueLazyLoad from 'vue-lazyload'
import fastClick from 'fastclick'

Vue.config.productionTip = false

Vue.use(Rate)
Vue.use(Scrollbar)
Vue.use(VueLazyLoad)
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastClick.attach(document.body)
  }, false)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
