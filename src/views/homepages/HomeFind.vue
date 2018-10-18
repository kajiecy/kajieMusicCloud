<template>
        <!--<tab :line-width=2 active-color='#fc378c' v-model="index">-->
            <!--<tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>-->
        <!--</tab>-->
        <!--<swiper v-model="index" :show-dots="false">-->
            <!--<swiper-item v-for="(item, index) in list2" :key="index">-->
                <!--<div class="tab-swiper vux-center">{{item}} Container</div>-->
            <!--</swiper-item>-->
        <!--</swiper>-->
    <div class="home-main-view">
        <div class="swiper-header-tab-out">
            <div class="swiper-header-tab wd80 marginAuto">
                <div v-for="(item,index) in siderList" :key="index" :class="{'is-select':activeIndex===index}" @click="changeSider(index,$event)" class="swiper-header-tab-item textcenter">
                    {{item.name}}
                    <template v-if="index===0">
                        <div class="select-div">
                            <div class="select-div-inner"></div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="swiper-container swiper-main">
            <div class="swiper-wrapper wrapper-main">
                <div class="swiper-slide">
                    <div class="swiper-slide-content textcenter">
                        <div class="info-back">

                            <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" ref="loadmore" class="myloaddiv">
                                <div slot="top" class="mint-loadmore-top loadmore-loading" v-show="translate>3">
                                    {{topStatus}}{{translate}}
                                </div>
                                <div class="info-back">
                                    <div class="swiper-container swiper-info">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="index-banner-img">
                                                    <img width="100%" height="100%" src="http://qiniu.kajie88.com/index-banner.jpg">
                                                    <div class="banner-right-tip bg1">广告1</div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="index-banner-img">
                                                    <img width="100%" height="100%" src="http://qiniu.kajie88.com/index-banner2.jpg">
                                                    <div class="banner-right-tip bg2">VIP专享2</div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="index-banner-img">
                                                    <img width="100%" height="100%" src="http://qiniu.kajie88.com/index-banner3.jpg">
                                                    <div class="banner-right-tip bg3">新歌首发3</div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Add Pagination -->
                                        <div class="swiper-pagination"></div>
                                    </div>
                                </div>
                                <div class="fillheight"></div>
                                <div class="element-div">
                                    <div>
                                        <div class="element-circle">
                                            <i class="iconfont icon-diantai1"></i>
                                        </div>
                                        私人FM
                                    </div>
                                    <div>
                                        <div class="element-circle">
                                            <i class="iconfont icon-rili1"></i>
                                        </div>
                                        每日推荐
                                    </div>
                                    <div>
                                        <div class="element-circle">
                                            <i class="iconfont icon-gedanshoulu"></i>
                                        </div>
                                        歌单
                                    </div>
                                    <div>
                                        <div class="element-circle">
                                            <i class="iconfont icon-paihangbang"></i>
                                        </div>
                                        排行榜
                                    </div>
                                </div>
                            </mt-loadmore>

                        </div>

                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide-content">
                        <img class="" src="http://p8kfci878.bkt.clouddn.com/right-home.png">
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: 'HomeFind',
        data() {
            return {
                activeIndex:0,
                siderList:[
                    {name:'个性推荐'},
                    {name:'主播电台'}
                ],
                swiperMain:null,
                swiperInfo:null,

                topStatus: '',//下拉刷新页面的状态
                translate: 0,//下拉距离
            };
        },
        created() {

        },
        mounted() {
            let _vm = this;

            _vm.swiperMain = new Swiper('.swiper-main', {
                resistanceRatio : 0,//滑动到尽头时禁止在滑动
                iOSEdgeSwipeDetection : true,
                watchSlidesProgress : true,
                on: {
                    slideChange: function () {
                        _vm.activeIndex = this.activeIndex;
                    },
                    progress: function(progress){
                        // _vm.swiperMain.slides[2].progress;
                        _vm.$nextTick(()=>{
                            document.querySelector('.select-div-inner').style.width=25*(1+Math.abs(this.slides[_vm.activeIndex].progress)*3)+'%';
                            document.querySelector('.select-div').style.transform = 'translateX('+document.querySelector('.swiper-header-tab-item').clientWidth*(this.slides.length-1)*progress+'px)';
                        });
                    },
                    touchStart: function() {
                        document.querySelector('.select-div').style.transition = '';
                        document.querySelector('.select-div-inner').style.transition = '';
                    },
                    setTransition: function(speed) {
                        document.querySelector('.select-div').style.transition = speed + 'ms';
                        document.querySelector('.select-div-inner').style.transition = speed + 'ms';
                    }
                }
            });
            _vm.swiperInfo = new Swiper('.swiper-info', {
                iOSEdgeSwipeDetection : true,
                spaceBetween: 5,
                centeredSlides: true,
                loop : true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        },
        watch: {
        },
        methods: {
            changeSider(index){
                this.swiperMain.slideTo(index, 500, false);
            },
            /**
             *   top-status-change 每当 状态改变 时触发
             *   已知状态 pull 默认状态，drop 释放后执行 top-method， loading drop状态后待没有执行onTopLoaded()方法时的状态。
             */
            handleTopChange(status) {
                this.moveTranslate = 1;
                this.topStatus = status;
            },
            // @translate-change 当我执行 滑动操作时 总会触发此事件
            translateChange(translate) {
                const translateNum = +translate;
                this.translate = translateNum.toFixed(2);
            },
            // :top-method 当我下拉足够的 距离时触发此方法 请求新信息 默认70
            loadTop() {
                setTimeout(() => {
                    console.log("模拟一次request请求，延迟1s")
                    this.translate = 0;
                    this.$refs.loadmore.onTopLoaded();
                }, 500);
            }
        },
        computed: {

        },
        components: {
            Swiper
        }
    };
</script>

<style scoped>
    .home-main-view{
        height: 100%;
    }
    .swiper-main{
        height: calc(100% - 110px);
        position: relative;
        top: 110px;
    }
    .wrapper-main{
        height: 100%;
        width: 100%;
    }
    .swiper-header-tab-out{
        background-color: #D93F37;
        padding-bottom: 10px;
        padding-top: 20px;

        position: fixed;
        top: 129px;
        z-index: 1000;
        width: 100%;
    }
    .swiper-header-tab{
        display: flex;
    }
    .swiper-header-tab-item{
        flex: 1 1;
        font-size: 48px;
        font-weight: 100;
        color: white;
    }
    .is-select{
        /*color: #303133;*/
    }
    .select-div{
        width: 100%;
        /*transition:all 1s;*/
    }
    .select-div-inner{
        width: 25%;
        height: 8px;
        background-color: white;
        margin: 5px auto 5px;
        border-radius: 100px;
        /*transition:all 0.2s;*/
    }
    .swiper-slide-content{
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling : touch
    }
    .float-test{
        position: relative;
        left: 20px;
    }
    .mint-loadmore{
        /*header:130px;footer:170px;tab:110px*/
        min-height: calc(100vh - 110px - 130px - 170px);;
    }
    .myloaddiv{

    }
    .swiper-info{
        /*background-color: #67BB1E;*/
        width: 100%;
        height: 425px;
        margin: 0 auto;
        padding: 10px 0;
    }
    .index-banner-img{
        width: 1089px;
        height: 425px;
        display: inline-block;
        border-radius: 15px;
        overflow: hidden;
    }
    .swiper-pagination{
        /*background-color: #D93F37;*/
    }
    .banner-right-tip{
        position: relative;
        float: right;
        height: 65px;
        top: -65px;
        color: white;
        padding: 5px 10px 5px 20px;
        border-top-left-radius: 15px;
    }
    .info-back{
        background-color: #D93F37;
        height: 320px;
    }
    .fillheight{
        height:125px;
    }
    .loadmore-loading{
        /*background-color: #2AB1F0;*/
    }

    .element-div{
        display: flex;
        justify-content: space-around;
        margin: 20px 0;
    }
    .element-circle{
        width: 140px;
        height: 140px;
        background-color: #D93F37;
        border-radius: 70px;
        margin-bottom: 10px;
        display: flex;
        justify-content:center;
        align-items:center;
        color: white;

    }
    .iconfont{
        font-size: 65px;
    }
    .icon-leguansirendiantai{
        font-size: 100px;
    }
    /*.vux-swiper-item{*/
        /*height: 100%;*/
    /*}*/
    /*.swiper-container {*/
        /*width: 500px;*/
        /*height: 300px;*/
        /*margin: 20px auto;*/
    /*}*/
</style>
