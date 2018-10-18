<template>
    <div class="div-parent">
        <kajie-header :fixed="true">
            <div slot="left">
                <i class="iconfont icon-maikefeng left-icon"></i>
                <!--<img class="left-img" src="http://p8kfci878.bkt.clouddn.com/left-home.png">-->

            </div>
            <div slot="title" class="heard-title">
                <!--<mt-field placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>-->
                <i class="iconfont icon-sousuo1"></i>
                <span>你瞒我瞒 - 陈伯宇</span>
            </div>
            <div slot="right">
                <!--<i class="iconfont icon-yinle" style="font-size: 20px"></i>-->
                <!--<img class="right-img" src="http://p8kfci878.bkt.clouddn.com/right-home.png">-->
                <div class="right-icon textcenter" @click="isPlay=!isPlay">
                    <div class="dummydiv dummy1" :class='isPlay?"dummy1-play":""'></div>
                    <div class="dummydiv dummy2" :class='isPlay?"dummy2-play":""'></div>
                    <div class="dummydiv dummy3" :class='isPlay?"dummy3-play":""'></div>
                    <div class="dummydiv dummy4" :class='isPlay?"dummy4-play":""'></div>
                </div>

            </div>
        </kajie-header>
        <div class="wrapper">
            <router-view />
        </div>

        <kajie-tabbar class="home-tabbar"  v-model="selected">
            <kajie-tabbar-item class="home-tabbar" id="find">
                <i class="iconfont iconfont-tabbar icon-wangyiyunyinlezizhi-copy"></i>
                发现
            </kajie-tabbar-item>
            <kajie-tabbar-item class="home-tabbar" id="video">
                <i class="iconfont iconfont-tabbar icon-shipin4"></i>
                视频
            </kajie-tabbar-item>
            <kajie-tabbar-item class="home-tabbar" id="myPage">
                <i class="iconfont iconfont-tabbar icon-yinle2"></i>
                我的
            </kajie-tabbar-item>
            <kajie-tabbar-item class="home-tabbar" id="firends">
                <i class="iconfont iconfont-tabbar icon-pengyou1"></i>
                朋友
            </kajie-tabbar-item>
            <kajie-tabbar-item class="home-tabbar" id="account">
                <i class="iconfont iconfont-tabbar icon-zhanghao1"></i>
                账号
            </kajie-tabbar-item>
        </kajie-tabbar>

    </div>
</template>


<script>
    import KajieHeader from '@/components/KajieHeader.vue';
    import KajieTabbar from '@/components/KajieTabbar.vue';
    import KajieTabbarItem from '@/components/KajieTabbarItem.vue';

    export default {
        data() {
            return {
                selected: 'find',
                isPlay:false,
            };
        },
        created() {

        },
        mounted() {
            this.selected = this.$route.name;
        },
        watch: {
            selected(nvalue){
                this.$router.push({'name':nvalue});
            }
        },
        methods: {},
        computed: {},
        components: {
            KajieHeader,
            KajieTabbar,
            KajieTabbarItem
        },
        beforeRouteUpdate (to, from, next) {
            this.selected = to.name;
            next();
        }
    };
</script>
<style>
    .heard-title{
        font-size: 48px;
        line-height: 90px;
        height: 90px;
        border-radius: 45px;
        background-color: #E0635C;
        border: 1px solid #DC524B;
        color: #EEAFA9;
    }
    .icon-sousuo1{
        font-size: 40px;
        line-height: 90px;
        display: inline-block;
        height: 90px;
        margin-right: 20px;
    }
    .heard-title span{
        font-size: 40px;
        line-height: 90px;
        display: inline-block;
        height: 90px;
    }
    .div-parent{
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    .wrapper{
        height: calc(100vh - 130px - 170px);
        margin-top: 130px;
        margin-bottom: 170px;
        overflow: scroll;
    }
    .left-img{
        width: 57px;
        height: 77px;
        display: inline-block;
        position: relative;
        left: -20px;
    }
    .right-img{
        width: 71px;
        height: 71px;
        display: inline-block;
        position: relative;
        right: -20px;
    }
    .home-tabbar{
        height: 170px;
        color: #676767;
        border-top: 0.5px solid #EEEDED;
        background-color: #F6F5F5;
    }
    .iconfont-tabbar{
        display: block;
        font-size: 70px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .left-icon{
        font-size: 75px;
        color: white;
        margin-top: 10px;
    }
    .right-icon{
        height: 70px;
        display: flex;
        align-items:flex-end;
        justify-content:center;
    }
    .dummydiv{
        height: 70px;
        width: 8px;
        background-color: #ffffff;
        border: 0 solid white;
        margin: 0 5px;
        border-radius: 10px;
    }
    .dummy1{
        height: 40px;
    }
    .dummy2{
        height: 70px;
    }
    .dummy3{
        height: 50px;
    }
    .dummy4{
        height: 60px;
    }
    .dummy1-play{
        animation:dum1Ani1 1s linear infinite;
        -webkit-animation:dum1Ani1 1s linear infinite; /*Safari and Chrome*/
    }
    .dummy2-play{
        animation:dum1Ani2 1s linear infinite;
        -webkit-animation:dum1Ani2 1s linear infinite; /*Safari and Chrome*/
    }
    .dummy3-play{
        animation:dum1Ani3 1s linear infinite;
        -webkit-animation:dum1Ani3 1s linear infinite; /*Safari and Chrome*/
    }
    .dummy4-play{
        animation:dum1Ani4 1s linear infinite;
        -webkit-animation:dum1Ani4 1s linear infinite; /*Safari and Chrome*/
    }
    @keyframes dum1Ani1
    {
        from {height:40px;}
        33.3% { height: 60px;}
        83.3% { height: 30px;}
        to {height:40px;}
    }
    @-webkit-keyframes dum1Ani1 /*Safari and Chrome*/
    {
        from {height:40px;}
        33.3% { height: 60px;}
        83.3% { height: 30px;}
        to {height:40px;}
    }



    @keyframes dum1Ani2
    {
        from {height:60px;}
        33.3% { height: 40px;}
        83.3% { height: 70px;}
        to {height:60px;}
    }
    @-webkit-keyframes dum1Ani2 /*Safari and Chrome*/
    {
        from {height:60px;}
        33.3% { height: 40px;}
        83.3% { height: 70px;}
        to {height:60px;}
    }

    @keyframes dum1Ani3
    {
        from {height:50px;}
        33.3% { height: 70px;}
        83.3% { height: 40px;}
        to {height:50px;}
    }
    @-webkit-keyframes dum1Ani3 /*Safari and Chrome*/
    {
        from {height:50px;}
        33.3% { height: 70px;}
        83.3% { height: 40px;}
        to {height:50px;}
    }

    @keyframes dum1Ani4
    {
        from {height:50px;}
        33.3% { height: 30px;}
        83.3% { height: 60px;}
        to {height:50px;}
    }
    @-webkit-keyframes dum1Ani4 /*Safari and Chrome*/
    {
        from {height:50px;}
        33.3% { height: 30px;}
        83.3% { height: 60px;}
        to {height:50px;}
    }
</style>
