import Vue from 'vue';
import store from '@/store';



export default {
    init(){
        // v-dialogDrag: 弹窗拖拽
        Vue.directive('playPointDrag', {
            bind(el, binding, vnode, oldVnode) {
                // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
                const sty = el.currentStyle || window.getComputedStyle(el, null);
                let rate = 0;
                el.ontouchstart = (e) => {
                    const limitLine = <any>document.querySelector('.process-line-out');
                    const completeLine = <any>document.querySelector('.complete-line');
                    // 触摸时，计算当前元素距离可视区的距离
                    const disX = limitLine.offsetLeft;
                    document.ontouchmove = (event: any)=>{
                        if((limitLine.offsetLeft<=el.offsetLeft)&&((el.offsetLeft+el.offsetWidth)<=(limitLine.offsetLeft+limitLine.offsetWidth))){
                            // 通过事件委托，计算移动的距离
                            const l = event.touches[0].clientX - disX - el.offsetWidth/2;
                            if((limitLine.offsetLeft<=(limitLine.offsetLeft+l))&&(limitLine.offsetLeft+l+el.offsetWidth)<=(limitLine.offsetLeft+limitLine.offsetWidth)){
                                // 移动当前元素
                                completeLine.style.right = `calc( 100% - ${l}px)`;
                                el.style.left = `${l}px`;
                                console.log(`width:${limitLine.offsetWidth},right:${l},rate:${parseFloat((l/(limitLine.offsetWidth-el.offsetWidth)).toFixed(3))}`);
                                rate = parseFloat((l/(limitLine.offsetWidth-el.offsetWidth)).toFixed(3));
                                store.commit('setCurrentTime',rate);
                            }
                        }
                    };
                    document.ontouchend = (e)=>{
                        // const limitLine = <any>document.querySelector('.process-line-out');
                        // const completeLine = <any>document.querySelector('.complete-line');
                        // 触摸结束时 计算移动的百分比 将播放的歌曲切换到此处
                        store.commit('changePlayTime');
                        document.ontouchmove = null;
                        document.ontouchend = null;
                    };
                }
            }
        })
    }
}
