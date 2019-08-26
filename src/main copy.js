// 这是本项目的js入口文件
// 引入jquery
import $ from "jquery";

// 引入bootstrap
import "bootstrap/dist/css/bootstrap.css";

// 引入font-awesome
import "font-awesome/css/font-awesome.css";

// 引入css文件
import "./css/index.css";

// 引入less文件
import "./css/index.less";

// 引入scss文件
import "./css/index.scss";

// 设置隔行变色功能
$(function() {
  $("li:odd").css("backgroundColor", "yellow");
  $("li:even").css("backgroundColor", function() {
    return "#" + "999";
  });
});

class Person { // 通过es6新语法 创建一个类
  // 声明一些静态属性
  static info = { name: 'html', age: 20 }
}

console.log(Person.info);
