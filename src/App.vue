<template>
  <div id="app">
    <audio ref="myPlayer" src="http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.mp3"></audio>
    <router-view/>
  </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
        mounted() {
            this.$nextTick(()=>{
                this.$store.commit('setPlayerEntity',<HTMLMediaElement>this.$refs.myPlayer);
            });
        }
    }
</script>
<style>
  @import "//at.alicdn.com/t/font_843329_hz1p6meqibn.css";
  .swiper-pagination-bullet{
    width: 20px;
    height: 20px;
    background-color: #817F80;
    opacity: .9
  }
  .swiper-pagination-bullet-active{
    background-color: #D33930;
  }
  /*.swiper-header-tab-out{*/
  /*z-index: 10 !important;*/
  /*}*/
</style>
