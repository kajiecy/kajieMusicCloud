<!--显示歌单列表的组件-->
<template>
    <div class="singlist-body">
        <kajie-scroll>
            <mt-loadmore
                    class="singlist-loadmore"
                    :top-method="loadTop"
                    :topDistance="25"
                    @translate-change="translateChange"
                    @top-status-change="handleTopChange"
                    ref="loadmore">

                <div class="singlist-loadmore-outer" style="">
                    <!--显示歌单内搜索的input框(loadmore下拉后才会显示此div)-->
                    <div slot="top" class="mint-loadmore-top">
                        <div class="div-searchinput">
                            <kajie-input-ellipse></kajie-input-ellipse>
                        </div>
                    </div>
                    <div class="singlist-header-out">
                        <div class="singlist-header pt40">
                            <!--歌单的封面、名称及拥有者 start-->
                            <div class="dis_table wd90 ">
                                <div class="dis_table_row">
                                    <div class="dis_table_cell singlist-headdiv">
                                        <div class="singlist-coverimg">
                                            <img id="singlistcover" :src="singListData.coverImgBase64" width="100%"
                                                 height="100%">
                                        </div>
                                    </div>
                                    <div class="dis_table_cell">
                                        <div class="singlist-title textleft mt15 mb40 ft50 text_clamp2">
                                            {{singListData.title}}
                                        </div>
                                        <div class="singlist-owner textleft mb15 ">
                                            <span class="singlist-ownerheadimg vertical-middle">
                                                <img :src="singListData.ownerImg" width="100%" height="100%">
                                            </span>
                                            <span class="singlist-owner-text">
                                                {{singListData.ownerName}}
                                            </span>
                                            <i class="iconfont icon-you"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--歌单的封面、名称及拥有者 end-->
                            <!--歌单的互动按钮 start-->
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
                            <!--歌单的互动按钮 end-->
                            <!--操作组 (因为需要适配ios浏览器 下方存在一样的copy div) start-->
                            <div class="singlist-float dis_table wd100 mt40" id="singlist-header">
                                <div class="dis_table_cell wd12 pt30 pb30">
                                    <i class="iconfont icon-bofang"></i>
                                </div>
                                <div class="dis_table_cell singlist-float-describe textleft">
                                    播放全部
                                    <span>(共{{singListData.singListArray==null?0:singListData.singListArray.length}}首)</span>
                                </div>
                                <div class="dis_table_cell wd30 collect">
                                    <i class="iconfont icon-tianjiajiahaowubiankuang"></i>
                                    收藏({{singListData.collectCount}}万)
                                </div>
                            </div>
                            <!--操作组 start-->
                        </div>
                    </div>
                </div>
                <div class="singlist-content dis_table wd100">
                    <!--歌单中歌曲信息展示 start-->
                    <div v-for="(item,index) in singListData.singListArray" :key="index" class="dis_table_row"
                         @click="pushToPlayer(item.id)">
                        <div class="dis_table_cell wd12">{{index+1}}</div>
                        <div class="dis_table_cell">
                            <div class="singlist-content-singname text_clamp1">
                                {{item.name}}
                            </div>
                            <div class="singlist-content-describe text_clamp1">
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
                    <!--歌单中歌曲信息展示 end-->
                </div>
            </mt-loadmore>
        </kajie-scroll>
        <!--悬浮的替身div start-->
        <div class="singlist-header singlist-header-fixed " id="singlist-header-float" v-show="headerFix"
             :class="headerFix?'head-fixed':''">
            <div class="background-canvas-out">
                <div class="gray-mark-"></div>
                <canvas id="background-canvas-"></canvas>
            </div>
            <div class="singlist-float dis_table wd100 ">
                <div class="dis_table_cell wd12 pt30 pb30">
                    <i class="iconfont icon-bofang"></i>
                </div>
                <div class="dis_table_cell singlist-float-describe textleft">
                    播放全部
                    <span>(共{{singListData.singListArray==null?0:singListData.singListArray.length}}首)</span>
                </div>
                <div class="dis_table_cell wd30 collect">
                    <i class="iconfont icon-tianjiajiahaowubiankuang"></i>
                    收藏({{singListData.collectCount}}万)
                </div>
            </div>
        </div>
        <!--悬浮的替身div end-->
        <img id="canvas-copy" :src="singListData.coverImgBase64">
        <!--灰色遮罩层  应用还原效果-->
        <div class="gray-mark" id="gray-mark" :style="{ 'transform': transform }"></div>
        <!--高斯模糊后的背景-->
        <canvas id="background-canvas" :style="{ 'transform': transform }"></canvas>
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue, Model, Watch, Inject} from "vue-property-decorator";

    import KajieInputEllipse from "@/components/KajieInputEllipse.vue";

    @Component({
        components: {
            KajieInputEllipse
        }
    })
    export default class SingListPage extends Vue {
        headerHeight: number = 0;// 应用header的高度 由mounted中js计算后赋值
        canvasBgOffsetTop: number = 0;// 高斯模糊canvas背景需要向下便宜的数值
        topStatus: string = "";//下拉状态
        translate: number = 0;//下拉距离
        moveTranslate: number = 0; //缩放比例
        singListData: any = {};//歌单信息
        headerFix: boolean = false;//替身div是否开启的状态标识
        blurRate: number = 60;//高斯模糊的比率
        mounted() {
            //请求接口加载歌单信息
            this.$post(this.$store.state.remote.getSongListDetail, {
                songListId: this.$route.query.id
            }).then(result => {
                this.singListData = result.songListDetail;
                this.$nextTick(() => {
                    // 根据歌单的coverImg进行高斯模糊赋予背景 start
                    this.headerHeight = (<HTMLElement>document.querySelector(".kajie-header")).offsetHeight;
                    document.querySelector(".swiper-slide-content")!.addEventListener("scroll", this.onScroll);
                    let image = new Image();
                    // 解决跨域 Canvas 污染问题
                    image.setAttribute("crossOrigin", "anonymous");
                    image.onload = () => {
                        let canvas = <HTMLCanvasElement>document.createElement("canvas");
                        canvas.width = image.width;
                        canvas.height = image.height;
                        let context = canvas.getContext("2d");
                        context!.drawImage(image, 0, 0, image.width, image.height);
                        let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
                        this.singListData.coverImgBase64 = url;
                        let _image = new Image();
                        _image.onload = () => {
                            this.$store.getters.getStackBlur.image("singlistcover", "background-canvas", this.blurRate, false);
                            //background-canvas 复制一份 到 background-canvas-
                            let source = (<HTMLCanvasElement>document.getElementById("background-canvas")),
                                    target = (<HTMLCanvasElement>document.getElementById("background-canvas-"));
                            let headerHeight = document.getElementById("singlist-header")!.clientHeight;
                            target.width = source.clientWidth;
                            target.height = headerHeight;
                            //复制一个 canvas用来充当 浮动框的假背景 填充圆角的背景 空缺
                            target.getContext("2d")!.drawImage(source, 0, source.height - source.height * headerHeight / source.clientHeight, source.width, source.height * headerHeight / source.clientHeight, 0, 0, source.clientWidth, source.clientHeight);
                        };
                        _image.src = url;
                    };
                    image.src = this.singListData.coverImg;
                    this.canvasBgOffsetTop = (<HTMLCanvasElement>document.querySelector("#background-canvas")).offsetTop;
                    // 根据歌单的coverImg进行高斯模糊赋予背景 end
                });
            });
        }
        // 监听用户的 滑动状态 控制背景的 transition样式
        @Watch("topStatus", {deep: false})
        watchTopStatus(newValue: any, oldValue: any) {
            if (oldValue === "drop" && newValue === "loading") {
                (<HTMLElement>document.querySelector("#background-canvas")).style.transition = "all 0.3s";
                (<HTMLElement>document.querySelector("#gray-mark")).style.transition = "all 0.3s";
            }
            setTimeout(function () {
                (<HTMLElement>document.querySelector("#background-canvas")).style.transition = "";
                (<HTMLElement>document.querySelector("#gray-mark")).style.transition = "";
            }, 220);
        }

        // 用户滚动时 背景图片跟随滚动
        onScroll() {
            let scrolled: number | null = document.querySelector(".swiper-slide-content")!.scrollTop || document.querySelector(".swiper-slide-content")!.scrollTop;

            this.headerFix = this.headerHeight >= document.getElementsByClassName("singlist-float")[0].getBoundingClientRect().top;
            // 滚动时让模糊的背景图片跟随滚动移动
            if (!this.headerFix) {
                (<HTMLElement>document.querySelector("#background-canvas")).style.top = this.canvasBgOffsetTop - scrolled + "px";
            }
        }
        // loadmore 自带转台变化钩子 是否加载的状态变化
        handleTopChange(status: string) {
            this.moveTranslate = 1;
            this.topStatus = status;
        }
        // loadmore 自带转台变化钩子 监听拖动比例
        translateChange(translate: any) {
            const translateNum: number = Number(translate);
            this.translate = parseFloat(translateNum.toFixed(2));
            this.moveTranslate = parseFloat((1 + translateNum / 70).toFixed(2));
        }
        // loadmore 自带转台变化钩子 触发下拉后需要执行的操作
        loadTop() {
            // setTimeout(() => {
            //     this.$refs.loadmore.onTopLoaded();
            // }, 1500);
        }
        // 转跳到播放器组件
        pushToPlayer(singId: any) {
            this.$router.push({name: "singPlayer", query: {id: singId}});
        }
        // 计算模糊的背景需要形变的量
        get transform() {
            // console.log(this.translate)
            let translateStart = this.translate - 50 > 0 ? this.translate - 50 : 0;

            return this.translate === 0 ? "scale3d(1, 1, 1)" : "scale3d(" + (translateStart * 0.006 + 1) + ", " + (translateStart * 0.006 + 1) + ", 1)";
        }
    };
</script>

<style lang="scss" scoped>
    .mint-loadmore {
        min-height: 100%;
    }

    .mint-loadmore-content {
        min-height: 100%;
    }

    .singlist-headdiv {
        width: 450px;
    }

    .singlist-body {
        height: 100%;
    }

    .swiper-slide-content {
        /*增加弹性滚动,解决滚动不流畅的问题*/
        -webkit-overflow-scrolling: touch;
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

    .singlist-header-out {
        height: 820px;
    }

    .singlist-header {
    }

    .singlist-header-fixed {
        position: absolute;
        top: 121px;
        left: 0;
        z-index: 9;
    }

    .head-fixed {
        top: 125px;
        left: 0;
        z-index: 9;
    }

    .singlist-header .icon-you {
        font-size: 20px;
    }

    .singlist-header-funcbuttons {
        .dis_table_cell {
            font-size: 38px;
            line-height: 65px;
            color: rgba(230, 230, 230, 0.9);
        }
        .iconfont {
            font-size: 55px;
        }
    }

    .singlist-title {
        color: white;
    }

    .singlist-owner .singlist-owner-text {
        display: inline-block;
        padding-left: 15px;
    }

    .singlist-owner, .singlist-owner .iconfont {
        color: rgba(240, 240, 240, 0.8);
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

    .singlist-content .dis_table_row .dis_table_cell:nth-child(1) {
        color: #707070;
        font-size: 48px;
    }

    .singlist-content .dis_table_row .dis_table_cell:nth-child(2) {
        text-align: left;
        padding: 25px 0;
    }

    .singlist-content .dis_table_row .dis_table_cell:nth-child(2), .singlist-content .dis_table_row .dis_table_cell:nth-child(3) {
        border-top: 1px solid #e1e1e1;
    }

    .singlist-content .dis_table_row .dis_table_cell:nth-child(2) .singlist-content-singname {
        font-size: 48px;
        margin-bottom: 10px;
    }

    .singlist-content .dis_table_row .dis_table_cell:nth-child(2) .singlist-content-describe {
        color: #868686;
        vertical-align: middle;
    }

    .singlist-content .dis_table_row .dis_table_cell:nth-child(3) .iconfont {
        font-size: 70px;
        color: #868686;
        margin: 0 20px;
    }

    .icon-sq {
        font-size: 55px;
        font-weight: bold;
        color: #F36B3A;
    }

    .div-searchinput {
        width: 95%;
        margin: 0 auto;
    }

    #canvas-copy {
        display: none;
        width: 1125px;
        height: 1125px;
        z-index: 1;
    }

    .gray-mark{
        position: absolute;
        top: -120px;
        left: 0;
        width: 100%;
        z-index: -1;
        height: 60vh;
        background-color: rgba(0,0,0,0.2);
    }
    #background-canvas {
        position: absolute;
        top: -120px;
        left: 0;
        width: 100%;
        z-index: -2;
    }
    .gray-mark-{
        position: absolute;
        width: 100vw;
        height: 50px;
        background-color: rgba(0,0,0,0.2);
    }
    .background-canvas-out {
        position: relative;
        top: 0;
        left: 0;
        height: 0;
        z-index: -2;
    }
</style>
