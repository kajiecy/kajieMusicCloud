<template>
    <div class="kajie-tabbar">
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
    .kajie-tabbar{
        display: flex;
    }
</style>
