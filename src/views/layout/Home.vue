<template>
    <div>
        <kajie-header :fixed="true">
            <div slot="left">
                <i class="iconfont icon-microphoneicon" style="font-size: 20px"></i>
            </div>
            <div slot="title">
                卡杰云音乐
            </div>
            <div slot="right">
                <i class="iconfont icon-yinle" style="font-size: 20px"></i>
            </div>
        </kajie-header>
        <router-view />
    </div>
</template>


<script>
    import KajieHeader from '@/components/KajieHeader.vue';

    export default {
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
        components: {
            KajieHeader
        }
    };
</script>
<style>

</style>