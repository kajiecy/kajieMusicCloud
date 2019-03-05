import {playingMode} from '@/enum/playerEnums.ts';
import commonUtils from '@/util/CommonUtil.ts';

const player = {
    state: {
        // 歌曲的基本信息☆
        singData : {
            id: 1,
            name: '爱如潮水',
            singerName: '张信哲',
            specialName: '张信哲精选',
            coverImg: 'http://qiniu.kajie88.com/recommendSong5.jpg',
            songSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.mp3',
            lrcSrc:'http://qiniu.kajie88.com/%E8%AE%B8%E4%B8%80%E9%B8%A3%20-%20%E8%99%8E%E5%8F%A3%E8%84%B1%E9%99%A9%EF%BC%88Cover%20%E8%80%81%E7%8B%BC%EF%BC%89.lrc',
            hasMv: true,
            isSq: true,
            // 用来表示歌曲的 喜欢状态
            userLove:true,
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
        }
    },
    mutations: {
        //
        setPlayerEntity(state: any,playerEntity: HTMLMediaElement){

            state.playerEntity = playerEntity;

            playerEntity.addEventListener('canplaythrough', (event)=>{
                state.playStatus.sumTimeNum = playerEntity.duration;
            });
            // console.log('buffered',playerEntity.buffered.start(0))
        },
        // 控制 喜欢的点击操作
        changeLoveStatus(state: any){
            state.singData.userLove = !state.singData.userLove;
        },
        // 播放暂停按钮的处理逻辑 获取audio控件 判断其状态执行 播放或暂停操作
        touchPassButtonEvent(state: any){
            // console.log(state.playerEntity.canPlayType())
            // if(state.playerEntity.canPlayType()){
            state.playingState = !state.playingState;
            if(state.playerEntity.paused===true){
                state.playerEntity.play();
                watchPlayingState(true,state.playerEntity,state);
            }else {
                state.playerEntity.pause();
                watchPlayingState(false,state.playerEntity,state);
            }
            // }
        },
        // 改变歌曲的播放模式
        changePlayMode(state: any){
            if(++state.nowMode>=state.playingMode.length){
                state.nowMode = 0;
            }
        },
    },
}
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
            state.playStatus.ended = playerEntity.ended	;
        },1000);
    }else {
        window.clearInterval(state.playerWatcher);
    }
}
export default player;
