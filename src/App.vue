<template>
  <div id="app">
    <!--controls-->
    <audio  ref="myPlayer" src=""></audio>
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
  @import "//at.alicdn.com/t/font_843329_78jn9ni79si.css";
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
