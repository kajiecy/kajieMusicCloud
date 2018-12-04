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
                    <i class="iconfont icon-tianjiajiahaowubiankuang"></i>
                    收藏({{singListData.collectCount}}万)
                </div>
            </div>
        </div>
        <div class="singlist-content dis_table wd100">
            <div v-for="(item,index) in singListData.singListArray" class="dis_table_row">
                <div class="dis_table_cell wd12">{{index+1}}</div>
                <div class="dis_table_cell">
                    <div class="singlist-content-singname">
                        {{item.name}}
                    </div>
                    <div class="singlist-content-describe">
                        <template v-if="item.isSq">
                            <i class="iconfont icon-sq"></i>
                        </template>
                        {{item.singerName}} - {{item.specialName||item.name}}
                    </div>
                </div>
                <div class="dis_table_cell wd30 textright pr20">
                    <i v-if="item.hasMv" class="iconfont icon-mv"></i>
                    <i class="iconfont icon-shenglvehao"></i>
                </div>
            </div>
        </div>
    </kajie-scroll>
</template>

<script>
    export default {
        name: 'SingListPage',
        data() {
            return {
                singListData: {
                    id: 5,
                    coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
                    title: '初识不知曲中意，再听已是曲中人,超级伤感的歌,超级伤感的歌,超级伤感的歌,超级伤感的歌',
                    playCount: 183,
                    ownerName: '卡杰',
                    ownerImg: 'http://qiniu.kajie88.com/28913648.jpg',
                    collectCount: 36.8,
                    singListArray: [
                        {name:'爱如潮水',singerName:'张信哲',specialName:'张信哲精选',hasMv:true,isSq:true},
                        {name:'无尽的爱',singerName:'关淑怡',specialName:'32首选',hasMv:false,isSq:false},
                        {name:'大约在冬季',singerName:'齐秦',specialName:'摘金宝典',hasMv:true,isSq:true},
                        {name:'别话',singerName:'张国荣',specialName:'Ultimate',hasMv:true,isSq:true},
                        {name:'千千阙歌',singerName:'陈慧娴',hasMv:false,isSq:false},
                        {name:'风中的承诺',singerName:'李彧',specialName:'情歌传唱天后',hasMv:false,isSq:false},

                        {name:'爱如潮水',singerName:'张信哲',specialName:'张信哲精选',hasMv:true,isSq:false},
                        {name:'无尽的爱',singerName:'关淑怡',specialName:'32首选',hasMv:false,isSq:false},
                        {name:'大约在冬季',singerName:'齐秦',specialName:'摘金宝典',hasMv:true,isSq:true},
                        {name:'别话',singerName:'张国荣',specialName:'Ultimate',hasMv:true,isSq:false},
                        {name:'千千阙歌',singerName:'陈慧娴',hasMv:false,isSq:false},
                        {name:'风中的承诺',singerName:'李彧',specialName:'情歌传唱天后',hasMv:false,isSq:false},

                        {name:'爱如潮水',singerName:'张信哲',specialName:'张信哲精选',hasMv:true,isSq:false},
                        {name:'无尽的爱',singerName:'关淑怡',specialName:'32首选',hasMv:false,isSq:false},
                        {name:'大约在冬季',singerName:'齐秦',specialName:'摘金宝典',hasMv:false,isSq:true},
                        {name:'别话',singerName:'张国荣',specialName:'Ultimate',hasMv:false,isSq:false},
                        {name:'千千阙歌',singerName:'陈慧娴',hasMv:false,isSq:false},
                        {name:'风中的承诺',singerName:'李彧',specialName:'情歌传唱天后',hasMv:false,isSq:false},
                    ]
                }
            };
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .singlist-headdiv {
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

    .singlist-header {
        background-color: #909399;
    }

    .singlist-header .icon-you {
        font-size: 20px;
    }

    .singlist-header-funcbuttons .dis_table_cell {
        font-size: 38px;
        line-height: 65px;
    }

    .singlist-header-funcbuttons .iconfont {
        font-size: 55px;
    }

    .singlist-float {
        border-top-left-radius: 40px;
        border-top-right-radius: 40px;
        overflow: hidden;
        background-color: #FCFCFC;
    }

    .singlist-float .icon-bofang {
        font-size: 70px;
    }

    .singlist-float .singlist-float-describe {
        font-size: 50px;
    }

    .singlist-float .singlist-float-describe span {
        font-size: 40px;
        color: #A3A3A3;
    }

    .singlist-float .collect {
        background-color: #E65042;
        color: white;
        font-size: 40px;
    }

    .singlist-float .collect .icon-tianjiajiahaowubiankuang {
        font-size: 40px;
    }

    .singlist-content {
        background-color: #FCFCFC;
    }
    .singlist-content .dis_table_row .dis_table_cell:nth-child(1){
        color: #707070;
        font-size: 48px;
    }
    .singlist-content .dis_table_row .dis_table_cell:nth-child(2){
        text-align: left;
        padding: 25px 0;
    }
    .singlist-content .dis_table_row .dis_table_cell:nth-child(2),.singlist-content .dis_table_row .dis_table_cell:nth-child(3){
        border-top: 1px solid #e1e1e1;
    }
    .singlist-content .dis_table_row .dis_table_cell:nth-child(2) .singlist-content-singname{
        font-size: 48px;
        margin-bottom: 10px;
    }
    .singlist-content .dis_table_row .dis_table_cell:nth-child(2) .singlist-content-describe{
        color: #868686;
        vertical-align: middle;
    }
    .singlist-content .dis_table_row .dis_table_cell:nth-child(3) .iconfont{
        font-size: 70px;
        color: #868686;
        margin: 0 20px;
    }
    .icon-sq{
        font-size: 55px;
        font-weight: bold;
        color: #F36B3A;
    }
</style>
