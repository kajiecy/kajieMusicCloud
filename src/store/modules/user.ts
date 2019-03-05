
const user = {
    state: {
        userSearchList:[
            {name:'历史搜索1'},
            {name:'历史搜索2'},
            {name:'历史搜索3'},
            {name:'历史搜索4'},
            {name:'历史搜索5'},
            {name:'历史搜索6'},
        ]
    },
    getters:{
        getUserSearchList(state: {userSearchList: any[]}){
            return state.userSearchList;
        }
    },
    mutations: {
        setUserSearchList(state: any,userSearchList: {userSearchList: any[]}){
            state.userSearchList = userSearchList;
        }
    }
};

export default user;
