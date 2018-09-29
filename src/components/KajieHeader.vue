<template>
    <header
            class="mint-header kajie-header"
            :class="{ 'fixed-top': fixed }">
        <div class="mint-header-button is-left">
            <slot name="left"></slot>
        </div>
        <div class="mint-header-title" >
            <slot name="title"></slot>
        </div>
        <div class="mint-header-button is-right">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
    export default {
        name: "KajieHeader",
        props: {
            fixed: Boolean,
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
    .fixed-top{
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .kajie-header{
        width: 100%;
    }
</style>