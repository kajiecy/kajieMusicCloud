<template>
    <div class="input-out" :class='initStatus===false?"textcenter":"textleft"'>
        <i class="iconfont icon-sousuo1"></i>
        <!--<span>你瞒我瞒 - 陈伯宇</span>-->
        <input ref="innerInput" class="self-input" type="text" :placeholder="$store.getters.getInputRecommend">
    </div>
</template>

<script>
    export default {
        name: "KajieInputEllipse",
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {},
        computed: {},
        components: {}
    }
</script>

<style scoped>

</style>
