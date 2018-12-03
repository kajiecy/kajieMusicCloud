## 使用Swiper实现tabs切换并添加过渡动画的总结 ##

## 效果展示 ##
[在线Demo](http://music.kajie88.com/#/find)

![image](http://qiniu.kajie88.com/tabsDemo.gif)

### 实现思路 ###

- #### 页面构造 ####
整个页面结构由两个部分组成 

div.swiper-header-tab-out 为上半部分的tabs

div.swiper-container 为下半部分 Swiper 的滑动区域

![image](http://qiniu.kajie88.com/tabsDemo-1.png)

```vue
<div class="swiper-header-tab wd80 marginAuto">
    <div v-for="(item,index) in siderList" :key="index" @click="changeSider(index,$event)" class="swiper-header-tab-item textcenter">
        {{item.name}}
        <template v-if="index===0">
            <div class="select-div">
                <div class="select-div-inner"></div>
            </div>
        </template>
    </div>
</div>
```
在页面mounted我们默认选中第一个们标签，并且在第一个标签下生成一个 div.select-div 
这个div就是我们看到的活动标签下的小白条了，之后的我们仅需要根据监控swiper不同的滑动事件来对这个div进行相应的处理。

```vue
<div class="swiper-container swiper-main">
    <div class="swiper-wrapper wrapper-main">
        <div class="swiper-slide">
            <!-- swiper 的 两个content之一 内容显示被自定义vue组件封装  -->
            <div class="swiper-slide-content"> 
                <home-find-recommend></home-find-recommend>
            </div>
        </div>
        <div class="swiper-slide">
            <!-- swiper 的 两个content之一 内容显示被自定义vue组件封装  -->
            <div class="swiper-slide-content">
                <home-find-station></home-find-station>
            </div>
        </div>
    </div>
</div>
<script>
    export default {
        mounted() {
            let _vm = this;
            _vm.swiperMain = new Swiper('.swiper-main', {
                resistanceRatio : 0,//滑动到尽头时禁止在滑动
                iOSEdgeSwipeDetection : true,//开启IOS系统下滑动优化
                watchSlidesProgress : true,//开启切换时的进度监控 如果 想使用progress方法 此字段必须为true 
                on: {
                    /**
                    * 当当前Slide切换时执行
                    * (当前Slide发生 我会记录下当前活动Silder存储到vue的Data中，
                    * activeIndex通过对这个字段的动态绑定我们就可以大致锁定div.select-div的活动位置了
                    * 后面的方法均用来为div.select-div增加动画效果) 
                    **/
                    slideChange: function () {
                        _vm.activeIndex = this.activeIndex;
                    },
                    /**
                    * 当swiper执行切换时触发此函数,次函数携带参数 progress 为切换的进度
                    * ！值得注意的是 当我们 activeIndex 从 0切换到1 时,progress的变化趋势为 0-1
                    * Swiper.slides 中还存在着每一个sliders的单独进度 通过这个进度我们可以改变 div.select-div的进度
                    * 通过总进度我们控制 div.select-div偏移
                    **/
                    progress: function(progress){
                        _vm.$nextTick(()=>{
                            document.querySelector('.select-div-inner').style.width=25*(1+Math.abs(this.slides[_vm.activeIndex].progress)*2)+'%';
                            document.querySelector('.select-div').style.transform = 'translateX('+document.querySelector('.swiper-header-tab-item').clientWidth*(this.slides.length-1)*progress+'px)';
                        });
                    },
                    /**
                    *  滑动开始移除触发方法 移除样式 样式由progress接手控制
                    */
                    touchStart: function() {
                        document.querySelector('.select-div').style.transition = '';
                        document.querySelector('.select-div-inner').style.transition = '';
                    },
                    /**
                    *  滑动结束后样式已由progress赋值，这里重新给其加上样式转变速度
                    */
                    setTransition: function(speed) {
                        document.querySelector('.select-div').style.transition = speed + 'ms';
                        document.querySelector('.select-div-inner').style.transition = speed + 'ms';
                    }
                }
            });
        },
    }
</script>
```
