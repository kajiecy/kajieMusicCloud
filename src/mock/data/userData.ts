import Mock from 'mockjs';
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
    },
];
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



