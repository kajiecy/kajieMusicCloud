// 通过axios-mock-adapter生成代理api地址
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {users,userMoreInfo,loginResult} from './data/user';
import Mocktools from './mocktools.js';



export default {
    init() {
//      let mock = new MockAdapter(axios);
//      let mockTools = new MockTools(mock);

        // login 模拟登录接口
//      mockTools.doPost("/scf/base/shiro/auth/login",function ({username, password}) {
//        return MockTools.resultData(loginResult);//正确时这样返回
//        // return MockTools.resultData({},"错误信息");//错误时这样返回，加个错误信息参数
//      });
        // mockTools.doPost(store.state.app.interfaceURL.getUserList,function (param) {
        //     return MockTools.resultData({userList:users});
        // });
        // mockTools.doPost(store.state.app.interfaceURL.addUser,function (user) {
        //     users.push(user);
        //     return MockTools.resultData({});
        // });
        // mockTools.doPost(store.state.app.interfaceURL.delUser,function ({id:delId}) {
        //     // 判断模拟的假数据中是否有和传过来的数据匹配的
        //     let userLength = users.length;
        //     let delFlag = false;
        //     while (userLength-->0){
        //         let {id} = users[userLength];
        //         if(id===delId){
        //             users.splice(userLength,1);
        //             delFlag = true;
        //             break;
        //         }
        //     }
        //     if(delFlag===true){
        //         return MockTools.resultData({});
        //     }else {
        //         return MockTools.resultData({},"找到此用户");
        //     }
        // })
        // mockTools.doPost(store.state.app.interfaceURL.getUserMoreInfoList,function (param) {
        //     return MockTools.resultData({userMoreList:userMoreInfo});
        // })
    }
};
