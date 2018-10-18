<template>
    <div class="kajie-tabbar-item"
       @click="$parent.$emit('input', id)"
       :class="{ 'is-selected': $parent.value === id }">
        <div class="kajie-tabbar-item-icon"><slot name="icon"></slot></div>
        <div class="kajie-tabbar-item-label"><slot></slot></div>
    </div>
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
        methods: {},
        computed: {},
        components: {}
    };
</script>

<style scoped>
    .kajie-tabbar-item-label{
        font-size: 40px;
    }
</style>
