import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'
Vue.use(Router)

//初始化
const router = new Router({
    routes: [
      {
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
        path: 'pages/index/index',
        name: 'index',
      },
      {
        path: 'pages/map/index',
        name: 'map',
      },
      {
        path: 'pages/news/index',
        name: 'news',
      },
    ],//路由表
    debugger:true,
    h5:{
        useUniConfig:true,  //采用在pages.json下的所有页面配置信息,默认为true
    },
});
console.log(router)

//全局路由前置守卫
router.beforeEach((to, from, next) => {
  console.log(123)
   next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
  

})
export default router;