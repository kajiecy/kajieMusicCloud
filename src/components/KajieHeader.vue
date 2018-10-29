<template>
    <header
            class="kajie-header"
            :class="{ 'fixed-top': fixed }">
        <div class="dis_table wd100 kajie-header">
            <div class="dis_table_cell kajie-header-button" :class='$store.getters.getHeaderStatus===false?"wd15":"wd5"'>
                <template v-if="$store.getters.getHeaderStatus===false">
                    <slot name="left"></slot>
                </template>
            </div>
            <div class="dis_table_cell kajie-header-title" :class='$store.getters.getHeaderStatus===false?"wd70":"wd80"'>
                <div class="" :class='titleInnerClass'>
                    <template v-if="$store.getters.getHeaderStatus===false">
                        <slot name="title"></slot>
                    </template>
                    <template v-else>
                        <kajie-input></kajie-input>
                    </template>
                </div>
            </div>
            <div class="dis_table_cell kajie-header-button wd15">
                <template v-if="$store.getters.getHeaderStatus===false">
                    <slot name="right"></slot>
                </template>
                <template v-else>
                    <div class="cancelBtn" @click="$store.commit('setHeaderStatus',false)">
                        取消
                    </div>
                </template>
            </div>
        </div>
        <!--search-masking
        发现列表 点击search的input框的蒙版
        -->
        <div class="search-masking222" style=""></div>
        <div class="search-masking" v-show="$store.getters.getHeaderStatus===true" style="">
            <div class="">
                <div class="search-masking-title hairlines">
                    <div class="search-masking-title-title">
                        按歌手搜索
                        <i class="iconfont icon-you"></i>
                    </div>
                    <div class="singers-div">
                        <div v-for="(item,key) in $store.getters.getHotSingerImg4Search" :key="key" class="search-masking-title-img-out">
                            <span class="search-masking-title-img">
                                <img :src="item.singerImg" width="100%" height="100%">
                            </span>
                        </div>
                    </div>
                </div>
                <div class="search-masking-body">
                    <div class="search-masking-body-title">
                        热门搜索
                    </div>
                    <div class="search-tag-container">
                        <div v-for="(item,index) in $store.getters.getHotSingList4Search" :key="index" class="search-tag">
                            {{item.name}}
                        </div>
                    </div>

                    <div class="search-masking-body-title">
                        <div class="title-left">
                            历史搜索
                        </div>
                        <div class="title-right">
                            <i class="iconfont icon-lajixiang"></i>
                        </div>
                    </div>
                    <div class="search-tag-container">
                        <div v-for="(item,index) in $store.getters.getUserSearchList" :key="index" class="search-tag">
                            {{item.name}}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import KajieInput from '@/components/KajieInput.vue';

    export default {
        name: 'KajieHeader',
        props: {
            fixed: Boolean,
            height: String,
        },
        data() {
            return {
                // headerStatus: false,
            };
        },
        created() {

        },
        mounted() {


        },
        watch: {},
        methods: {
            showInput() {

            }
        },
        computed: {
            titleInnerClass(){
                let className = '';
                if(this.$route.name==='find'){
                    className += 'title-inner ';
                }
                if(this.$store.getters.getHeaderStatus===true){
                    className += 'pl20';
                }
                return className;
            }
        },
        components: {
            KajieInput
        }
    };
</script>

<style scoped>
    .fixed-top {
        position: fixed;
        top: 0;
        z-index: 999;
    }

    .kajie-header {
        width: 100%;
        height: 130px;
    }

    .kajie-header-button {
        flex: 0.2;
        text-align: center;
    }

    .wd5 {
        width: 5%;
    }

    .cancelBtn {
        color: white;
        text-align: center;
    }

    .dis_table_cell {
        transition: all 0.4s;
    }

    .title-inner {
        border-radius: 45px;
        background-color: #E0635C;
        border: 1px solid #DC524B;
    }

    .search-masking {
        position: relative;
        top: 0;
        z-index: 3;
        width: 100%;
        height: calc(100vh - 130px - 170px);
        background-color: #ffffff;
    }

    .search-masking222 {
        z-index: 1;
    }

    .search-masking-title {
        font-size: 40px;
        padding: 20px 30px;
        display: -webkit-flex; /* Safari */
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .search-masking-title .icon-you {
        font-size: 18px;
        display: inline-block;
        margin-left: 15px;
        color: #AAAAAA;
    }

    .hairlines {
        border-bottom: 1px solid #F0F0F0;
    }

    .search-masking-title-img {
        display: inline-block;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        overflow: hidden;
        border: 3px solid #ffffff;
    }
    .search-masking-title-img-out{
        display: inline-block;
        width: 40px;
    }
    .singers-div {
        padding-right: 40px;
    }
    .search-masking-title-title{
        display: flex;
        font-weight: bolder;
        align-items: center;
    }
    .search-masking-body-title{
        font-size: 40px;
        padding: 20px 30px;
        font-weight: bolder;
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
    }
    .icon-lajixiang{
        color: #676767;
        font-size: 40px;
    }
    .search-tag-container{
        display: flex;
        flex-wrap:wrap;
    }
    .search-tag{
        padding: 20px;
        background-color: #EFEFEF;
        margin: 15px;
        border-radius: 60px;
    }
</style>
