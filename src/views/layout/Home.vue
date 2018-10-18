<template>
    <div class="div-parent">
        <kajie-header :fixed="true">
            <div slot="left">
                <!--<i class="iconfont icon-microphoneicon" style="font-size: 20px"></i>-->
                <img class="left-img" src="http://p8kfci878.bkt.clouddn.com/left-home.png">
            </div>
            <div slot="title" class="heard-title">
                <!--<mt-field placeholder="请输入用户名" :attr="{ maxlength: 10 }"></mt-field>-->
                <i class="iconfont icon-sousuo1"></i>
                <span>你瞒我瞒 - 陈伯宇</span>
            </div>
            <div slot="right">
                <!--<i class="iconfont icon-yinle" style="font-size: 20px"></i>-->
                <img class="right-img" src="http://p8kfci878.bkt.clouddn.com/right-home.png">
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
                selected: 'find'
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
</style>
