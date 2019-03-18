const baseUrl = 'music.kajie88.com/remote/';

const remote = {
    state: {
        // 获取歌曲详细信息的
        getSingInfo:baseUrl+'singController/getSingInfo',
        // 获取推荐歌单
        getRecommendSongList:baseUrl+'singController/getRecommendSongList',
        // 获取最新歌单
        getNewSongList:baseUrl+'singController/getNewSongList',
        // 根据id获取歌单详情
        getSongListDetail:baseUrl+'singController/getSongListDetail',
    },
    getters:{

    },
    mutations: {

    }
};

export default remote;
