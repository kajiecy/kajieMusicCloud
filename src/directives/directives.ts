import Vue from 'vue';



export default {
    init(){
        // v-dialogDrag: 弹窗拖拽
        Vue.directive('playPointDrag', {
            bind(el, binding, vnode, oldVnode) {

                const limitLine = <any>document.querySelector('#process-point-inner');
                console.log('dialogDrag',limitLine);

                // const dialogHeaderEl = el.querySelector('.el-dialog__header');
                // const dragDom = el.querySelector('.el-dialog');
                // dialogHeaderEl.style.cursor = 'move';

                // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
                const sty = el.currentStyle || window.getComputedStyle(el, null);
                const limitSty = limitLine.currentStyle || window.getComputedStyle(limitLine, null);
                el.ontouchstart = (e) => {
                    // console.log('onmousedown',sty.left);
                    console.log('clientX',e.touches[0].clientX);
                    console.log('limitSty',limitLine)
                    // 触摸时，计算当前元素距离可视区的距离
                    const disX = e.touches[0].clientX;

                    document.ontouchmove = (event: any)=>{
                        console.log('onmousemove',event.touches[0].clientX);
                        // console.log('clientX',event.touches[0].clientX);

                        // 通过事件委托，计算移动的距离
                        const l = event.touches[0].clientX - disX;
                        // const t = event.clientY - disY;
                        //
                        // 移动当前元素
                        el.style.left = `${l}px`;
                        // dragDom.style.top = `${t + styT}px`;
                        //
                        // 将此时的位置传出去
                        // binding.value({x:e.pageX,y:e.pageY})
                    };
                    document.ontouchend = ()=>{
                        document.ontouchmove = null;
                        document.ontouchend = null;
                    };
                }
            }
        })
    }
}
