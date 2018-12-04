<template>
    <div style="text-align: center">
        <span class="testimg-span">
            <img id="testimg" width="140" height="140" src="@/assets/image/recommendSong5.jpg" :style="{filter: 'blur('+rangeValue/10+'px)'}">
        </span>
        <span class="testimg-span">
            <canvas id="testcanvas"  width="140" height="140"></canvas>
        </span>
        <div class="wd90">
            <mt-range
                    v-model="rangeValue"
                    :min="0"
                    :max="100"
                    :step="1"
                    :bar-height="5">
            </mt-range>
        </div>
        <div>
            值：{{rangeValue}}
        </div>
        <div class="wd90">
            注：左侧为filter样式控制的模糊效果，<br>
            右侧为stackblur.js的高斯模糊效果
        </div>
    </div>
</template>

<script>
    import * as StackBlur from 'stackblur-canvas';
    import { Range } from 'mint-ui';
    export default {
        name: "stackBlurDemo",
        data() {
            return {
                rangeValue:0,
            }
        },
        created() {

        },
        mounted() {
            this.$nextTick(function () {
                setTimeout( ()=>{
                    StackBlur.image('testimg', 'testcanvas', this.rangeValue,false);
                },100)
            });
        },
        watch: {
            rangeValue(newValue){
                StackBlur.image('testimg', 'testcanvas', newValue,false);
            }
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped>
    #testcanvas{
    }
    #testimg{
    }
    .testimg-span{
        display:inline-block;
        border: 1px solid #D93F37;
        margin: 40px 20px;
    }
    #testcanvas{
    }
</style>
