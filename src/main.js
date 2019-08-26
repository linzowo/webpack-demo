// 这是本项目的js入口文件

// 引入vue方法1：
// import Vue from '../node_modules/vue/dist/vue.js'

// 引入vue方法2：
import Vue from 'vue';

// 引入新创建的login组件
import login from './login.vue'

// 创建vue实例
new Vue({
  el: '#app',
  data: {
    msg: '这是通过vue创建的组件'
  },
  render: c => c(login)
})