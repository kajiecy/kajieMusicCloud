const app = {
    state: {
        playerStatus:true,
        hotSingList4Search:[  //用户
            {name:'李荣浩贝贝'},
            {name:'李荣浩'},
            {name:'李荣浩贝贝贝贝'},
            {name:'李荣'},
            {name:'很多字很多字很多字'},
            {name:'李荣浩贝贝'},
        ],
        hotSingerImg4Search:[
            {singerImg:'http://qiniu.kajie88.com/28913648.jpg'},
            {singerImg:'http://qiniu.kajie88.com/28913648.jpg'},
            {singerImg:'http://qiniu.kajie88.com/28913648.jpg'},
        ],
    },
    getters:{
        getPlayerStatus(state){
            return state.playerStatus;
        },
        getHotSingList4Search(state){
            return state.hotSingList4Search;
        },
        getHotSingerImg4Search(state){
            return state.hotSingerImg4Search;
        }
    },
    mutations: {
        changePlayerStatus(state,playStatus){
            state.playerStatus = playStatus;
        },
        changeHotSingList4Search(state,hotSingList4Search){
            state.hotSingList4Search = hotSingList4Search;
        },
        changeHotSingerImg4Search(state,hotSingerImg4Search){
            state.hotSingerImg4Search = hotSingerImg4Search;
        },
    }
};

export default app;
