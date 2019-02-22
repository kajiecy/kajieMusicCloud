<template>
    <div class="component-main-view">
        <div class="swiper-container swiper-main">
            <div class="swiper-wrapper wrapper-main">
                <div class="swiper-slide">
                    <div class="swiper-slide-content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';
    // @ts-ignore
    import Swiper from 'swiper';

    @Component({
        components: {
            Swiper,
        }
    })
    export default class KajieScroll extends Vue{
        swiperMain:any = null;
        mounted() {
            // let _vm = this;
            // _vm.swiperMain = new Swiper('.swiper-main', {
            //     resistanceRatio : 0,//滑动到尽头时禁止在滑动
            //     iOSEdgeSwipeDetection : true,
            //     watchSlidesProgress : true,
            // });
        }
    }
</script>

<style scoped>
    .component-main-view{
        height: 100%;
    }
    .swiper-main{
        height: 100%;
        position: relative;
    }
    .wrapper-main{
        height: 100%;
        width: 100%;
    }
    .swiper-slide-content{
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling : touch
    }
</style>
