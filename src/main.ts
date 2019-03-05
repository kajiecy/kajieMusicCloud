import 'swiper/dist/css/swiper.css';
import Mint from 'mint-ui';
import * as lodash from 'lodash';
import '@/assets/css/my-mint.scss';
import '@/assets/css/main.scss';
import '@/assets/css/common.scss';

// @ts-ignore
import KajieScroll from '@/components/KajieScroll.vue';
import CommonUtil from '@/util/CommonUtil.ts';
// 引入自定义指令
import directive from '@/directives/directives'
directive.init();

import Vue from 'vue';
Vue.use(Mint);
Vue.component('kajie-scroll',KajieScroll)
Vue.prototype._ = lodash;
Vue.prototype.$myUtil = CommonUtil;


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


