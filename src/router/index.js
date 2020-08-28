import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'
import { mapGetters } from 'vuex';
import store from "@/store"
Vue.use(Router)

//初始化
const router = new Router({
    routes: modules,//路由表
    debugger:true,
    h5:{
        useUniConfig:true,  //采用在pages.json下的所有页面配置信息,默认为true
    },
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
    //获取用户信息
    console.log(store.getters)
    // if(store.getters.username != ""){
    //     // next()
    //     next({
    //         path:"/pages/index/index"
    //     })
    // }else{
    //     // uni.navigateTo({
    //     //     url:"/pages/login"
    //     // })
    //    next({
    //         path:"/pages/index/index"
    //    })
    // }
    console.log(to,from)
   next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
  

})
export default router;