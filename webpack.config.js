
// 引入根路径
const path = require('path');

// 引入html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin');

// 引入vue-loader的依赖项
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 

// 通过node方法，将js文件，进行模块操作，向外暴露一个配置对象
module.exports = {
  // 指定 入口 和 出口
  entry: './src/main.js',
  output: { // 配置 出口 相关信息
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  plugins: [
    new htmlWebpackPlugin({ // 创建一个 在内存种生成html的插件
      template: path.resolve(__dirname,'src/index.html'), // 指定你使用的模板页面
      filename: 'index.html' // 在内存种生成的新页面的名称

    }),
    new VueLoaderPlugin()
  ],
  module: { // 这个节点用来配置所有 第三方的 模块
    rules: [ // 所有第三方模块的配置规则
      { test: /\.css$/, use: ['style-loader','css-loader'] }, // 配置 处理 .css 的第三方loader规则 ==>,调用的时候 从右向左 调用，书写顺序会影响执行结果
      { test: /\.less$/, use: ['style-loader','css-loader','less-loader'] }, // 配置 处理 .less 的第三方loader规则 ==>,调用的时候 从右向左 调用，书写顺序会影响执行结果
      { test: /\.(sass|scss)$/, use: ['style-loader','css-loader','sass-loader'] }, // 配置 处理 .sass/scss 的第三方loader规则 ==>,调用的时候 从右向左 调用，书写顺序会影响执行结果
      { test: /\.(jpg|jpeg|gif|bmp|png)$/, use: 'url-loader' }, // 配置 处理 url(图片) 的第三方loader规则
      { test: /\.(woff|woff2|ttf|eot|svg)$/, use: 'url-loader' }, // 配置 处理 字体文件 的第三方loader规则
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 处理 es6高级语法的 的第三方loader规则，同时在匹配的时候不检查，node_modules下的文件
      { test: /\.vue$/, use: 'vue-loader' }, // 配置 处理 .vue文件 的第三方loader规则
    ]
  },
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.js'
    }
  }
};