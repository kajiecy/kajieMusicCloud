<template>
    <div class="div-parent">
        <!--<div ></div>-->
        <kajie-header ref="kajieHeader">
            <div slot="left"  @click="leftOperation($route.meta.icon)">
                <i class="iconfont left-icon" :class="$route.meta.icon"></i>
                <!--<img class="left-img" src="http://p8kfci878.bkt.clouddn.com/left-home.png">-->
            </div>
            <template v-if="$route.name==='find'">
                <div slot="title" class="heard-title" @click="searchMusic()">
                    <!--<mt-field placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>-->
                    <i class="iconfont icon-sousuo1"></i>
                    <span>{{$store.getters.getInputRecommend}}</span>
                </div>
            </template>
            <template v-else>
                <div slot="title" class="heard-title-text">
                    {{$route.meta.title}}
                </div>
            </template>

            <div slot="right">
                <!--<i class="iconfont icon-yinle" style="font-size: 20px"></i>-->
                <!--<img class="right-img" src="http://p8kfci878.bkt.clouddn.com/right-home.png"> -->
                <div class="right-icon textcenter" @click="playIconClick()">
                    <div class="dummydiv dummy1" :class='$store.getters.getPlayerStatus?"dummy1-play":""'></div>
                    <div class="dummydiv dummy2" :class='$store.getters.getPlayerStatus?"dummy2-play":""'></div>
                    <div class="dummydiv dummy3" :class='$store.getters.getPlayerStatus?"dummy3-play":""'></div>
                    <div class="dummydiv dummy4" :class='$store.getters.getPlayerStatus?"dummy4-play":""'></div>
                </div>
            </div>
        </kajie-header>
        <div class="wrapper">
            <div class="wrapper-filler">
                <div class="coverImg" :style="{backgroundImage: parentClass}"></div>
            </div>
            <router-view/>
        </div>
        <kajie-tabbar class="home-tabbar"  v-model="selected">
            <kajie-tabbar-item class="home-tabbar" id="find" @click="changeHomeSelect('find')">
                <i class="iconfont iconfont-tabbar icon-wangyiyunyinlezizhi-copy"></i>
                发现
            </kajie-tabbar-item>
            <kajie-tabbar-item class="home-tabbar" id="video" @click="changeHomeSelect('video')">
                <i class="iconfont iconfont-tabbar icon-shipin4"></i>
                视频
            </kajie-tabbar-item>
            <kajie-tabbar-item class="home-tabbar" id="myPage" @click="changeHomeSelect('myPage')">
                <i class="iconfont iconfont-tabbar icon-yinle2"></i>
                我的
            </kajie-tabbar-item>
            <kajie-tabbar-item class="home-tabbar" id="firends" @click="changeHomeSelect('firends')">
                <i class="iconfont iconfont-tabbar icon-pengyou1"></i>
                朋友
            </kajie-tabbar-item>
            <kajie-tabbar-item class="home-tabbar" id="account" @click="changeHomeSelect('account')">
                <i class="iconfont iconfont-tabbar icon-zhanghao1"></i>
                账号
            </kajie-tabbar-item>
        </kajie-tabbar>
        <div class="zIndexControl1"></div>
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
            };
        },
        created() {

        },
        mounted() {
            this.selected = this.$route.name;
        },
        watch: {
            selected(nvalue){
                // alert("selected 改变"+nvalue);
                // this.$store.commit("setHeaderStatus",false);
                // this.$router.push({'name':nvalue});
            }
        },
        methods: {
            playIconClick(){
                this.$store.commit('setPlayerStatus',!this.$store.getters.getPlayerStatus);
            },
            searchMusic(){
                this.$store.commit('setHeaderStatus',true)
            },
            changeHomeSelect(selectValue){
                this.$router.push({'name':selectValue});
            },
            leftOperation(routeIcon){
                if(routeIcon==='icon-zuo'){
                    this.$router.go(-1);
                }
            }
        },
        computed: {
            parentClass(){
                if(this.$store.getters.getBodyBackImg!==''){
                    return "url("+this.$store.getters.getBodyBackImg+")";
                }
                return '';
            }
        },
        components: {
            KajieHeader,
            KajieTabbar,
            KajieTabbarItem
        },
        beforeRouteUpdate (to, from, next) {
            // this.selected = to.name;
            next();
        }
    };
</script>
<style>
    .heard-title{
        font-size: 48px;
        line-height: 90px;
        height: 90px;
        /*border-radius: 45px;*/
        /*background-color: #E0635C;*/
        /*border: 1px solid #DC524B;*/
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
    .coverImg{
        position: fixed;
        top: -50px;
        width: 120%;
        height: 50vh;
        left: -10%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        -webkit-filter: blur(40px);
        -moz-filter: blur(40px);
        -o-filter: blur(40px);
        -ms-filter: blur(40px);
        filter: blur(40px);
        z-index: -1;
        transition: all 1s;
    }
    .wrapper{
        height: calc(100vh - 170px);
        margin-bottom: 170px;
        overflow: scroll;
    }
    .wrapper-filler{
        width: 100%;
        height: 130px;
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
    .zIndexControl1{
        z-index: 1;
    }
    .home-tabbar{
        height: 170px;
        color: #676767;
        border-top: 0.5px solid #EEEDED;
        background-color: #F6F5F5;
        z-index: 2;
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
    .heard-title-text{
        color: white;
        font-size: 45px;
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
