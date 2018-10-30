<template>
    <div class="singListParent" style="">
        <mt-loadmore
                ref="singLoadPage"
                class="myloaddiv"
                :topDistance="15"
                :maxDistance="30"
                :top-method="loadTop"
                @translate-change="translateChange"
                @top-status-change="handleTopChange"
        >
            <div slot="top" class="mint-loadmore-top loadmore-loading textcenter" v-show="translate>3">
                <div class="search-songlist">
                    <kajie-input-simple></kajie-input-simple>
                </div>
            </div>
            <div v-for="(item) in 100" style="color: #D93F37">
                {{item}}
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
    import KajieInputSimple from '@/components/KajieInputSimple.vue';

    export default {
        name: "SingListPage",
        data() {
            return {
                topStatus: '',//下拉刷新页面的状态
                translate: 0,//下拉距离
                singListInfo:{
                    singListCoverImg:'',
                },
            }
        },
        created() {

        },
        mounted() {
            this.$refs.singLoadPage.translate = 30;
            this.loadPageInfo();
        },
        watch: {
            topStatus(newValue){
                console.log(newValue);
                if(newValue==='loading'){
                    // console.log()
                    setTimeout(function () {
                        document.querySelector('.mint-loadmore-content').style.transform='translate3d(0px, 0px, 0px)'
                    },100)
                }
            }
        },
        methods: {
            loadPageInfo(){
                setTimeout(()=>{
                    this.singListInfo.singListCoverImg = 'http://qiniu.kajie88.com/28913648.jpg';
                    this.$store.commit('setBodyBackImg',this.singListInfo.singListCoverImg);
                },0)
            },
            loadTop() {
                setTimeout(() => {
                    console.log("模拟一次request请求，延迟1s")
                    // this.translate = 0;
                    // this.$refs.singLoadPage.onTopLoaded();
                }, 500);
            },
            // @translate-change 当我执行 滑动操作时 总会触发此事件
            translateChange(translate) {
                const translateNum = +translate;
                this.translate = translateNum.toFixed(2);
            },
            /**
             *   top-status-change 每当 状态改变 时触发
             *   已知状态 pull 默认状态，drop 释放后执行 top-method， loading drop状态后待没有执行onTopLoaded()方法时的状态。
             */
            handleTopChange(status) {
                this.topStatus = status;
            },
        },
        computed: {
            singListId(){
                return this.$route.query.id;
            }
        },
        components: {
            KajieInputSimple,
        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('setBodyBackImg','');
            next();
        }
    }
</script>

<style scoped>
    .myloaddiv{
        min-height: 100%;
    }
    .singListParent{
        height: calc( 100% - 130px );
    }
    .search-songlist{
        width: calc(95% - 100px);
        margin: 0 auto;
        border-radius: 50px;
        padding: 0 50px;
        background-color: rgba(255,255,255,0.3);
    }
</style>
