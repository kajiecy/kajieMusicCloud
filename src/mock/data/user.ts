import Mock from 'mockjs'
export const users = [
    {
        id: 1,
        username: 'admin',
        password: '123456',
        email: '123456@qq.com',
        name: 'admin'
    },
    {
        id: 2,
        username: 'cy',
        password: '123',
        email: '851416347@qq.com',
        name: '卡杰'
    }
]
export const userMoreInfo = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'email':'@email',
        'name':'@cname',
        'age|18-90':1,
        'data':Mock.Random.date('yyyy-MM-dd'),
        'star|2-5': '★',
    }]
}).list;


export const  loginResult = {
  "result": "0",
  "failMsg": null,
  "menus": [
    {
      "id": 108,
      "menuitem": "首页",
      "resUrl": null,
      "parentId": 0,
      "icon": "iconfont icon-shouye",
      "menulevel": 1,
      "route": null,
      "orderindex": 99,
      "operauthid": null,
      "menudesc": null,
      "buttons": [ ],
      "childMenus": [
        {
          "id": 110,
          "menuitem": "首页",
          "resUrl": "",
          "icon": "glyphicon glyphicon-home",
          "menulevel": 2,
          "route": "homeWelcome",
          "orderindex": null,
          "operauthid": null,
          "menudesc": null,
          "buttons": [ ],
          "childMenus": null
        },
        {
          "id": 110,
          "menuitem": "银行账户",
          "resUrl": "/scf/base/core/queryBankAccountList",
          "parentId": 108,
          "icon": "iconfont icon-yinhangzhanghu",
          "menulevel": 2,
          "route": "bankAccount",
          "orderindex": null,
          "operauthid": null,
          "menudesc": null,
          "buttons": [ ],
          "childMenus": null
        },
        {
          "id": 109,
          "menuitem": "消息提醒",
          "resUrl": "/scf/base/core/queryMessagelist",
          "parentId": 108,
          "icon": "iconfont icon-xiaoxitixing",
          "menulevel": 2,
          "route": "messageRemind",
          "orderindex": null,
          "operauthid": null,
          "menudesc": null,
          "buttons": [ ],
          "childMenus": null
        },
        {
          "id": 165,
          "menuitem": "企业信息",
          "resUrl": null,
          "parentId": 108,
          "icon": "fa fa-building-o",
          "menulevel": 2,
          "route": "enterpriseInfo",
          "orderindex": 4,
          "operauthid": null,
          "menudesc": null,
          "buttons": [ ],
          "childMenus": null
        },
        {
          "id": 166,
          "menuitem": "用户信息",
          "resUrl": null,
          "parentId": 108,
          "icon": "iconfont icon-qiyexinxi",
          "menulevel": 2,
          "route": "userInfo",
          "orderindex": 3,
          "operauthid": null,
          "menudesc": null,
          "buttons": [ ],
          "childMenus": null
        }
      ]
    },

  ],
  "userId": 56,
  "loginname": "jslsshr",
  "companyId": "GYS000221",
  "companyName": "江苏省粮食集团有限责任公司",
  "username": "何元胜",
  "phone": "13211111113",
  "email": null,
  "userType": "3",
  "organizationCode": null,
  "sessionId": "d747f538-88c8-46c9-9ec2-83c541ee547b"
}
// 'email|1':'@email'
