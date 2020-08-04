import Vue from 'vue'
import App from './App.vue'
// @ts-ignore;
import router from './router/index.js'
// @ts-ignore;
import test from "./router/test.js"
import axios from 'axios'
import { RouterMount } from 'uni-simple-router';

console.log(router);

Vue.config.productionTip = false
Vue.prototype.$http = axios;

(App as any).mpType = 'app'
const app = new Vue({
	...App
})
// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

// var vm = new App().$mount();

