<template>
    <div class="lyrics-body">
        <div class="swiper-container swiper-main">
            <div class="swiper-wrapper wrapper-main">
                <div v-for="(item,index) in $store.state.player.lrcContent" class="swiper-slide">
                    <span class="lyrics-line">{{item.lrcLine}}</span>
                </div>
                <!--<div class="swiper-slide">-->
                    <!--<span class="lyrics-line">111</span>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                    <!--<span class="lyrics-line">222</span>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                    <!--<span class="lyrics-line">333</span>-->
                <!--</div>-->
            </div>
        </div>
        <div class="flag-line-body dis_table" :class="flagLineStatue===true?'show-flag-line':'hidden-flag-line'">
            <div class="dis_table_cell play-icon-cell" @click.stop="redirectsProgress()">
                <div class="play-icon"></div>
            </div>
            <div class="dis_table_cell flag-line-cell">
                <div class="flag-line"></div>
            </div>
            <div class="dis_table_cell flag-line-time-cell">
                <div class="flag-line-time">{{lrcArriveInfo.timeStr}}</div>
            </div>
        </div>
    </div>

</template>

<script  lang="ts">
    import { Component, Prop,Vue ,Model,Watch,Inject}from 'vue-property-decorator';
    import Swiper from 'swiper';

    @Component({
        components: {
            Swiper,
        }
    })
    export default class LyricsShow extends Vue{
        swiperMain:any = null;
        flagLineStatue:boolean = true;
        lrcData:any[] = [];
        lrcArriveInfo = {
            timeStr:'',// 时间的格式化,
            timeNum:0, // 时间戳,
            lrcLine:'',// 一行歌词的内容
        };

        mounted() {
            this.lrcData = this.$store.state.player.lrcContent;
            this.$nextTick(()=>{
                this.loadSwiperComponent();
            })
        }

        loadSwiperComponent(){
            let _vm = this;
            _vm.swiperMain = new Swiper('.swiper-main', {
                resistanceRatio : 0,//滑动到尽头时禁止在滑动
                iOSEdgeSwipeDetection : true,
                watchSlidesProgress : true,
                direction: 'vertical',
                freeMode: true,

                speed: 200,
                slidesPerView: 14,
                centeredSlides: true,
                spaceBetween: 5,
                freeModeSticky:true,

                freeModeMomentumVelocityRatio:0.2,

                on: {
                    // slide 改变时间 取得歌词对应时间
                    slideChange: function () {
                        // console.log(this.activeIndex);
                        _vm.lrcArriveInfo.timeStr = _vm.lrcData[this.activeIndex].timeStr.split('.')[0];
                        _vm.lrcArriveInfo.timeNum = _vm.lrcData[this.activeIndex].timeNum;
                        _vm.lrcArriveInfo.lrcLine = _vm.lrcData[this.activeIndex].lrcLine;
                    },
                    touchStart: function(event: any){
                        // console.log('touchStart事件触发了;',event);
                        _vm.flagLineStatue = true;
                    },
                    // slideChangeTransitionEnd: function(){
                    //     console.log('slideChangeTransitionEnd事件触发了;');
                    //     setTimeout(function () {
                    //         _vm.flagLineStatue = false;
                    //     },1000);
                    // },
                    touchEnd: function(){
                        // console.log('touchEnd事件触发了;');
                        setTimeout(function () {
                            _vm.flagLineStatue = false;
                        },2500);
                    },
                },
            });
        }
        redirectsProgress(){
            // 将播放器的播放进度移动到相应位置
            this.$store.commit('changePlayTime',this.lrcArriveInfo.timeNum);
        }
        @Watch('$store.state.player.lrcContent', {deep: false})
        watchLrcContent(newValue:any){
            // console.log('watchLrcContent',newValue);
            this.lrcData = newValue;
            this.$nextTick(()=>{
                this.loadSwiperComponent();
            })
        }
        @Watch('$store.state.player.playStatus.lrcArriveIndex', {deep: false})
        watchLrcArriveIndex(newValue:any){
            // console.log('watchLrcArriveIndex',newValue);
            if(!this.flagLineStatue){
                this.swiperMain.slideTo(newValue, 1000, false);//切换到第一个slide，速度为1秒
            }
        }
    }
</script>

<style scoped lang="scss">

    .swiper-main{
        height: 100%;
    }
    .lyrics-body{
        height: 100%;
        .swiper-slide{
            height: 300px;
            text-align: center;
            .lyrics-line{
                color: rgba(255,255,255,0.5);
                font-size: 43px;
            }
            &.swiper-slide-active .lyrics-line{
                color: rgba(255,255,255,0.75);
            }
        }
    }
    .flag-line-body{
        position: relative;
        top: -735px;
        width: 100%;
        transition: all 750ms;
        z-index: 3;
        .play-icon-cell{

        }
        .play-icon{
            width:0;
            height:0;
            border-width:15px 0 15px 22px;
            border-style:solid;
            border-color:transparent transparent transparent rgba(255,255,255,0.6);/*透明 透明 透明 灰*/
            margin:20px auto;
            position:relative;
            top: -2px;
            left: 5px;
        }
        .flag-line-cell{
            width: 80%;
            .flag-line{
                height: 3px;
                background-color: rgba(255,255,255,0.2);
            }
        }
        .flag-line-time-cell{
            width: 130px;

            .flag-line-time{

                position: relative;
                top: 3px;
                color: rgba(255,255,255,0.6);
            }
        }
        &.hidden-flag-line{
            opacity:0;
            /*display: none;*/
        }
        &.show-flag-line{
            opacity:1;
            /*display: table;*/
        }
    }


</style>
