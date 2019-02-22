<template>
    <div class="info-back">
        <mt-loadmore
                ref="loadmore"
                class="myloaddiv"
                :topDistance="60"
                :maxDistance="90"
                :top-method="loadTop"
                @translate-change="translateChange"
                @top-status-change="handleTopChange"
        >
            <div slot="top" class="mint-loadmore-top loadmore-loading textcenter" v-show="translate>3">
                {{topStatus}}{{translate}}
            </div>
            <div class="info-back textcenter">
                <div class="swiper-container swiper-info">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="index-banner-img">
                                <img width="100%" height="100%" src="http://qiniu.kajie88.com/index-banner.jpg">
                                <div class="banner-right-tip bg1">广告</div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="index-banner-img">
                                <img width="100%" height="100%" src="http://qiniu.kajie88.com/index-banner2.jpg">
                                <div class="banner-right-tip bg2">VIP专享</div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="index-banner-img">
                                <img width="100%" height="100%" src="http://qiniu.kajie88.com/index-banner3.jpg">
                                <div class="banner-right-tip bg3">新歌首发</div>
                            </div>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="fillheight"></div>
            <div class="element-div textcenter">
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
            <div id="example"></div>
            <div class="recommend-list">
                <div class="recommend-title">
                    推荐歌单
                    <i class="iconfont icon-you"></i>
                </div>
                <div class="recommend-body">
                    <div class="recommend-body-item" v-for="(item,key) in recommendSongList" :key="key" @click="push2SingList(item.id)">
                        <div class="recommend-p">
                        </div>
                        <div class="recommend-body-item-coverimg">
                            <img :src="item.coverImg" width="100%" height="100%">
                        </div>
                        <div class="recommend-body-item-title text_clamp2">
                            {{item.title}}
                        </div>
                    </div>
                </div>
            </div>

            <div class="recommend-list">
                <div class="recommend-title">
                    最新歌单
                    <i class="iconfont icon-you"></i>
                </div>
                <div class="recommend-body">
                    <div class="recommend-body-item" v-for="(item,key) in newSongList" :key="key">
                        <div class="recommend-body-item-coverimg">
                            <img :src="item.coverImg" width="100%" height="100%">
                        </div>
                        <div class="recommend-body-item-title text_clamp2">
                            {{item.title}}
                        </div>
                    </div>
                </div>
            </div>
        </mt-loadmore>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';
    //@ts-ignore
    import Swiper from 'swiper';

    @Component
    export default class HomeFindRecommend extends Vue{
        swiperInfo:any = null;
        topStatus:string = '';//下拉刷新页面的状态
        translate:number = 0;//下拉距离
        recommendSongList:Array<any> = [
                {id:1,coverImg: 'http://qiniu.kajie88.com/recommendSong1.jpg', title: '你穿秋裤了么？',playCount:420},
                {id:2,coverImg: 'http://qiniu.kajie88.com/recommendSong2.jpg', title: '治愈男声//回眸之时，只望遇见你',playCount:220},
                {id:3,coverImg: 'http://qiniu.kajie88.com/recommendSong3.jpg', title: '韩剧OST | 收集歌声中的浪漫碎片',playCount:100},
                {id:4,coverImg: 'http://qiniu.kajie88.com/recommendSong4.jpg', title: '翻唱简史：欧美六百首',playCount:120},
                {id:5,coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg', title: '初识不知曲中意，再听已是曲中人,超级伤感的歌',playCount:183},
                {id:6,coverImg: 'http://qiniu.kajie88.com/recommendSong6.jpg', title: '多热烈的白羊，热烈的抽象。',playCount:121},
                ];
        newSongList:Array<any> = [
                {id:7,coverImg: 'http://qiniu.kajie88.com/recommendSong1.jpg', title: '你穿秋裤了么？',playCount:5},
                {id:8,coverImg: 'http://qiniu.kajie88.com/recommendSong2.jpg', title: '治愈男声//回眸之时，只望遇见你',playCount:1},
                {id:9,coverImg: 'http://qiniu.kajie88.com/recommendSong3.jpg', title: '韩剧OST | 收集歌声中的浪漫碎片',playCount:23},
                {id:10,coverImg: 'http://qiniu.kajie88.com/recommendSong4.jpg', title: '翻唱简史：欧美六百首',playCount:4},
                {id:11,coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg', title: '初识不知曲中意，再听已是曲中人,超级伤感的歌',playCount:67},
                {id:12,coverImg: 'http://qiniu.kajie88.com/recommendSong6.jpg', title: '多热烈的白羊，热烈的抽象。',playCount:11},
                ];

        mounted() {
            let _vm = this;
            _vm.swiperInfo = new Swiper('.swiper-info', {
                iOSEdgeSwipeDetection: true,
                spaceBetween: 5,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                },
            });
        }
        /**
         *   top-status-change 每当 状态改变 时触发
         *   已知状态 pull 默认状态，drop 释放后执行 top-method， loading drop状态后待没有执行onTopLoaded()方法时的状态。
         */
        handleTopChange(status:string) {
            //@ts-ignore
            this.moveTranslate = 1;
            this.topStatus = status;
        };
        // @translate-change 当我执行 滑动操作时 总会触发此事件
        translateChange(translate:number) {
            const translateNum = +translate;
            this.translate = parseFloat(translateNum.toFixed(2));
        };
        // :top-method 当我下拉足够的 距离时触发此方法 请求新信息 默认70
        loadTop() {
            setTimeout(() => {
                console.log("模拟一次request请求，延迟1s")
                this.translate = 0;
                //@ts-ignore
                this.$refs.loadmore.onTopLoaded();
            }, 500);
        };
        push2SingList(singListId:string|number){
            console.log(singListId)
            this.$router.push({name:'singListPage',query:{id: "111"}})
        }

    }
</script>

<style scoped>
    .mint-loadmore {
        /*header:130px;footer:170px;tab:110px*/
        min-height: calc(100vh - 110px - 130px - 170px);
    }
    .myloaddiv {

    }
    .swiper-info {
        /*background-color: #67BB1E;*/
        width: 100%;
        height: 425px;
        margin: 0 auto;
        padding: 10px 0;
    }

    .index-banner-img {
        width: 95%;
        height: 425px;
        display: inline-block;
        border-radius: 15px;
        overflow: hidden;
    }

    .swiper-pagination {
        /*background-color: #D93F37;*/
    }

    .banner-right-tip {
        position: relative;
        float: right;
        height: 65px;
        top: -65px;
        color: white;
        padding: 5px 10px 5px 20px;
        border-top-left-radius: 15px;
    }

    .info-back {
        background-color: #D93F37;
        height: 320px;
    }

    .fillheight {
        height: 125px;
    }

    .loadmore-loading {
        /*background-color: #2AB1F0;*/
    }

    .element-div {
        display: flex;
        justify-content: space-around;
        padding: 35px 0 35px 0;
    }

    .element-circle {
        width: 140px;
        height: 140px;
        background-color: #D93F37;
        border-radius: 70px;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

    }

    .iconfont {
        font-size: 65px;
    }

    .icon-you {
        font-size: 30px;
        line-height: 40px;
        display: inline-block;
        margin-left: 10px;
    }

    .recommend-list {
        width: 1090px;
        margin: 0 auto 80px;
    }

    .recommend-title {
        display: flex;
        align-items: center;
        vertical-align: middle;
        font-size: 50px;
        margin: 35px 0 30px;
        padding-left: 30px;
        font-weight: bold;
    }

    .recommend-body {
        display: flex;
        flex-wrap: wrap;
    }

    .recommend-body-item {
        display: inline-block;
        width: 343.3px;
        margin: 10px 10px;
    }

    .recommend-body-item-coverimg {
        width: 343.3px;
        height: 343.3px;
        border-radius: 15px;
        overflow: hidden;
    }
    .recommend-body-item-title{
        padding-top: 10px;
    }
    .swiper-container{
        /*background-color: #2AB1F0;*/
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
