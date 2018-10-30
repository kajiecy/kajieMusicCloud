<template>
    <div class="singListParent" style="">
        传入id为：{{singListId}}
    </div>
</template>

<script>
    export default {
        name: "SingListPage",
        data() {
            return {
                singListInfo:{
                    singListCoverImg:'',
                },
            }
        },
        created() {

        },
        mounted() {
            this.loadPageInfo();
        },
        watch: {},
        methods: {
            loadPageInfo(){
                setTimeout(()=>{
                    this.singListInfo.singListCoverImg = 'http://qiniu.kajie88.com/28913648.jpg';
                    this.$store.commit('setBodyBackImg',this.singListInfo.singListCoverImg);
                },1000)
            }
        },
        computed: {
            singListId(){
                return this.$route.query.id;
            }
        },
        components: {}
    }
</script>

<style scoped>
    .singListParent{
        height: calc( 100% - 130px );
    }
</style>
