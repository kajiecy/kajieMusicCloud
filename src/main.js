import 'swiper/dist/css/swiper.css';
import '@/assets/css/my-mint.scss';
import '@/assets/css/main.scss';
import '@/assets/css/common.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';



import '@/util/inobounce.js';

import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = true;

new Vue({
    router,
    store,
    'render': h => h(App)
}).$mount('#app');


