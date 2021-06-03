import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import router from './router'

Vue.use(VueCookie);
Vue.use(VueAxios, axios)

export const eventBus = new Vue();


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
