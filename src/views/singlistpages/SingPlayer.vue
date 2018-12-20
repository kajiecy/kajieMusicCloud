<template>
    <div>
        <img src="http://qiniu.kajie88.com/recommendSong5.jpg">
    </div>
</template>

<script>

    export default {
        name: 'SingPlayer',
        data() {
            return {
                singData: {
                    id: 1,
                    name: '爱如潮水',
                    singerName: '张信哲',
                    specialName: '张信哲精选',
                    coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
                    hasMv: true,
                    isSq: true
                },
            }
        },
        created() {

        },
        mounted() {

        },
        watch: {},
        methods: {},
        computed: {
            singId(){return this.$route.query.id}
        },
        components: {}
    }
</script>

<style scoped>

</style>
