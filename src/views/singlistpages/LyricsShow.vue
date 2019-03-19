<template>
    <div class="lyrics-body">
        <!--显示歌词-->
        <div class="swiper-container swiper-main">
            <div class="swiper-wrapper wrapper-main">
                <div v-for="(item,index) in $store.state.player.lrcContent" class="swiper-slide">
                    <span class="lyrics-line">{{item.lrcLine}}</span>
                </div>
            </div>
        </div>
        <!--用户对歌词进行拖动时显示当前歌词 对应的时间线 start-->
        <div class="flag-line-body dis_table" :class="flagLineStatue===true?'show-flag-line':'hidden-flag-line'">
            <!--转跳到此句 按钮-->
            <div class="dis_table_cell play-icon-cell" @click.stop="redirectsProgress()">
                <div class="play-icon"></div>
            </div>
            <!--标识线-->
            <div class="dis_table_cell flag-line-cell">
                <div class="flag-line"></div>
            </div>
            <!--当前句对应的时间-->
            <div class="dis_table_cell flag-line-time-cell">
                <div class="flag-line-time">{{lrcArriveInfo.timeStr}}</div>
            </div>
        </div>
        <!--用户对歌词进行拖动时显示当前歌词 对应的时间线 end-->
    </div>

</template>

<script  lang="ts">
    import { Component, Prop, Vue, Model, Watch, Inject}from 'vue-property-decorator';
    import Swiper from 'swiper';

    @Component({
        components: {
            Swiper,
        }
    })
    export default class LyricsShow extends Vue{
        swiperMain:any = null;// 歌词展示使用 swiper 组件
        flagLineStatue:boolean = false;// 标识时间线是否显示状态
        lrcData:any[] = [];// 处理后的歌词数据
        lrcArriveInfo = { // 当前到达的歌词信息
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
        // 加载swiper
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
                    //用户开始对歌词界面交互及显示 时间线
                    touchStart: function(event: any){
                        // console.log('touchStart事件触发了;',event);
                        _vm.flagLineStatue = true;
                    },
                    //用户停止对歌词界面交互后2.5吟唱时间线
                    touchEnd: function(){
                        // console.log('touchEnd事件触发了;');
                        setTimeout(function () {
                            _vm.flagLineStatue = false;
                        },2500);
                    },
                },
            });
        }
        // 将播放器的播放进度移动到相应位置
        redirectsProgress(){
            this.$store.commit('changePlayTime',this.lrcArriveInfo.timeNum);
        }
        // 监听歌词内容随时重新渲染
        @Watch('$store.state.player.lrcContent', {deep: false})
        watchLrcContent(newValue:any){
            // console.log('watchLrcContent',newValue);
            this.lrcData = newValue;
            this.$nextTick(()=>{
                this.loadSwiperComponent();
            })
        }
        // 监听播放行的状态 随时切换
        @Watch('$store.state.player.playStatus.lrcArriveIndex', {deep: false})
        watchLrcArriveIndex(newValue:any){
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
