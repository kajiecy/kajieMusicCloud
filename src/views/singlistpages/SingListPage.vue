<template>
    <div class="singListParent" style="">

    </div>
</template>

<script>
    import KajieInputSimple from '@/components/KajieInputSimple.vue';

    export default {
        name: 'SingListPage',
        data() {
            return {

            }
        },
        created() {

        },
        mounted() {

        },
        watch: {

        },
        methods: {

        },
        computed: {

        },
        components: {

        },
        beforeRouteLeave (to, from, next) {
            this.$store.commit('setBodyBackImg','');
            next();
        }
    }
</script>

<style scoped>
    .myloaddiv{
        min-height: 100%;
    }
    .singListParent{
        height: calc( 100% - 130px );
    }
    .search-songlist{
        width: calc(95% - 100px);
        margin: 0 auto;
        border-radius: 50px;
        padding: 0 50px;
        background-color: rgba(255,255,255,0.3);
    }
</style>
