import 'swiper/dist/css/swiper.css';
// @ts-ignore
import Mint from 'mint-ui';
// @ts-ignore
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
// @ts-ignore
import Vue from 'vue';
Vue.use(Mint);
Vue.component('kajie-scroll',KajieScroll)



// @ts-ignore
import App from './App.vue';
import router from './router';
import store from './store';

import Mock from './mock/index'
Mock.init();

// axios 封装 post
import {post} from './util/http'


Vue.prototype._ = lodash;
Vue.prototype.$myUtil = CommonUtil;
Vue.prototype.$post=post;

Vue.config.productionTip = true;

export default new Vue({
    router,
    store,
    'render': h => h(App)
}).$mount('#app');


