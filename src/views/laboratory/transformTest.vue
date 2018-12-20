<template>
    <div class="" style="">
        <img id="testimg" :style="{ 'transform': transform }" src="@/assets/image/recommendSong5.jpg">
        <div class="fill">
            <div style="height: 45px;border: 1px solid #E6A23C">

            </div>
        </div>
        <div class="wd90">
            <mt-range
                    v-model="x"
                    :min="1"
                    :max="10"
                    :step="0.1"
                    :bar-height="5">
            </mt-range>
        </div>

        <div style="border: 1px solid #67C23A;height: 45px;overflow: hidden">
            <canvas id="haderCanvas" :style="{ 'transform': transform }"></canvas>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'transformTest',
        data() {
            return {
                x:1,
                y:1,
                z:1,
                headerCanvasObj:{},
            }
        },
        created() {

        },
        mounted() {


            this.$nextTick(()=>{
                setTimeout(()=>{
                    this.headerCanvasObj = document.getElementById('haderCanvas');
                    this.headerCanvasObj.getContext('2d').clearRect(0, 0, this.headerCanvasObj.width, this.headerCanvasObj.height);
                    let w = document.getElementById('testimg').naturalWidth;
                    let h = document.getElementById('testimg').naturalHeight;

                    this.headerCanvasObj.width = w;
                    this.headerCanvasObj.height = h;

                    this.headerCanvasObj.getContext('2d').drawImage(document.getElementById('testimg'), 0, 0, w, h, 0, 0, w, h); //实现放大镜
                },1000)

            });


        },
        watch: {
            x(oValue){
                this.y = oValue;
            }
        },
        methods: {},
        computed: {
            transform() {
                return 'scale3d('+this.x+', ' + this.y + ', '+ this.z +')';
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    #testimg{
        position: absolute;
        top: -140px;
        width: 100%;
        z-index: -1;
    }
    .fill{
        height: 1000px;
    }
    #haderCanvas{
        width: 100%;
    }
</style>
