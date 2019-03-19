<template>
    <div class="singlist-body page-body">
        <!--<kajie-scroll class="page-body-scroll">-->
            <div class="pole-div "  v-if="centerShow===playerCenterShowMode.disc">
                <!--pole-animal-->
                <div class="player-pole-layer" :class="$store.getters.getPlayingState===true?'transform25':''">
                    <div class="player-pole">
                        <img :src="playerPole" width="100%" height="100%">
                    </div>
                </div>
            </div>
            <!--cover-animal-->
            <div class="view-center"  @click="coverEvent">
                <!--歌曲的封面页面显示-->
                <template v-if="centerShow===playerCenterShowMode.disc">
                    <div class="saucer-div">
                        <div class="cover-animal" :class="$store.getters.getPlayingState===true?'animation-running':'animation-pasued'">
                            <div class="saucer-cover-layout ">
                                <div class="saucer-cover-img "><img v-if="$store.state.player.singData.coverImg" :src="$store.state.player.singData.coverImg" width="100%" height="100%"></div>
                            </div>
                            <div class="player-saucer ">
                                <img :src="playerSaucer" width="100%" height="100%">
                            </div>
                        </div>
                    </div>
                </template>
                <!--歌曲的歌词显示-->
                <template v-if="centerShow===playerCenterShowMode.lyrics">
                    <lyrics-show></lyrics-show>
                </template>
            </div>
            <!--底部按钮组div-->
            <div class="fixed bottom0 control-center">
                <!--第一行 喜欢、下载、云、收藏、评论、更多按钮-->
                <div class="interactive-buttons dis_flax">
                    <div class="interactive-button dis_flax_child textcenter"><i  @click="$store.commit('changeLoveStatus')" class="iconfont " :class="$store.getters.getSingData.userLove?'icon-xin1':'icon-xin'"></i></div>
                    <div class="interactive-button dis_flax_child textcenter"><i class="iconfont icon-plus-download"></i></div>
                    <div class="interactive-button dis_flax_child textcenter"><i class="iconfont icon-yun_l"></i></div>
                    <div class="interactive-button dis_flax_child textcenter"><i class="iconfont icon-weibiaoti-"></i></div>
                    <div class="interactive-button dis_flax_child textcenter"><i class="iconfont icon-diandiandianshu"></i></div>
                </div>

                <!--第二行 歌曲的进度条-->
                <div class="process-div wd90 dis_table">
                    <!--显示当前播放时间-->
                    <div class="dis_table_cell wd10">{{$store.getters.getNowPlayTime({needFormat:true})}}</div>
                    <!--条状进度条-->
                    <div class="dis_table_cell center-cell">
                        <div class="process-line-out">
                            <div class="process-line">
                                <div class="complete-line"></div>
                            </div>
                        </div>
                        <div class="process-point-layout">
                            <div class="process-point" v-playPointDrag>
                                <div id="process-point-inner" class="process-point-inner"></div>
                            </div>
                        </div>
                    </div>
                    <!--显示歌曲总时间-->
                    <div class="dis_table_cell wd10">{{$store.getters.getSumTimeNum({needFormat:true})}}</div>
                </div>

                <!--第三行 播放器的控制按钮-->
                <div class="control-buttons dis_flax">
                    <!--播放模式 随机/单曲/循环-->
                    <div class="control-button dis_flax_child textcenter">
                        <i @click="$store.commit('changePlayMode')" class="iconfont icon-play-model" :class="$store.getters.getPlayingModeIcon"></i>
                    </div>
                    <!--上一首-->
                    <div class="control-button dis_flax_child textcenter"><i class="iconfont icon-shangyishou"></i></div>
                    <!--播放/暂停-->
                    <div class="control-button dis_flax_child textcenter">
                        <div class="pass-pause-div" @click="$store.commit('touchPassButtonEvent')">
                            <div :class="$store.getters.getPlayingState===true?'pass-div':'pause-div'">
                                <div class="pause-div-inner pause-div-left"></div>
                                <div class="pause-div-inner pause-div-right"></div>
                            </div>
                        </div>
                    </div>
                    <!--下一首-->
                    <div class="control-button dis_flax_child textcenter" @click="nextSong()"><i class="iconfont icon-shangyishou rotate180"></i></div>
                    <!--唤起播放列表弹框-->
                    <div class="control-button dis_flax_child textcenter" @click="operatePopup(true)"><i class="iconfont icon-bofangliebiao"></i></div>
                </div>
            </div>
        <!--</kajie-scroll>-->

        <!--隐藏元素用于模糊背景的实现-->
        <img id="canvas-copy" :src="backgroundImgBase64" >
        <div class="canvas-div">
            <div class="gray-mark"></div>
            <canvas id="background-canvas" :style="''"></canvas>
        </div>
        <img id="canvas-default" style="display: none" :src="defaultBackgroundImg" >
        <!--歌单显示 下方弹出的 popup框-->
        <mt-popup
                v-model="popupVisible"
                popup-transition="popup-fade"
                position="bottom">
            <div class="popup-body">
                <!--heard start-->
                <div class="popup-header">
                    <div class="dis_table wd100">
                        <div class="dis_table_cell wd90 textleft">
                            <span>
                                <i class="iconfont icon-suiji"></i>
                                随机播放(384)
                            </span>
                        </div>
                        <div class="dis_table_cell textcenter"><i class="iconfont icon-lajixiang"></i></div>
                    </div>
                </div>
                <!--heard end-->
                <!--content start-->
                <div class="popup-inner">
                    <kajie-scroll class="popup-scroll">

                    </kajie-scroll>
                </div>
                <!--content end-->
                <!--footer start-->
                <div class="popup-footer textcenter" @click="operatePopup(false)">
                    <span>
                        关闭
                    </span>
                </div>
                <!--footer end-->
            </div>
        </mt-popup>
    </div>

</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject}from 'vue-property-decorator';
    //@ts-ignore
    import playerSaucer from '@/assets/image/player/1.png';
    //@ts-ignore
    import playerPole from '@/assets/image/player/2.png';
    //@ts-ignore
    import defaultBackgroundImg from '@/assets/image/defaultBackgroundImg.jpg';

    import {playerCenterShowMode,activeSongType} from '@/enum/playerEnums.ts';
    import LyricsShow from '@/views/singlistpages/LyricsShow.vue';

    @Component({
        components:{
            LyricsShow:LyricsShow
        }
    })
    export default class SingPlayer extends Vue{
        // 图片：唱片杆
        playerPole:typeof HTMLImageElement = playerPole;
        // 图片：唱片碟
        playerSaucer:typeof HTMLImageElement= playerSaucer;
        // 在歌曲信息没加载出来是显示的默认背景图片
        defaultBackgroundImg:typeof HTMLImageElement= defaultBackgroundImg;
        // 歌词封面图片的 64位字节用于 给高斯模糊js提供数据源，次js无法直接模糊跨域图片
        backgroundImgBase64:string="";
        // 背景的模糊比例
        blurRate:number = 40;
        // 页面中心 标识页面显示 歌词合适封面
        centerShow:number = playerCenterShowMode.disc;
        // 歌曲播放界面的显示模式
        playerCenterShowMode:typeof playerCenterShowMode = playerCenterShowMode;
        // 播放列表的弹窗状态标识
        popupVisible:boolean = false;

        // -------------------------      mounted start      -------------------------
        mounted() {
            // 处理背景 根据歌曲 cover 背景进行高斯模糊 如果当前没有背景图片 则对默认图片进行高斯模糊
            this.$nextTick(()=>{
                if(this.$store.state.player.singData.coverImg){
                    this.watchCoverImg(this.$store.state.player.singData.coverImg);
                }else{
                    (<HTMLImageElement>document.getElementById('canvas-default')).onload =()=>{
                        this.$store.getters.getStackBlur.image('canvas-default', 'background-canvas', this.blurRate,false);
                    };
                }
            });
            // 判断传入的id 与 store 中的 播放歌曲是否一致
            console.log('判断传入的id 与 store 中的 播放歌曲是否一致',this.$route.query['id'])
            if(this.$route.query['id']===this.$store.getters.getSingData.id){
                // 如果当前为暂停状态 继续播放
                if(!this.$store.getters.getPlayingState){
                    //播放歌曲
                    this.$store.commit('touchPassButtonEvent')
                }
            }else {
                this.$post(this.$store.state.remote.getSingInfo,{
                    id:this.$route.query['id']
                }).then(result=>{
                    // console.log(result);
                    this.$store.commit('setSingData',result.singInfo);
                    setTimeout(()=>{
                        // 播放歌曲
                        this.$store.commit('touchPassButtonEvent');
                    });
                })
            }
        }
        // -------------------------      mounted end      -------------------------
        // -------------------------      methods start      -------------------------
        /**
         * 操作播放列表的空间的打开状态
         * @param popupVisible true:打开,false:关闭
         */
        operatePopup(popupVisible){
            this.popupVisible = popupVisible;
        }

        //点击封面 或者 歌词 循环切换
        coverEvent(){
            if(this.centerShow === this.playerCenterShowMode.disc){
                this.centerShow = this.playerCenterShowMode.lyrics;
            }else if(this.centerShow === this.playerCenterShowMode.lyrics){
                this.centerShow = this.playerCenterShowMode.disc;
            }
        }
        // -------------------------      methods end      -------------------------
        // -------------------------      watchs start      -------------------------
        // 监听封面的更新及时切换封面
        @Watch('$store.state.player.singData.coverImg', {deep: false})
        watchCoverImg(newValue:any){
            let image = new Image();
            // 解决跨域 Canvas 污染问题
            image.setAttribute('crossOrigin', 'anonymous');
            image.onload = ()=>{
                let canvas = <HTMLCanvasElement>document.createElement('canvas');
                canvas.width = image.width;
                canvas.height = image.height;
                let context = canvas.getContext('2d');
                context!.drawImage(image, 0, 0, image.width, image.height);
                let url = canvas.toDataURL('image/png'); //得到图片的base64编码数据
                this.backgroundImgBase64 = url;
                let _image = new Image();
                _image.onload =()=>{
                    // console.log(this.$store.getters);
                    this.$store.getters.getStackBlur.image('canvas-copy', 'background-canvas', this.blurRate,false);
                };
                _image.src = url;
            };
            image.src = newValue;
        }
        // -------------------------      watchs end      -------------------------
    }

</script>

<style lang="scss" scoped>
    .page-body{
        border-top: 1px solid rgba(255,255,255,0.2);
        height: 100%;
    }
    .control-center{
        padding-bottom: 60px;
    }
    #canvas-copy{
        /*width: 100%;*/
        /*height: 100%;*/
        display: none;
    }
    .saucer-div{
        position: relative;
        z-index: 2;
        margin: 250px 0 4vh 0;
        overflow: hidden;
        .player-saucer{
            width: 85%;
            margin: 0 auto;
        }
        .saucer-cover-layout{
            position: relative;
            height: 0;
            left: 260px;
            top: 175px;
            .saucer-cover-img{
                background-color: #303133;
                display: inline-block;
                border-radius: 50%;
                border-color: #303133;
                overflow: hidden;
                width: 605px;
                height: 605px;
            }
        }
    }
    .pole-div{
        overflow: hidden;
        position: absolute;
        z-index: 3;
        pointer-events:none;
        /*left: calc(50vw - 50px);*/
        .player-pole-layer{
            transition:transform 500ms;
            width: 1100px;
            height: 760px;
            position: relative;
            top: -380px;
            .player-pole{
                width: 550px;
                height: 380px;
                position: relative;
                z-index: 4;
                top: 327px;
                left: 492px;
            }
        }
    }
    .canvas-div{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -2;
        overflow: hidden;
        .gray-mark{
            position: absolute;
            width: 100vh;
            height: 100vh;
            background-color: rgba(0,0,0,0.4);
            z-index: -1;
        }
        #background-canvas{
            position: relative;
            left: calc(-50vh + 50vw);
            width: 100vh;
            height: 100vh;
            z-index: -2;
        }
    }
    .interactive-buttons{
        width: 88%;
        margin: 0 auto;
        .interactive-button{
            .iconfont{
                font-size: 65px;
                color: rgba(255,255,255,0.6);
            }
            .icon-yun_l{
                font-size: 80px;
            }
            .icon-xin1{
                font-size: 75px;
                color: #D33A30;
            }
            .icon-xin{
                font-size: 75px;
            }
            .icon-diandiandianshu{
                font-size: 75px;
            }
        }
    }
    .control-buttons{
        width: 100%;
        margin: 0 auto;
        .control-button{
            display: flex;
            justify-content:center;
            align-items:center;
            .iconfont{
                font-size: 75px;
                color: rgba(255,255,255,0.6);
            }
        }
    }

    .process-div{
        margin: 3vh auto;
        .dis_table_cell{
            color: rgba(255,255,255,0.5);
            .process-line{
                overflow: hidden;
                margin: 0 20px;
                height: 6px;
                background-color: rgba(255,255,255,0.3);
                border-radius: 25%;
                .complete-line{
                    background-color: #D33A30;
                    height: 6px;
                    position: relative;
                    right: 100%;
                }
            }
            .process-point-layout{
                height: 0px;
                width: calc( 100% - 45px );
                .process-point{
                    position: relative;
                    top: -27px;
                    width: 45px;
                    height: 45px;
                    background-color: white;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    left: 0;
                    .process-point-inner{

                        position: relative;
                        width: 12px;
                        height: 12px;
                        top: -0px;
                        left: -0px;
                        border-radius: 50%;
                        background-color: #D33A30;
                    }
                }
            }
            &.center-cell{
                padding: 10px;
            }
        }

    }


    .pass-pause-div{
        margin: 0 auto;
        border: 5px solid rgba(255,255,255,0.5);
        height: 120px;
        width: 120px;
        border-radius: 50%;
        .pause-div-left{
            transition: width 0.5s;
        }
        .pause-div{
            .pause-div-left{
                width:0;
                height:0;
                border-width:30px 0 30px 45px;
                border-style:solid;
                border-color:transparent transparent transparent rgba(255,255,255,0.5);/*透明 透明 透明 灰*/
                margin:40px auto;
                position:relative;
                top: -10px;
                left: 5px;
            }
            .pause-div-right{
                display: none;
            }
        }
        .pass-div{
            position: relative;
            top: 30px;
            .pause-div-inner{
                display: inline-block;
                width: 12px;
                height: 60px;
                background-color: rgba(255,255,255,0.5);
                margin: 0px 8px;
            }
        }
    }

    .view-center{
        height: calc( 100% - 500px );
    }

    .icon-play-model{
        position: relative;
        top: 10px;
    }

    .transform25{
        transform:rotate(27deg);
    }

    .cover-animal{
        animation:coverAnimal 15s linear infinite;
    }
    .pole-animal{
        animation:poleAnimal 2s linear infinite;
    }

    .mint-popup{
        border-top-right-radius: 40px;
        border-top-left-radius: 40px;
        opacity: 0.97;
        background-color: rgba(215,215,215,1);

    }
    .popup-body{
        height: 65vh;
        width: 100vw;
        border-top-right-radius: 40px;
        border-top-left-radius: 40px;
        overflow: hidden;



        display: flex;
        flex-direction: column;
        .popup-header{
            /*width: 100vw;*/
            /*height: 40px;*/
            padding: 0 20px;
            flex: 0 0 120px;
            border-bottom: 1px solid #C1C1C1;

            .dis_table{
                height: 120px;
            }
            .dis_table_cell{
                font-size: 44px;
            }
            .iconfont{
                vertical-align: middle;
                font-size: 65px;
                color: #919191;
            }
            .icon-lajixiang{
                font-size: 50px;
            }
        }
        .popup-inner{
            /*width: 100vw;*/
            flex: 1 0 calc( 65vh - 130px - 120px );
            overflow: scroll;
        }
        .popup-footer{
            /*width: 100vw;*/
            /*height: 40px;/*/
            flex: 0 0 130px;
            border-top: 1px solid #C1C1C1;
            span{
                font-size: 44px;
                display: inline-block;
                padding: 30px 20px 20px 20px;
            }
        }
    }



    @keyframes coverAnimal{
        from {/* Rotate div */
            transform:rotate(0deg);
        }
        50% {
            transform:rotate(180deg);
        }
        to {
            transform:rotate(360deg);
        }
    }
    @keyframes poleAnimal{
        from {/* Rotate div */
            transform:rotate(0deg);
        }
        50% {
            transform:rotate(25deg);
        }
        to {
            transform:rotate(25deg);
        }
    }

    .animation-pasued {
        animation-play-state: paused;
    }
    .animation-running {
        animation-play-state: running;
    }
</style>
