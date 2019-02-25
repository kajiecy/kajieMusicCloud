<template>
    <div>
        <img src="http://qiniu.kajie88.com/recommendSong5.jpg">
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';
    @Component
    export default class SingPlayer extends Vue{
        singData:any = {
            id: 1,
            name: '爱如潮水',
            singerName: '张信哲',
            specialName: '张信哲精选',
            coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
            hasMv: true,
            isSq: true
        }
        get singId(){return this.$route.query.id}
    }
</script>

<style scoped>

</style>
