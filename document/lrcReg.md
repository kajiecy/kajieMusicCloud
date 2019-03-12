## 歌词的正则表达式 ##


## 实现思路 ##
```vue
        /*
            i表示的含义是忽略大小写进行匹配。
            g表示全局匹配即匹配到第一个之后不停止继续匹配。
            m表示多行匹配即遇到换行后不停止匹配继续直到被匹配字符串结束。
        */
        let reg = /\[(([0-9]+):([0-9]+).([0-9]+))](.[^\[\]]*)/g;
        let arr=reg.exec(this.str);
        let i=0;
        while(arr){
            i++;
            if(i<=4){
                console.dir(arr);
                console.log("lastIndex:"+reg.lastIndex);
                arr=this.reg.exec(this.str);
            }else{
                break;
            }
        }
```
