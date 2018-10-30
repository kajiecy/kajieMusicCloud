<template>
    <div>
        传入id为：{{singListId}}
    </div>
</template>

<script>
    export default {
        name: "SingListPage",
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {},
        computed: {
            singListId(){
                console.log(this.$route)
                return this.$route.query.id;
            }
        },
        components: {}
    }
</script>

<style scoped>

</style>
