<template>
    <div class="lyrics-body">
        <div class="swiper-container swiper-main">
            <div class="swiper-wrapper wrapper-main">
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
                <div class="swiper-slide">
                    <span class="lyrics-line">Slide 1</span>
                </div>
            </div>
        </div>
        <div class="flag-line-body dis_table" :class="flagLineStatue===true?'show-flag-line':'hidden-flag-line'">
            <div class="dis_table_cell play-icon-cell">
                <div class="play-icon"></div>
            </div>
            <div class="dis_table_cell flag-line-cell">
                <div class="flag-line"></div>
            </div>
            <div class=" dis_table_cell flag-line-time-cell">
                <div class="flag-line-time">05:39</div>
            </div>
        </div>
    </div>

</template>

<script  lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject}from 'vue-property-decorator';
    import Swiper from 'swiper';

    @Component({
        components: {
            Swiper,
        }
    })
    export default class LyricsShow extends Vue{
        swiperMain:any = null;
        flagLineStatue:boolean = false;

        mounted() {
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

                freeModeMomentumVelocityRatio:0.3,

                on: {
                    touchStart: function(event){
                        console.log('touchStart事件触发了;');
                        _vm.flagLineStatue = true;
                    },
                    slideChangeTransitionEnd: function(event){
                        console.log('slideChangeTransitionEnd事件触发了;');
                        setTimeout(function () {
                            _vm.flagLineStatue = false;
                        },1500);

                    },
                },
            });
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
                color: rgba(255,255,255,0.6);
                font-size: 43px;
            }
        }
    }
    .flag-line-body{
        position: relative;
        top: -735px;
        width: 100%;
        transition: all 750ms;
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


    }
    .hidden-flag-line{
        opacity:0;
        /*display: none;*/
    }
    .show-flag-line{
        opacity:1;
        /*display: table;*/
    }
</style>
