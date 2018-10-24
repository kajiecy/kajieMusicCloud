<template>
    <header
            class="kajie-header"
            :class="{ 'fixed-top': fixed }">
        <div class="dis_table wd100 kajie-header">
            <div class="dis_table_cell kajie-header-button" :class='headerStatus===false?"wd15":"wd5"'>
                <template v-if="headerStatus===false">
                    <slot name="left"></slot>
                </template>
            </div>
            <div class="dis_table_cell kajie-header-title" :class='headerStatus===false?"wd70":"wd80"'>
                <div class="title-inner" :class='headerStatus===false?"":"pl20"'>
                    <template v-if="headerStatus===false">
                        <slot name="title"></slot>
                    </template>
                    <template v-else>
                        <kajie-input></kajie-input>
                    </template>
                </div>
            </div>
            <div class="dis_table_cell kajie-header-button wd15">
                <template v-if="headerStatus===false">
                    <slot name="right"></slot>
                </template>
                <template v-else>
                    <div class="cancelBtn" @click="headerStatus=false">
                        取消
                    </div>
                </template>
            </div>
        </div>
        <!--search-masking-->
        <div class="search-masking222" style=""></div>
        <div class="search-masking" v-show="headerStatus===true" style="">
            <div>
                <div class="search-masking-title hairlines">
                    按歌手搜索
                    <i class="iconfont icon-you"></i>
                    <span class="search-masking-title-img">
                        <img src="http://qiniu.kajie88.com/28913648.jpg" width="100%" height="100%">
                    </span>
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
            height:String,
        },
        data() {
            return {
                headerStatus:true,
            };
        },
        created() {

        },
        mounted() {



        },
        watch: {},
        methods: {
            showInput(){

            }
        },
        computed: {},
        components: {
            KajieInput
        }
    };
</script>

<style scoped>
    .fixed-top{
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .kajie-header{
        width: 100%;
        height: 130px;
    }
    .kajie-header-button{
        flex: 0.2;
        text-align: center;
    }
    .wd5{
        width: 5%;
    }
    .cancelBtn{
        color: white;
        text-align: center;
    }
    .dis_table_cell{
        transition: all 0.4s;
    }
    .title-inner{
        border-radius: 45px;
        background-color: #E0635C;
        border: 1px solid #DC524B;
    }
    .search-masking{
        position: relative;
        top: 0;
        z-index: 3 ;
        width: 100%;
        height: calc(100vh - 130px - 170px);
        background-color: #ffffff;
    }
    .search-masking222{
        z-index: 1 ;
    }
    .search-masking-title{
        font-size: 40px;
        padding: 30px;
    }
    .search-masking-title .icon-you{
        font-size: 18px;
        color: #AAAAAA;
    }
    .hairlines{
        border-bottom: 1px solid #F0F0F0;
    }
    .search-masking-title-img{
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 20px;
        overflow: hidden;
    }
</style>
