import {playingMode} from '@/enum/playerEnums.ts';
import commonUtils from '@/util/CommonUtil.ts';

const player = {
    state: {
        // 歌曲的基本信息☆
        singData : {
            // id: 1,
            // name: '爱如潮水',
            // singerName: '张信哲',
            // specialName: '张信哲精选',
            // coverImg: '',
            // coverImg: '@/assets/image/defaultBackgroundImg.jpg',
            // songSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.mp3',
            // lrcSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.lrc',
            // hasMv: true,
            // isSq: true,
            // // 用来表示歌曲的 喜欢状态
            // userLove:false,
        },
        // 歌曲的播放状态
        playingState:false,
        // 当前的播放模式
        nowMode:0,
        // 三种播放模式 单曲循环 列表循环 随机播放
        playingMode,
        // 播放器的监听器
        playerWatcher:null,
        // 歌曲的播放状态
        playStatus:{
            nowTimeNum:0,
            sumTimeNum:0,
            ended:false,
        },
        playerEntity:null,
        // 歌词内容
        lrcContent:[],
    },
    getters: {
        getSingData(state: any){
            return state.singData;
        },
        getPlayingState(state: any){
            return state.playingState;
        },
        getNowMode(state: any){
            return state.nowMode;
        },
        getPlayingMode(state: any){
            return state.playingMode;
        },
        getPlayerWatcher(state: any){
            return state.playerWatcher;
        },
        getPlayStatus(state: any){
            return state.playStatus;
        },
        getPlayingModeIcon(state: any){
            return state.playingMode[state.nowMode]!==null?state.playingMode[state.nowMode].icon:'';
        },
        getNowPlayTime:(state) => ({needFormat=false}) => {
            if(needFormat===true){
                return commonUtils.formatSecond(state.playStatus.nowTimeNum);
            }else {
                return state.playStatus.nowTimeNum;
            }
        },
        getSumTimeNum:(state) => ({needFormat=false}) => {
            if(needFormat===true){
                return commonUtils.formatSecond(state.playStatus.sumTimeNum);
            }else {
                return state.playStatus.sumTimeNum;
            }
        },
        getPlayerEntity(state: any): HTMLMediaElement{
            return state.playerEntity;
        }
    },
    mutations: {
        // 播放器控件加载好后调用次函数将 控件对象存储到内存中并添加相应的监听
        setPlayerEntity(state: any,playerEntity: HTMLMediaElement){
            state.playerEntity = playerEntity;
            playerEntity.addEventListener('canplay', (event)=>{
                console.log("canplay")
                state.playStatus.sumTimeNum = playerEntity.duration;
            });
            playerEntity.addEventListener('canplaythrough', (event)=>{
                console.log("canplaythrough")
                state.playStatus.sumTimeNum = playerEntity.duration;
            });
        },

        setSingData(state: any,singData: any){
            state.singData = singData;
            console.log('改变了',state.playerEntity.src);
            state.playerEntity.src = singData.songSrc;

            // 从歌词数据中 加载歌词内容
            ajaxGetHTML(state.singData.lrcSrc).then((result)=>{
                state.lrcContent = result;
            }).catch((error)=>{
                // console.error(error);
                state.lrcContent = [{timeStr:'00:00',timeNum:0,lrcLine:'歌词资源加载失败'}];
            })
        },
        // 控制 喜欢的点击操作
        changeLoveStatus(state: any){
            state.singData.userLove = !state.singData.userLove;
        },
        // 播放暂停按钮的处理逻辑 获取audio控件 判断其状态执行 播放或暂停操作
        touchPassButtonEvent(state: any){
            console.log(state.playerEntity.src)
            if(state.playerEntity.src){
                state.playingState = !state.playingState;
                if(state.playerEntity.paused===true){
                    state.playerEntity.play();
                    watchPlayingState(true,state.playerEntity,state);
                }else {
                    state.playerEntity.pause();
                    watchPlayingState(false,state.playerEntity,state);
                }
            }
        },
        // 改变歌曲的播放模式
        changePlayMode(state: any){
            if(++state.nowMode>=state.playingMode.length){
                state.nowMode = 0;
            }
        },
        setCurrentTime(state: any,rate: number){
            const currentTime = state.playStatus.sumTimeNum * rate;
            state.playStatus.nowTimeNum = _.round(currentTime,2);
        },
        changePlayTime(state: any){
            state.playerEntity.currentTime = state.playStatus.nowTimeNum;
        }
    },
};
function watchPlayingState(newValue: boolean,playerEntity: any,state: any){
    // 如果状态变为 true 启动一个 循环器 轮询播放状态
    if(newValue===true){
        state.playerWatcher = window.setInterval(()=>{
            // console.log('播放时长',playerEntity.currentTime);
            // 当前播放时长
            state.playStatus.nowTimeNum = playerEntity.currentTime;
            // 歌曲的总时长
            state.playStatus.sumTimeNum = playerEntity.duration	;
            // 当前歌曲是否结束
            state.playStatus.ended = playerEntity.ended;
            // 根据播放时间，移动进度条
            const rate = parseFloat((state.playStatus.nowTimeNum/state.playStatus.sumTimeNum).toFixed(3));
            const el = <any>document.querySelector('.process-point');
            const limitLine = <any>document.querySelector('.process-line-out');
            const completeLine = <any>document.querySelector('.complete-line');
            const l = rate*(limitLine.offsetWidth-el.offsetWidth);
            completeLine.style.right = `calc( 100% - ${l}px)`;
            el.style.left = `${l}px`;
        },1000);
    }else {
        window.clearInterval(state.playerWatcher);
    }
}

/* 输出歌词信息   webURL 是 歌词存放的路径 或者歌词下载的路径   */
function ajaxGetHTML(webURL) {
    return new Promise((resolve: any,reject: any)=>{
        const url = webURL;
        let xmlhttp;
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {}
        }
        if (!xmlhttp) xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = ()=>{
            if (xmlhttp.readyState === 4) {
                const s = xmlhttp.responseText;
                if(s){
                    const lrcReg = /\[(([0-9]+):([0-9]+).([0-9]+))](.[^\[\]]*)/g;
                    let result = lrcReg.exec(s);
                    const lrcFormat = [];
                    while(result){
                        let lineFormat = {timeStr:'',timeNum:0,lrcLine:''};
                        lineFormat.timeStr = result[1];
                        lineFormat.lrcLine = result[5];
                        lineFormat.timeNum = parseFloat(parseInt(result[2])*60+parseInt(result[3])+'.'+result[4]);
                        lrcFormat.push(lineFormat);
                        result = lrcReg.exec(s);
                    }
                    resolve(lrcFormat);
                }else {
                    reject('歌词资源加载失败');
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    });
}
export default player;
