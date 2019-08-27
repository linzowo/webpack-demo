<template>
  <div>
    <h1>这是一个主组件</h1>

    <mt-button type="primary" @click.native="show">mui按钮</mt-button>
    <!-- mui按钮 -->
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>

    <router-link to="/account">用户</router-link>
    <router-link to="/goodslist">商品列表</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// 引入mint-ui
// import MintUI from "mint-ui";
// 按需引入对应的MintUI
import { Toast } from "mint-ui";

// 引入字体图标样式
import "font-awesome/css/font-awesome.css";
import "./css/index.css";

export default {
  data() {
    return {
      instance: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      // 模拟一个ajax获取数据的时间
      this.show();
      setTimeout(() => {
        this.instance.close();
      }, 3000);
    },
    show() {
      this.instance = Toast({
        message: "hello world!",
        position: "bottom",
        duration: -1,
        iconClass: "fa fa-taxi",
        className: "myicon"
      });
    }
  }
};
</script>

<style>
</style>