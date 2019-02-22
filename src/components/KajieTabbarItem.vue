<template>
    <a class="kajie-tabbar-item"
       @click="clickFooter()"
       :class="{ 'is-selected': $parent.value === id }">
        <div class="kajie-tabbar-item-icon"><slot name="icon"></slot></div>
        <div class="kajie-tabbar-item-label"><slot></slot></div>
    </a>
</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';
    @Component
    export default class KajieTabbarItem extends Vue{
        @Prop({type: [String,Number],default:''}) private id!: string|number;
        clickFooter(){
            console.log(this.$parent);
            this.$parent.$emit('input', this.id);
            this.$emit('click');
        }
    };
</script>

<style scoped>
    .kajie-tabbar-item-label{
        font-size: 40px;
    }
</style>
