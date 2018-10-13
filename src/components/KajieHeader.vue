<template>
    <header
            class="kajie-header"
            :class="{ 'fixed-top': fixed }">
        <div class="dis_table wd100 kajie-header">
            <div class="dis_table_cell kajie-header-button wd15">
                <slot name="left"></slot>
            </div>
            <div class="dis_table_cell kajie-header-title" >
                <slot name="title"></slot>
            </div>
            <div class="dis_table_cell kajie-header-button wd15">
                <slot name="right"></slot>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "KajieHeader",
        props: {
            fixed: Boolean,
            height:String,
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
        height: 130px;
    }
    .kajie-header-button{
        flex: 0.2;
        text-align: center;
    }
</style>
