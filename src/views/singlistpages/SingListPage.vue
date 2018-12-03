<template>
    <kajie-scroll>
        <div class="singlist-header pt40 ">
            <div class="dis_table wd90 ">
                <div class="dis_table_row">
                    <div class="dis_table_cell singlist-headdiv">
                        <div class="singlist-coverimg">
                            <img :src="singListData.coverImg" width="100%" height="100%">
                        </div>
                    </div>
                    <div class="dis_table_cell">
                        <div class="textleft mt15 mb40 ft50 text_clamp2">
                            {{singListData.title}}
                        </div>
                        <div class="textleft mb15 ">
                            <span class="singlist-ownerheadimg vertical-middle">
                                <img :src="singListData.ownerImg" width="100%" height="100%">
                            </span>
                            {{singListData.ownerName}}
                            <i class="iconfont icon-you"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="singlist-header-funcbuttons dis_table wd90 mt80">
                <div class="dis_table_cell">
                    <i class="iconfont icon-pinglun"></i><br>
                    1098
                </div>
                <div class="dis_table_cell">
                    <i class="iconfont icon-fenxiang"></i><br>
                    2506
                </div>
                <div class="dis_table_cell">
                    <i class="iconfont icon-xiazai-copy"></i><br>
                    下载
                </div>
                <div class="dis_table_cell">
                    <i class="iconfont icon-duoxuan"></i><br>
                    多选
                </div>
            </div>

            <div class="singlist-float dis_table wd100 mt40">
                <div class="dis_table_cell wd12 pt25 pb25">
                    <i class="iconfont icon-bofang"></i>
                </div>
                <div class="dis_table_cell singlist-float-describe textleft">
                    播放全部
                    <span>(共312首)</span>
                </div>
                <div class="dis_table_cell wd30 collect">

                </div>
            </div>
        </div>
        <div class="singlist-content">

        </div>
    </kajie-scroll>
</template>

<script>
    export default {
        name: 'SingListPage',
        data() {
            return {
                singListData:{
                    id:5,
                    coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
                    title: '初识不知曲中意，再听已是曲中人,超级伤感的歌,超级伤感的歌,超级伤感的歌,超级伤感的歌',
                    playCount:183,
                    ownerName:'卡杰',
                    ownerImg:'http://qiniu.kajie88.com/28913648.jpg',
                }
            };
        },
        created() {

        },
        mounted() {

        },
        watch: {
        },
        methods: {

        },
        computed: {

        },
        components: {
        }
    };
</script>

<style scoped>
    .singlist-headdiv{
        width: 450px;
    }
    .singlist-coverimg {
        width: 400px;
        height: 400px;
        border-radius: 15px;
        overflow: hidden;
    }
    .singlist-ownerheadimg {
        display: inline-block;
        width: 90px;
        height: 90px;
        border-radius: 45px;
        overflow: hidden;
        border: 3px solid #ffffff;
    }
    .singlist-header{
        background-color: #909399;
    }
    .singlist-header .icon-you{
        font-size: 20px;
    }
    .singlist-header-funcbuttons .dis_table_cell{
        font-size: 38px;
        line-height: 65px;
    }
    .singlist-header-funcbuttons .iconfont{
        font-size: 55px;
    }
    .singlist-content{
        height: 1px;
        background-color: #D93F37;
    }
    .singlist-float{
        background-color: white;
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        overflow: hidden;
    }
    .singlist-float .icon-bofang{
        font-size: 70px;
    }
    .singlist-float .singlist-float-describe{
        font-size: 50px;
    }
    .singlist-float .singlist-float-describe span{
        font-size: 40px;
        color: #A3A3A3;
    }
    .singlist-float .collect{
        background-color: #E65042;
    }
</style>
