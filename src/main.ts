import 'swiper/dist/css/swiper.css';
import Mint from 'mint-ui';
import * as lodash from 'lodash';
import '@/assets/css/my-mint.scss';
import '@/assets/css/main.scss';
import '@/assets/css/common.scss';

import KajieScroll from '@/components/KajieScroll.vue';


import Vue from 'vue';
Vue.use(Mint);
Vue.component('kajie-scroll',KajieScroll)
Vue.prototype._ = lodash;

import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = true;

export default new Vue({
    router,
    store,
    'render': h => h(App)
}).$mount('#app');


