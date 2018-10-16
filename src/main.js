import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import '@/assets/css/my-mint.scss'
import '@/assets/css/main.scss'
import '@/assets/css/common.scss'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


