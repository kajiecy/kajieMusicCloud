# kajie-music-cloud（卡杰云音乐） # 
> 在开发的过程中高仿一个网易云音乐

## 前言 ##
本软件是仿照网易云音乐IOS版进行copy,在编写的过程中尽量还原APP效果。
此项目诞生的目的仅为了VueJS手机端的架构及特性。（说白了就是自己拿来练手的BB一大堆。。。）

[[在线预览]](http://music.kajie88.com)

## 功能实现 ##

+ [X] 发现页面 中Tabs（个性电台-主播推荐）切换时，选中状态样式的过渡效果。[[📝详细文档]](https://github.com/kajiecy/kajieMusicCloud/blob/master/document/tabSwitch.md)
+ [X] Header右下角标识 播放状态 的动画图标的展示。[[📝详细文档]](https://github.com/kajiecy/kajieMusicCloud/blob/master/document/cssAnimation.md)
+ [X] 发现页面搜索框的逻辑/过渡动画的处理。
+ [ ] 歌单详情页面Header背景为模糊的专辑封面，并需要在界面滚动式跟随变body不变换。

## 技术栈 ##
 1. Vue.js 2.0 全家桶
 2. axios
 3. mint-ui (此UI库目前仅使用mt-loadmore组件其他组件均为自定义组件)[[Github地址]](https://github.com/ElemeFE/mint-ui/)
 4. Swiper [[Github地址]](https://github.com/nolimits4web/swiper)
 5. stackblur.js [[Github地址]](https://github.com/flozz/StackBlur) [[📝效果展示]](http://music.kajie88.com/#/stackBlurDemo)

## 安装/运行
``` shell
# install dependencies   安装依赖
npm install

# serve with hot reload at localhost:8080   启动项目(当8080被占用会在8081启动以此类推)
npm run serve

# build for production with minification    打包项目
npm run build
```

## 笔记 ##


## 参考文档 ##

+ [如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)
+ [iOS 与 惯性滚动](https://www.cnblogs.com/chris-oil/p/6164966.html)（现在部分样式无法兼容UIWebView内核的ios浏览器）
