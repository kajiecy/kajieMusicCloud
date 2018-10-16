<template>
    <div class="kajie-tabbar">


        <!--<div class="kajie-tabbar-item">-->
            <!--<div class="kajie-tabbar-item-icon">-->
                <!--<i class="iconfont iconfont-tabbar icon-pengyou1"></i>-->
            <!--</div>-->
            <!--<div class="kajie-tabbar-item-label">-->
                <!--朋友-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="kajie-tabbar-item">-->
            <!--<div class="kajie-tabbar-item-icon">-->
                <!--<i class="iconfont iconfont-tabbar icon-pengyou1"></i>-->
            <!--</div>-->
            <!--<div class="kajie-tabbar-item-label">-->
                <!--朋友-->
            <!--</div>-->
        <!--</div>-->

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "KajieTabbar",
        props: {
            value: {
                type:String,
                default(){
                    return '';
                },
            }
        },
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
