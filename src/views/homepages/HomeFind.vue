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

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="(item,index) in siderList" :key="index"  class="swiper-slide">
                    <div class="swiper-slide-content">
                        <div v-for="i of 100" :key="i">
                            {{item.name}}{{i}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "HomeFind",
        data() {
            return {
                activeIndex:0,
                siderList:[
                    {name:'个性推荐'},
                    {name:'主播电台'},
                    {name:'主播电台2'},
                ],
                swiperObj:null,
            }
        },
        created() {

        },
        mounted() {
            let _vm = this;
            _vm.swiperObj = new Swiper ('.swiper-container', {
                resistanceRatio : 0,
                iOSEdgeSwipeDetection : true,
                watchSlidesProgress : true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                on: {
                    slideChange: function () {
                        _vm.activeIndex = this.activeIndex
                    },
                    progress: function(progress){
                        // _vm.swiperObj.slides[2].progress;
                        _vm.$nextTick(()=>{
                            document.querySelector('.select-div-inner').style.width=25*(1+Math.abs(this.slides[_vm.activeIndex].progress)*3)+"%";
                            document.querySelector('.select-div').style.transform = "translateX("+(document.querySelector('.swiper-header-tab-item').clientWidth*(this.slides.length-1)*progress)+"px)";
                        });
                    },
                    touchStart: function() {
                        document.querySelector('.select-div').style.transition = '';
                        document.querySelector('.select-div-inner').style.transition = '';
                    },
                    setTransition: function(speed) {
                        document.querySelector('.select-div').style.transition = speed + "ms";
                        document.querySelector('.select-div-inner').style.transition = speed + "ms";
                    },
                }
            })
        },
        watch: {
            activeIndex(){
                // setTimeout(function () {
                    // console.log(document.querySelector('.is-select').offsetLeft)
                    // console.log(document.querySelector('.select-div').offsetLeft)
                    // alert(1)
                    // document.querySelector('.select-div').style.transform = "translateX("+(document.querySelector('.is-select').offsetLeft-document.querySelector('.select-div').offsetLeft)+"px)";
                // },100)

                // this.$nextTick(function () {
                //     document.querySelector('.select-div').style.transform = "translateX("+(document.querySelector('.is-select').offsetLeft-document.querySelector('.select-div').offsetLeft)+"px)";
                //     document.querySelector('.select-div-inner').style.width=45+"%";
                // })
            }
        },
        methods: {
            changeSider(index){
                // console.log(event.target.offsetLeft)
                // console.log(document.querySelector('.select-div').offsetLeft);
                this.swiperObj.slideTo(index, 500, false);
            }
        },
        computed: {

        },
        components: {
            Swiper
        }
    }
</script>

<style scoped>
    .home-main-view{
        height: 100%;
    }
    .swiper-container{
        height: calc(100% - 110px);
        position: relative;
        top: 118px;
    }
    .swiper-wrapper{
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
        border-radius: 20px;
        /*transition:all 0.2s;*/
    }
    .swiper-slide-content{
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling : touch
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
