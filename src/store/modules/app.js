

const app = {
    state: {
        playerStatus:true,
    },
    getters:{
        getPlayerStatus(state){
            return state.playerStatus;
        }
    },
    mutations: {
        changePlayerStatus(state,playStatus){
            state.playerStatus = playStatus;
        }
    }
};

export default app;
