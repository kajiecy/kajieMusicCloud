<template>
    <mt-loadmore
            :top-method="loadTop"
            @translate-change="translateChange"
            @top-status-change="handleTopChange"
            ref="loadmore">
        <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'">↓</span>
            <span v-show="topStatus === 'loading'">加载中</span>
        </div>
    </mt-loadmore>
</template>

<script>
    export default {
        name: "nianzhi",
        data() {
            return {
                topStatus: '',
                translate: 0,
                moveTranslate: 0 //缩放比例
            }
        },
        created() {

        },
        mounted() {
        },
        watch: {},
        methods: {
            handleTopChange(status) {
                this.moveTranslate = 1;
                this.topStatus = status;
            },
            translateChange(translate) {
                const translateNum = +translate;
                this.translate = translateNum.toFixed(2);
                this.moveTranslate = (1 + translateNum / 70).toFixed(2);
            },
            loadTop() {
                setTimeout(() => {
                    this.$refs.loadmore.onTopLoaded();
                }, 1500);
            }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped>

</style>
