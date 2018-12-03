<template>
    <div class="main">
        <div class="header">
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
            <div>头部展示内容-------------</div>
        </div>
        <div class="auto_fixed" :class="auto_fixed">自动粘滞固定头部，需要一直展示的</div>
        <div class="auto_fixed_fake" :style="{display: auto_fixed.fixed ? 'block':'none'}"></div>
        <div class="content">
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
            <div>
                tabs内部内容，最帅程序员专享受------我的最爱--李易峰
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "nianzhi",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                auto_fixed: {
                    fixed: false
                }
            }
        },
        created() {

        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('scroll', this.onScroll)
            })
        },
        watch: {},
        methods: {
            onScroll(){
                let scrolled = document.documentElement.scrollTop || document.body.scrollTop
                let header_height = null
                if(document.getElementsByClassName('header')[0]){
                    header_height = document.getElementsByClassName('header')[0].offsetHeight
                }
                console.log('滚动的距离:'+scrolled,'头部的高度:'+ header_height)
                this.auto_fixed = {
                    auto_fixed: true,
                    fixed: scrolled >= header_height
                }
            }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped>

</style>
