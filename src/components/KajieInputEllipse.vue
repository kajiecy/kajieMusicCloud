<template>
    <div class="kajie-input-body">
        <div class="input-out" @click="doFocusInput()" :class="isFocus?'input-out-focus':''">
            <i class="iconfont icon-sousuo1"></i>
            <!--<span>你瞒我瞒 - 陈伯宇</span>-->
            <input ref="innerInput"
                   type="text"
                   class="self-input"
                   :class="isFocus?'self-input-focus':''"
                   :placeholder="placeholder"
                   @focus="inputFocus()"
                   @blur="inputBlur()"/>
        </div>
        <div class="input-cancel" @click="inputBlur()" :class="isFocus?'input-cancel-focus':''">
            取消
        </div>
    </div>

</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';

    @Component
    export default class KajieInputEllipse extends Vue{
        isFocus:boolean = false;
        placeholder:string = '搜索歌单内歌曲';
        doFocusInput(){
            setTimeout(()=>{
                //组件加载好之后 将样式 从center 改为 left 并使 input 窗获得焦点
                // @ts-ignore
                this.$refs.innerInput.focus();
                new Element()
            },100);
        }
        inputFocus(){
            this.isFocus = true;
        }
        inputBlur(){
            this.isFocus = false;
        }
    }
</script>

<style scoped>
    .kajie-input-body{
        width: 100%;
        text-align: left;
    }
    .input-out{
        text-align: left;
        background-color: rgba(255,255,255,0.3);
        border-radius: 50px;
        line-height: 86px;
        height: 86px;
        transition: all 500ms;
        width: calc(100% - 300px);
        padding-left: 300px;
        display: inline-block;
    }
    .input-out-focus{
        text-align: left;
        padding-left: 40px;
        width: 80%;
    }
    .input-cancel{
        transition: all 500ms;
        width: 0;
        display: none;
        text-align: center;
        color: rgba(255,255,255,0.8);
        font-size: 35px;
    }
    .input-cancel-focus{
        display: inline-block;
        text-align: center;
        width: 15%;
    }
    .input-out .iconfont{
        color: rgba(255,255,255,0.7);
    }
    .self-input{
        width: 300px;
        color: rgba(255,255,255,0.7);
        background-color: rgba(0,0,0,0);
        border: 0;
        line-height: 86px;
        display: inline-block;
        transition: all 500ms;
    }
    .self-input-focus{
        width: calc(100% - 120px);
    }
    .self-input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: rgba(255,255,255,0.7);
    }
    .self-input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: rgba(255,255,255,0.7);
        opacity:  1;
    }
    .self-input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: rgba(255,255,255,0.7);
        opacity:  1;
    }
    .self-input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgba(255,255,255,0.7);
    }
    .self-input::-ms-input-placeholder { /* Microsoft Edge */
        color: rgba(255,255,255,0.7);
    }
</style>
