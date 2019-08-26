// 路由模块

// 引入vue-router
import VueRouter from "vue-router";

// 引入路由组件
import account from "./main/account.vue";
import goodslist from "./main/goodslist.vue";

// 引入子路由组件
import login from "./subcom/login.vue";
import logon from "./subcom/logon.vue";

// 创建一个vue-router实例
const router = new VueRouter({
    routes: [
      { path: "/account", component: account, children: [
        { path: '/account/login', component: login},
        { path: '/account/logon', component: logon}
      ] },
      { path: "/goodslist", component: goodslist }
    ]
  });

//   向外暴露router

export default router;