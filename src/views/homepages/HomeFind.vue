<template>
        <!--<tab :line-width=2 active-color='#fc378c' v-model="index">-->
            <!--<tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>-->
        <!--</tab>-->
        <!--<swiper v-model="index" :show-dots="false">-->
            <!--<swiper-item v-for="(item, index) in list2" :key="index">-->
                <!--<div class="tab-swiper vux-center">{{item}} Container</div>-->
            <!--</swiper-item>-->
        <!--</swiper>-->
    <div class="home-main-view ">
        <div class="swiper-header-tab-out ">
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
                    <div class="swiper-slide-content">
                        <home-find-recommend></home-find-recommend>
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
    import HomeFindRecommend from './HomeFindRecommend.vue';
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
        },
        watch: {
        },
        methods: {
            changeSider(index){
                this.swiperMain.slideTo(index, 500, false);
            },
        },
        computed: {

        },
        components: {
            Swiper,
            HomeFindRecommend
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
</style>
