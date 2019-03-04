<template>
    <div class="singlist-body page-body">
        <!--<kajie-scroll class="page-body-scroll">-->
            <div class="pole-div "  v-if="centerShow===playerCenterShowMode.disc">
                <!--pole-animal-->
                <div class="player-pole-layer">
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
                        <div class="cover-animal">
                            <div class="saucer-cover-layout ">
                                <div class="saucer-cover-img "><img src="http://qiniu.kajie88.com/recommendSong5.jpg" width="100%" height="100%"></div>
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
                <audio ref="myPlayer" controls="controls" src="http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.mp3"></audio>
            </div>
            <!--底部按钮组div-->
            <div class="fixed bottom0 control-center">
                <div class="interactive-buttons dis_flax">
                    <div class="interactive-button dis_flax_child textcenter"><i  @click="transformIcon" class="iconfont " :class="iconState?'icon-xin1':'icon-xin'"></i></div>
                    <div class="interactive-button dis_flax_child textcenter"><i class="iconfont icon-plus-download"></i></div>
                    <div class="interactive-button dis_flax_child textcenter"><i class="iconfont icon-yun_l"></i></div>
                    <div class="interactive-button dis_flax_child textcenter"><i class="iconfont icon-weibiaoti-"></i></div>
                    <div class="interactive-button dis_flax_child textcenter"><i class="iconfont icon-diandiandianshu"></i></div>
                </div>

                <div class="process-div wd90 dis_table">
                    <div class="dis_table_cell wd10">00:08</div>
                    <div class="dis_table_cell center-cell">
                        <div class="process-line"></div>
                        <div class="process-point-layout">
                            <div class="process-point">
                                <div class="process-point-inner"></div>
                            </div>
                        </div>
                    </div>
                    <div class="dis_table_cell wd10">04:50</div>
                </div>


                <div class="control-buttons dis_flax">
                    <div class="control-button dis_flax_child textcenter">
                        <i @click="changePlayMode" class="iconfont icon-play-model" :class="playingMode[nowMode]!=null?playingMode[nowMode].icon:''"></i>
                    </div>
                    <div class="control-button dis_flax_child textcenter"><i class="iconfont icon-shangyishou"></i></div>
                    <div class="control-button dis_flax_child textcenter">
                        <div class="pass-pause-div" @click="touchPassButtonEvent">
                            <div :class="playingState===true?'pass-div':'pause-div'">
                                <div class="pause-div-inner pause-div-left"></div>
                                <div class="pause-div-inner pause-div-right"></div>
                            </div>
                        </div>
                    </div>
                    <div class="control-button dis_flax_child textcenter" @click="nextSong()"><i class="iconfont icon-shangyishou rotate180"></i></div>
                    <div class="control-button dis_flax_child textcenter"><i class="iconfont icon-bofangliebiao"></i></div>
                </div>
            </div>
        <!--</kajie-scroll>-->

        <!--隐藏元素用于模糊背景的实现-->
        <img id="canvas-copy" :src="backgroundImgBase64" >
        <div class="canvas-div">
            <canvas id="background-canvas" :style="''" ></canvas>
        </div>
    </div>

</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject}from 'vue-property-decorator';
    //@ts-ignore
    import playerPole from '@/assets/image/player/2.png';
    //@ts-ignore
    import playerSaucer from '@/assets/image/player/1.png';

    import {playerCenterShowMode,playingMode,activeSongType} from '@/enum/playerEnums.ts';
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
        // 歌词封面图片的 64位字节用于 给高斯模糊js提供数据源，次js无法直接模糊跨域图片
        backgroundImgBase64:string="";
        // 背景的模糊比例
        blurRate:number = 40;
        // 歌曲的基本信息☆
        singData:any = {
            id: 1,
            name: '爱如潮水',
            singerName: '张信哲',
            specialName: '张信哲精选',
            coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
            songSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.mp3',
            lrcSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.lrc',
            hasMv: true,
            isSq: true
        };
        // 临时属性 用来表示歌曲的 喜欢状态
        iconState:boolean = true;
        //歌曲的播放状态
        playingState:boolean = false;
        // 当前的播放模式
        nowMode:number = 0;
        //三种播放模式 单曲循环 列表循环 随机播放
        playingMode:Array<Object>= playingMode;
        //页面中心 标识页面显示 歌词合适封面
        centerShow:number = playerCenterShowMode.lyrics;
        playerCenterShowMode:typeof playerCenterShowMode = playerCenterShowMode;

        playerWatcher:any = null;
        playStatus :object = {
            nowTimeFormat:'00:00',
            nowTimeNum:0,
            sumTimeFormat:'00:00',
            sumTimeNum:0,

        }
        // -------------------------      mounted start      -------------------------
        mounted() {
            this.$nextTick(()=>{
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
                    this.backgroundImgBase64 = url
                    let _image = new Image();
                    _image.onload =()=>{
                        console.log(this.$store.getters)
                        this.$store.getters.getStackBlur.image('canvas-copy', 'background-canvas', this.blurRate,false);
                    }
                    _image.src = url;
                };
                image.src = this.singData.coverImg;
            })
        }
        // -------------------------      mounted end      -------------------------

        // -------------------------      methods start      -------------------------
        //控制 喜欢的点击操作
        transformIcon(){
            this.iconState = !this.iconState;
        }
        //播放暂停按钮的处理逻辑 获取audio控件 判断其状态执行 播放或暂停操作
        touchPassButtonEvent(){
            this.playingState = !this.playingState;
            let myPlayer = <HTMLMediaElement>this.$refs.myPlayer;
            if(myPlayer.paused===true){
                myPlayer.play();
            }else {
                myPlayer.pause();
            }
        }
        //
        changeSong(activeType){
            let myPlayer = <HTMLMediaElement>this.$refs.myPlayer;
            console.log("总时长",myPlayer.duration);
            console.log("播放时长",myPlayer.currentTime);
        }

        //改变歌曲的播放模式
        changePlayMode(){
            if(++this.nowMode>=this.playingMode.length){
                this.nowMode = 0;
            }
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
        //监听播放状态
        @Watch('playingState', {deep: false})
        watchPlayingState(newValue:boolean){
            //如果状态变为 true 启动一个 循环器 轮询播放状态
            let myPlayer = <HTMLMediaElement>this.$refs.myPlayer;
            if(newValue===true){
                this.playerWatcher = window.setInterval(()=>{
                    // console.log("总时长",myPlayer.duration);
                    console.log("播放时长",myPlayer.currentTime);
                    console.log(this.$myUtil.formatSecond(myPlayer.currentTime));
                },1000);
            }else {
                window.clearInterval(this.playerWatcher);
            }
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
                display: inline-block;
                border-radius: 50%;
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
            transform:rotate(25deg);

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
        z-index: -1;
        overflow: hidden;
        #background-canvas{
            position: relative;
            left: calc(-50vh + 50vw);
            width: 100vh;
            height: 100vh;

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
                margin: 0 20px;
                height: 6px;
                background-color: rgba(255,255,255,0.3);
                border-radius: 25%;
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

                    left: 0%;
                    .process-point-inner{
                        position: relative;
                        width: 12px;
                        height: 12px;
                        top: 1px;
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
    .icon-play-model{
        position: relative;
        top: 10px;
    }


    .cover-animal{
        animation:coverAnimal 15s linear infinite;
    }
    .pole-animal{
        animation:poleAnimal 2s linear infinite;
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


</style>
