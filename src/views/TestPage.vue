<template>
    <div class="">
        <div style="width: 100%;height: 100px;border: 1px solid #2AB1F0;position: fixed;top: 0;z-index: 2;background-color: transparent">

        </div>
        <div class="img-view" style="width: 100%;height: 50vh"></div>
        11
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {

            };
        },

        methods: {

        },
        watch: {

        },
        created() {

        },

        mounted() {
        },
        components:{
        }
    };
</script>
<style scoped>
    .img-view{
        background-image: url('http://qiniu.kajie88.com/28913648.jpg');

        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        -webkit-filter: blur(25px);
        -moz-filter: blur(25px);
        -o-filter: blur(25px);
        -ms-filter: blur(25px);
        filter: blur(25px);

        position: relative;
        top: -120px;
    }
</style>
