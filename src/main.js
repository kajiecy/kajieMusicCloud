import 'swiper/dist/css/swiper.css';
import Mint from 'mint-ui';
import '@/assets/css/my-mint.scss';
import '@/assets/css/main.scss';
import '@/assets/css/common.scss';

import Vue from 'vue';
Vue.use(Mint);

import App from './App.vue';
import router from './router';
import store from './store';



import '@/util/inobounce.js';




Vue.config.productionTip = true;

new Vue({
    router,
    store,
    'render': h => h(App)
}).$mount('#app');


