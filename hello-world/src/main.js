import Vue from 'vue'
import App from './App.vue'

import store from './store/store'
import router from './router/router'
import modal from './plugins/ModalWindow'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
