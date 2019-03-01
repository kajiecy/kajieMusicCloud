<template>
    <div class="singlist-body page-body">
        <!--<kajie-scroll class="page-body-scroll">-->
            <div class="pole-div ">
                <!--pole-animal-->
                <div class="player-pole-layer">
                    <div class="player-pole">
                        <img :src="playerPole" width="100%" height="100%">
                    </div>
                </div>
            </div>
            <!--cover-animal-->
            <div class="view-center"  @click="coverEvent">
                <template v-if="playingMode[nowMode]!=null?playingMode[nowMode].icon:''">

                </template>
                <div class="saucer-div ">
                    <div class="cover-animal">
                        <div class="saucer-cover-layout ">
                            <div class="saucer-cover-img "><img src="http://qiniu.kajie88.com/recommendSong5.jpg" width="100%" height="100%"></div>
                        </div>
                        <div class="player-saucer ">
                            <img :src="playerSaucer" width="100%" height="100%">
                        </div>
                    </div>
                </div>
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
                    <div class="control-button dis_flax_child textcenter"><i  @click="changePlayMode" class="iconfont icon-play-model" :class="playingMode[nowMode]!=null?playingMode[nowMode].icon:''"></i></div>
                    <div class="control-button dis_flax_child textcenter"><i class="iconfont icon-shangyishou"></i></div>
                    <div class="control-button dis_flax_child textcenter">
                        <div class="pass-pause-div" @click="touchPassButtonEvent">
                            <div :class="playingState===true?'pass-div':'pause-div'">
                                <div class="pause-div-inner pause-div-left"></div>
                                <div class="pause-div-inner pause-div-right"></div>
                            </div>
                        </div>
                    </div>
                    <div class="control-button dis_flax_child textcenter"><i class="iconfont icon-shangyishou rotate180"></i></div>
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

    import {playerCenterShowMode,playingMode} from '@/enum/playerEnums.ts';


    @Component
    export default class SingPlayer extends Vue{
        playerPole:typeof HTMLImageElement = playerPole;
        playerSaucer:typeof HTMLImageElement= playerSaucer;
        headerHight:number=0;
        backgroundImgBase64:string="";
        blurRate:number = 40;
        singData:any = {
            id: 1,
            name: '爱如潮水',
            singerName: '张信哲',
            specialName: '张信哲精选',
            coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
            hasMv: true,
            isSq: true
        };
        iconState:boolean = true;
        //歌曲的播放状态
        playingState:boolean = false;
        // 当前的播放模式
        nowMode:number = 0;
        //三种播放模式 单曲循环 列表循环 随机播放
        playingMode:typeof playingMode= playingMode;
        //
        centerShow:string = 'coverImg';
        playerShowMode:String[] =[
            "coverImg",
            "lyrics",
        ];
        transformIcon(){
            this.iconState = !this.iconState;
        }
        touchPassButtonEvent(){
            this.playingState = !this.playingState;
        }
        //改变歌曲的播放模式
        changePlayMode(){
            if(++this.nowMode>=this.playingMode.length){
                this.nowMode = 0;
            }
        }
        coverEvent(){
            console.log("111")
        }
        mounted() {
            this.$nextTick(()=>{
                this.headerHight = (<HTMLElement>document.querySelector('.kajie-header')).offsetHeight;
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
        .pass-div{
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
        .pause-div{
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
