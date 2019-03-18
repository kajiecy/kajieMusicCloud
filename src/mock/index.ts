// 通过axios-mock-adapter生成代理api地址
import axios from 'axios';
import store from '@/store';
import MockAdapter from 'axios-mock-adapter';

import * as userData from './data/userData';
import * as singData from './data/singData';

import MockTools from '@/mock/mocktools';


export default {
    init() {
        const mock = new MockAdapter(axios);
        const mockTools = new MockTools(mock);
        // 获取歌曲详细信息的 mock接口
        mockTools.doPost(store.state['remote'].getSingInfo, ({id}) => {
            let resultData = null;
            singData.singInfoDetail.map((value, index, array)=> {
                if(value.id === id){
                    resultData = value;
                }
            });
            if(!!resultData){
                return MockTools.resultData({singInfo: resultData});
            }else {
                return MockTools.resultData({},'无法找到此歌曲');
            }
        });
        // 获取推荐歌单
        mockTools.doPost(store.state['remote'].getRecommendSongList, ({id}) => {
            return MockTools.resultData({recommendSongList: singData.recommendSongList});
        });
        // 获取最新歌单
        mockTools.doPost(store.state['remote'].getNewSongList, () => {
            return MockTools.resultData({newSongList: singData.newSongList});
        });

        // 获取最新歌单
        mockTools.doPost(store.state['remote'].getSongListDetail, ({songListId}) => {
            let result = null;
            singData.songListDetail.map((value, index)=>{
                if(value.id === songListId){
                    result = value;
                }
            });
            if(!!result){
                return MockTools.resultData({songListDetail: result});
            }else {
                return MockTools.resultData({},'无法找到此歌单');
            }
        });

    }
};
