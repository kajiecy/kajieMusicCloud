## CSS Animation 学习总结 ##

Animation 属性通过控制document的样式来实现动画效果。相比于transition的优势是Animation可以通过
`@keyframes`属性来定义关键帧，从而能实现更多更复杂的效果。
> animation使用起来看似很简单但如何确定关键帧，使动画看起来更加生动无违和感、多个动画组的联动才是我们真正值得思考的问题。

### 语法 ###
> animation: name duration timing-function delay iteration-count direction;

| 值 | 描述 | 示例 |
| :-------| :------ | :------ |
| animation-name | 规定需要绑定到选择器的 keyframe 名称。 | animation-name: myAnimation; |
| animation-duration | 	规定完成动画所花费的时间，以秒或毫秒计。 | animation-duration:2s; |
| animation-timing-function | 规定动画的速度曲线。 | animation-timing-function: linear; |
| animation-delay | 	规定在动画开始之前的延迟。 | animation-delay:2s; |
| animation-iteration-count | 	规定动画应该播放的次数。 | animation-iteration-count:n/infinite; |
| animation-direction | 规定是否应该轮流反向播放动画。 | animation-direction: normal/alternate; |

---
- `animation-timing-function` 中value的枚举

| 值 | 描述 |
| :-------| :------ |
| linear | 动画从头到尾的速度是相同的。|
| ease | 默认。动画以低速开始，然后加快，在结束前变慢。|
| ease-in | 动画以低速开始。|
| ease-out | 动画以低速结束。|
| ease-in-out | 动画以低速开始和结束。|
| cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。|


<p><iframe style="width: 100%; height: 120px;" src="https://demo.xiaohuochai.site/css/transition/t18.html" frameborder="0" width="320" height="240"></iframe></p>


### 代码展示
```vue
        <div class="right-icon textcenter">
            <div class="dummydiv dummy1" class='dummy1-play'></div>
            <div class="dummydiv dummy2" class='dummy2-play'></div>
            <div class="dummydiv dummy3" class='dummy3-play'></div>
            <div class="dummydiv dummy4" class='dummy4-play'></div>
        </div>
        <style>
            .right-icon{
                height: 70px;
                display: flex;
                align-items:flex-end;
                justify-content:center;
            }
            .textcenter{
                text-align: center;
            }
            .dummydiv{
                height: 70px;
                width: 8px;
                background-color: #ffffff;
                border: 0 solid white;
                margin: 0 5px;
                border-radius: 10px;
            }
            .dummy1-play{
                animation:dum1Ani1 1s linear infinite;
                -webkit-animation:dum1Ani1 1s linear infinite; /*Safari and Chrome*/
            }
            .dummy2-play{
                animation:dum1Ani2 1s linear infinite;
                -webkit-animation:dum1Ani2 1s linear infinite; /*Safari and Chrome*/
            }
            .dummy3-play{
                animation:dum1Ani3 1s linear infinite;
               -webkit-animation:dum1Ani3 1s linear infinite; /*Safari and Chrome*/
            }
            .dummy4-play{
                animation:dum1Ani4 1s linear infinite;
                -webkit-animation:dum1Ani4 1s linear infinite; /*Safari and Chrome*/
            }
            @keyframes dum1Ani1
            {
                from {height:40px;}
                33.3% { height: 60px;}
                83.3% { height: 30px;}
                to {height:40px;}
            }
            @keyframes dum1Ani2
            {
                from {height:60px;}
                33.3% { height: 40px;}
                83.3% { height: 70px;}
                to {height:60px;}
            }
            @keyframes dum1Ani3
            {
                from {height:50px;}
                33.3% { height: 70px;}
                83.3% { height: 40px;}
                to {height:50px;}
            }
            @keyframes dum1Ani4
            {
                from {height:50px;}
                33.3% { height: 30px;}
                83.3% { height: 60px;}
                to {height:50px;}
            }
            @-webkit-keyframes dum1Ani1 /*Safari and Chrome*/
            {
                from {height:40px;}
                33.3% { height: 60px;}
                83.3% { height: 30px;}
                to {height:40px;}
            }
            @-webkit-keyframes dum1Ani2 /*Safari and Chrome*/
            {
                from {height:60px;}
                33.3% { height: 40px;}
                83.3% { height: 70px;}
                to {height:60px;}
            }
            @-webkit-keyframes dum1Ani3 /*Safari and Chrome*/
            {
                from {height:50px;}
                33.3% { height: 70px;}
                83.3% { height: 40px;}
                to {height:50px;}
            }
            @-webkit-keyframes dum1Ani4 /*Safari and Chrome*/
            {
                from {height:50px;}
                33.3% { height: 30px;}
                83.3% { height: 60px;}
                to {height:50px;}
            }
        </style>
```
