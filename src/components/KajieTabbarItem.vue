<template>
    <a class="kajie-tabbar-item"
       @click="clickFooter()"
       :class="{ 'is-selected': $parent.value === id }">
        <div class="kajie-tabbar-item-icon"><slot name="icon"></slot></div>
        <div class="kajie-tabbar-item-label"><slot></slot></div>
    </a>
</template>

<script>
    export default {
        name: 'KajieTabbarItem',
        props: ['id'],
        data() {
            return {};
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {
            clickFooter(){
                console.log(this.$parent);
                this.$parent.$emit('input', this.id);
                this.$emit('click');
            }
        },
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .kajie-tabbar-item-label{
        font-size: 40px;
    }
</style>
