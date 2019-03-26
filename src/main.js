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
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
