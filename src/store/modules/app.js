const app = {
    state: {
        playerStatus:true,
        headerInformation:{
            headerStatus: false,//头部搜索框的展开收起状态
            inputRecommend:"你瞒我瞒 - 陈伯宇",//用户搜索框的placeHolder内容,
            bodyBackImg:"",//home 页面外层div的背景图片，虚化后展示，header也会根据此对属性是否为''判断是否显示为红色或透明
            hotSingList4Search:[ //搜索界面展开后 热门搜索内容
                {name:'李荣浩贝贝'},
                {name:'李荣浩'},
                {name:'李荣浩贝贝贝贝'},
                {name:'李荣'},
                {name:'很多字很多字很多字'},
                {name:'李荣浩贝贝'},
            ],
            hotSingerImg4Search:[ //用户历史搜索内容
                {singerImg:'http://qiniu.kajie88.com/28913648.jpg'},
                {singerImg:'http://qiniu.kajie88.com/28913648.jpg'},
                {singerImg:'http://qiniu.kajie88.com/28913648.jpg'},
            ],
            
        },

    },
    getters:{
        getPlayerStatus(state){
            return state.playerStatus;
        },
        getInputRecommend(state){
            return state.headerInformation.inputRecommend;
        },
        getHotSingList4Search(state){
            return state.headerInformation.hotSingList4Search;
        },
        getHotSingerImg4Search(state){
            return state.headerInformation.hotSingerImg4Search;
        },
        getHeaderStatus(state){
            return state.headerInformation.headerStatus;
        },
        getBodyBackImg(state){
            return state.headerInformation.bodyBackImg;
        },

    },
    mutations: {
        setPlayerStatus(state,playStatus){
            state.playerStatus = playStatus;
        },
        setInputRecommend(state,inputRecommend){
            state.headerInformation.inputRecommend = inputRecommend;
        },
        setHotSingList4Search(state,hotSingList4Search){
            state.headerInformation.hotSingList4Search = hotSingList4Search;
        },
        setHotSingerImg4Search(state,hotSingerImg4Search){
            state.headerInformation.hotSingerImg4Search = hotSingerImg4Search;
        },
        setHeaderStatus(state,headerStatus){
            state.headerInformation.headerStatus=headerStatus;
        },
        setBodyBackImg(state,bodyBackImg){
            // console.log()
            state.headerInformation.bodyBackImg = bodyBackImg;
        },
    }
};

export default app;
