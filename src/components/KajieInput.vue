<template>
    <div class="input-out" :class='initStatus===false?"textcenter":"textleft"'>
        <i class="iconfont icon-sousuo1"></i>
        <!--<span>你瞒我瞒 - 陈伯宇</span>-->
        <input ref="innerInput" class="self-input" type="text" :placeholder="$store.getters.getInputRecommend">
    </div>
</template>

<script>
    export default {
        name: "KajieInput",
        data() {
            return {
                initStatus:false,
            }
        },
        created() {

        },
        mounted() {
            //组件加载好之后 将样式 从center 改为 left 并使 input 窗获得焦点
            this.initStatus = true;
            // console.log(this.$refs)
            this.$refs.innerInput.focus();
        },
        watch: {},
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped>
    .input-out{
        /*font-size: 48px;*/
        /*line-height: 90px;*/
        /*height: 90px;*/
        /*border-radius: 45px;*/
        /*background-color: #E0635C;*/
        /*border: 1px solid #DC524B;*/
        /*color: #EEAFA9;*/
        /*border: 1px solid #000000;*/
        transition: all 0.5s;

    }
    .icon-sousuo1{
        font-size: 40px;
        line-height: 90px;
        display: inline-block;
        height: 90px;
        margin-right: 20px;
        color: #EEAFA9;
    }
    .input-out span{
        font-size: 40px;
        line-height: 90px;
        display: inline-block;
        height: 90px;
    }
    .self-input{
        font-size: 40px;
        line-height: 90px;
        width: calc(100% - 120px);
        background-color: rgba(224,99,92,0);
        border: 0 solid #ffffff;
        color: #EEAFA9;
    }
    .self-input:focus{
        border: 0 solid #ffffff;
    }
    .self-input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:    #EEAFA9;
    }
    .self-input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #EEAFA9;
        opacity:  1;
    }
    .self-input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #EEAFA9;
        opacity:  1;
    }
    .self-input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color:    #EEAFA9;
    }
    .self-input::-ms-input-placeholder { /* Microsoft Edge */
        color:    #EEAFA9;
    }

</style>
