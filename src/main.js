// 这是本项目的js入口文件

// 引入vue
import Vue from "vue";

// 引入vue-router
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入创建主组件
import app from "./app.vue";

// 引入自己的路由模块
import router from "./router.js"


// 创建以vue实例
var vm = new Vue({
  el: "#app",
  data: {},
  render: c => c(app),
  router: router
});
