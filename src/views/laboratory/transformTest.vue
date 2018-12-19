<template>
    <div class="textcenter" style="margin-top: 50px">
        <img id="testimg" :style="{ 'transform': transform }" width="120" height="120" src="@/assets/image/recommendSong5.jpg">
        <div class="wd90">
            x:<mt-range
                v-model="x"
                :min="0"
                :max="100"
                :step="1"
                :bar-height="5">
            </mt-range>
        </div>

        <div class="wd90">
            y:<mt-range
                v-model="y"
                :min="0"
                :max="100"
                :step="1"
                :bar-height="5">
            </mt-range>
        </div>

        <div class="wd90">
            z:<mt-range
                v-model="z"
                :min="0"
                :max="100"
                :step="1"
                :bar-height="5">
            </mt-range>
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
            }
        },
        created() {

        },
        mounted() {

        },
        watch: {},
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

</style>
