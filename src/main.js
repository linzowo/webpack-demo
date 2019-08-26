// 这是本项目的js入口文件

// 引入vue
import Vue from 'vue';

// 引入vue-router
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入创建的vue组件
import app from './app.vue'

// 引入路由组件
import login from './main/login.vue'
import logon from './main/logon.vue'

// 创建一个vue-router实例
const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/logon', component: logon }
  ]
})

// 创建以vue实例
var vm = new Vue({
  el: '#app',
  data:{},
  render: c => c(app),
  router: router
})