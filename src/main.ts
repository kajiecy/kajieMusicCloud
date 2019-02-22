import 'swiper/dist/css/swiper.css';
// @ts-ignore
import Mint from 'mint-ui';
import '@/assets/css/my-mint.scss';
import '@/assets/css/main.scss';
import '@/assets/css/common.scss';

// @ts-ignore
import KajieScroll from '@/components/KajieScroll.vue';


import Vue from 'vue';
Vue.use(Mint);
Vue.component('kajie-scroll',KajieScroll)

// @ts-ignore
import App from './App.vue';
import router from './router';
import store from './store';


Vue.config.productionTip = true;

export default new Vue({
    router,
    store,
    'render': h => h(App)
}).$mount('#app');


