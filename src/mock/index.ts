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
        mockTools.doPost(store.state['remote'].getSingInfo, ({id}) => {
            if(1===parseInt(id)){
                return MockTools.resultData({singInfo: singData.singInfo});
            }else {
                return MockTools.resultData({},'无法找到此歌曲');
            }
        });
    }
};
