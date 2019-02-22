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

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';

    @Component
    export default class KajieTabbar extends Vue{
        @Prop({type: String,default:''}) private value!: string;
    };
</script>

<style scoped>

</style>
