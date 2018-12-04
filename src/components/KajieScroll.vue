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

<script>
    import Swiper from 'swiper';
    export default {
        name: "KajieScroll",
        data() {
            return {
                swiperMain:null,
            }
        },
        created() {

        },
        mounted() {
            let _vm = this;
            // _vm.swiperMain = new Swiper('.swiper-main', {
            //     resistanceRatio : 0,//滑动到尽头时禁止在滑动
            //     iOSEdgeSwipeDetection : true,
            //     watchSlidesProgress : true,
            // });
        },
        watch: {},
        methods: {},
        computed: {},
        components: {
            Swiper,
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
