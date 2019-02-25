<template>
    <div>
        <!--<img src="http://qiniu.kajie88.com/recommendSong5.jpg">-->
        {{nowTime}}
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
        get nowTime(){
            // let result = _.difference([3, 2, 1], [4,2,6]);
            let arr1 = [1, 2, 3];
            let result = _.drop(arr1);
            console.log("arr1",arr1);
            return result;
        }
    }
</script>

<style scoped>

</style>
