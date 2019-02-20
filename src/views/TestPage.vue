<template>
    <div class="">
222:{{msg}}:{{getRouter}}
        <kajie-input></kajie-input>
    </div>
</template>

<!--<script type="text/babel">-->
    <!--export default {-->
        <!--data() {-->
            <!--return {-->

            <!--};-->
        <!--},-->

        <!--methods: {-->

        <!--},-->
        <!--watch: {-->

        <!--},-->
        <!--created() {-->

        <!--},-->

        <!--mounted() {-->
        <!--},-->
        <!--components:{-->
        <!--}-->
    <!--};-->
<!--</script>-->



<script lang="ts">

    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';
    import KajieInput from '@/components/KajieInput.vue';

    @Component({
        components: {
            KajieInput
        },
    })
    export default class TestPage extends Vue {
        msg:string = "测试文本222";
        get getRouter(){
            return this.$route.name;
        }
    }
</script>

<style scoped>

</style>
