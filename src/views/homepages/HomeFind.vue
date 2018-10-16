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
                    <div class="select-div"></div>
                </div>
            </div>
        </div>

        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="(item,index) in siderList" :key="index"  class="swiper-slide">
                    {{item.name}}
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
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                },
                on: {
                    slideChange: function () {
                        _vm.activeIndex = this.activeIndex
                    },
                }
                // // 如果需要前进后退按钮
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

            })
        },
        watch: {},
        methods: {
            changeSider(index,event){
                console.log(event.target)
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
        top: 110px;
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
        top: 130px;
        z-index: 998;
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
    .is-select .select-div{
        width: 20%;
        height: 8px;
        background-color: white;
        margin: 5px auto 5px;
        border-radius: 20px;
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
