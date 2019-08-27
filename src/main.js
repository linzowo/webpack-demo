// 这是本项目的js入口文件

// 引入vue
import Vue from "vue";

// 引入vue-router
import VueRouter from "vue-router";

// 完整引入mint-ui
// import MintUI from "mint-ui";

// 按需导入mint-ui
import { Button,Toast } from 'mint-ui'
// 引入样式
import 'mint-ui/lib/style.css'

// 将插件挂载到vue上
Vue.use(VueRouter);

// 完整导入MintUI的挂载方式
// Vue.use(MintUI);

// 按需导入mint-ui的挂载方式
Vue.component(Button.name,Button);
Vue.component(Toast.name,Toast);

// 引入创建主组件
import app from "./app.vue";

// 引入自己的路由模块
import router from "./router.js"

// 引入样式
import './lib/mui/css/mui.css'


// 创建以vue实例
var vm = new Vue({
  el: "#app",
  data: {},
  render: c => c(app),
  router: router
});
