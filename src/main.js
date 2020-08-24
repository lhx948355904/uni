import Vue from 'vue';
import App from './App.vue';
// @ts-ignore;
import router from './router';
import axios from 'axios';
import { RouterMount } from 'uni-simple-router';
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
App.mpType = 'app';
const app = new Vue({
    ...App,
    ...router
});
// #ifdef H5
RouterMount(app, '#app');
// #endif
// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
// var vm = new App().$mount();
//# sourceMappingURL=main.js.map