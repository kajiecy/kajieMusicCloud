<template>
    <div class="">

        <button @click="buttonClickEvent()">点我！{{selfCount}}</button>
        <br>
        <button @click="successFlag=!successFlag">切换状态{{successFlag}}</button>
    </div>
</template>


<script lang="ts">

    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';

    @Component({
        components: {
        },
    })
    export default class TestPage extends Vue {
        successFlag:boolean = true;
        selfCount:number = 0;
        promise = ()=>{
            console.log(this);
            console.log('promise内部this',this);
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    if (this.successFlag){
                        this.$forceUpdate();
                        return resolve("成功");
                    } else {
                        return reject("失败");
                    }
                },1000);
            });
        };
        buttonClickEvent(){
            console.log('vue中的this',this);
            this.promise().then(value => {
                this.selfCount++;
                console.dir(value);
            }).catch(error=>{
                console.dir(error);
            }).finally(()=>{
                console.log('结束了');
            })
        }
        mounted(){
            {
                // console.log("开始执行");
                // this.promise().then(value => {
                //     this.selfCount++;
                //     console.dir(value);
                // }).catch(error=>{
                //     console.dir(error);
                // }).finally(()=>{
                //     console.log('结束了');
                // })
            }
            let post = (url:string,second:number) => {
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        if(url==='www.baidu.com'||url==='www.baidu.com2'){
                            resolve('传输成功'+url);
                        }else {
                            reject('通信失败')
                        }
                    },second)
                })
            }
            const getUserInfo = post('www.baidu.com',1000).then(userInfo=>{
                console.log(userInfo)
                return userInfo;
            }).then(param=>{
                return `${param}-二次加工`
            });
            const getCompanyInfo = post('www.baidu.com2',2000).then(companyInfo=>{
                console.log(companyInfo)
                return companyInfo;
            });
            Promise.all([getUserInfo,getCompanyInfo]).then((result)=>{
                console.log(`userInfo`,result);
                // console.log(`companyInfo`,companyInfo);
            })
        }
    }
</script>

<style scoped>

</style>
