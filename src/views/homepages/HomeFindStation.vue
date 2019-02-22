<template>
    <div class="info-back">
        <div class="info-back textcenter">
            <div class="swiper-container swiper-station">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
                        <div class="index-banner-img">
                            <img width="100%" height="100%" :src="item.imgUrl">
                            <div class="banner-right-tip bg1">{{item.tag}}</div>
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
                    <i class="iconfont icon-sycolor-"></i>
                </div>
                电台分类
            </div>
            <div>
                <div class="element-circle">
                    <i class="iconfont icon-paixingbang"></i>
                </div>
                电台排行
            </div>
            <div>
                <div class="element-circle">
                    <i class="iconfont icon-huangguan"></i>
                </div>
                付费精品
            </div>
            <div>
                <div class="element-circle">
                    <i class="iconfont icon-weiruanxiaobing"></i>
                </div>
                小冰电台
            </div>
        </div>
        <div id="example"></div>
        <div class="recommend-list">
            <div class="recommend-title-column">
                <div class="recommend-title">
                    今日优选
                    <i class="iconfont icon-you"></i>
                </div>
                <div class="recommend-control">
                    <i class="iconfont icon-16pxhuanyihuan"></i>
                    换一换
                </div>
            </div>

            <div class="recommend-body">
                <div class="recommend-body-item ignore-border dis_table" v-for="(item,key) in recommendSongList" :key="key">
                    <div class="dis_table_cell cell-img">
                        <img :src="item.coverImg" width="100%" height="100%">
                    </div>
                    <div class="dis_table_cell cell-desc">
                        <div class="recommend-list-title">{{item.title}}</div>
                        <div class="recommend-list-play-count">节目:{{item.playCount}}</div>
                        <div class="recommend-list-describe">{{item.describe}}</div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';
    //@ts-ignore
    import Swiper from 'swiper';

    @Component
    export default class HomeFindRecommend extends Vue{
        swiperInfo:any = null;
        bannerList:Array<any> = [
                {imgUrl:'http://qiniu.kajie88.com/station01.jpg',tag:'电台频道'},
                {imgUrl:'http://qiniu.kajie88.com/station02.jpg',tag:'电台频道'},
                {imgUrl:'http://qiniu.kajie88.com/station03.jpg',tag:'电台频道'},
                {imgUrl:'http://qiniu.kajie88.com/station04.jpg',tag:'电台频道'},
                {imgUrl:'http://qiniu.kajie88.com/station05.jpg',tag:'电台频道'},
                ];
        recommendSongList:Array<any> = [
                {coverImg: 'http://qiniu.kajie88.com/recommendSong1.jpg', title: '边走边爱',describe:"边走边爱的描述~~~~",playCount:420},
                {coverImg: 'http://qiniu.kajie88.com/recommendSong2.jpg', title: '小船说',describe:"小船说的描述~~~~",playCount:220},
                {coverImg: 'http://qiniu.kajie88.com/recommendSong3.jpg', title: '午夜电台',describe:"午夜电台的描述~~~~",playCount:100},
                ];
        mounted() {
            let _vm = this;
            _vm.swiperInfo = new Swiper('.swiper-station', {
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
    .recommend-title-column{
        display: flex;
        justify-content:space-between;
        align-items: center;
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

    }
    .recommend-body .cell-desc{
        text-align: left;
        padding-left: 20px;
    }
    .recommend-body .cell-desc .recommend-list-title{
        font-weight: bold;
        font-size: 40px;
        margin: 0 0 25px 0;
    }
    .recommend-body .cell-desc .recommend-list-play-count,.recommend-body .cell-desc .recommend-list-describe{
        color: #676767;
        margin: 5px 0;
    }

    .ignore-border{
        /*border: 1px solid #495060;*/
    }
    .recommend-body-item {
        width: 1090px;
        margin: 10px auto;
        /*border: 1px solid #495060;*/
    }
    .cell-img{
        width: 300px;
        height: 300px;
        border-radius: 20px;
        overflow: hidden;
    }

    .swiper-container{
        /*background-color: #2AB1F0;*/
    }
    .icon-weiruanxiaobing{
        font-size: 90px;
    }
    .recommend-control{
        color: #676767;
    }
    .icon-16pxhuanyihuan{
        font-size: 30px;
    }

</style>
