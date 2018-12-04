<template>
    <kajie-scroll>
        <div class="parent-div">
            <div class="child-module module1"></div>
            <div class="child-module module2"></div>
            <div class="child-module module3"></div>
            <div class="child-module module4"></div>
            <div class="child-module module5"></div>
            <div class="child-module module5"></div>
            <div class="child-module module5"></div>
            <div class="child-module module5"></div>
        </div>
    </kajie-scroll>
</template>

<script>
    export default {
        name: "positionSticky",
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
    .parent-div{
        border: 1px solid #D93F37;
    }
    .child-module{
        height: 300px;
        margin: 20px;
        position: sticky;
        top: 20px;
    }
    .module1{
        background-color: #2AB1F0;
    }
    .module2{
        background-color: #D93F37;
    }
    .module3{
        background-color: aquamarine;
    }
    .module4{
        background-color: #FF9900;
    }
    .module5{
        background-color: lightgoldenrodyellow;
    }
</style>
