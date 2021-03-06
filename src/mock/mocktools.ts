export default class MockTools {
    constructor(public mock) {
        this.mock = mock;
    }

    // 执行post 请求 传入 url ,处理方法
    // 处理方法中 含参为 request中 的 param对象;
    // 必须有返回值
    public doPost(url, doFunc) {
        // login 模拟登录接口
        this.mock.onPost(url).reply((config): any => {
            // 解析axios传过来的数据
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // console.log("reply param 'data' is", config.data)
                    const param = JSON.parse(config.data);
                    let respResult = doFunc(param);
                    // console.log(respResult);
                    respResult = respResult === undefined ? {
                        result: '01',
                        failMsg: 'MockTools doPost 方法参数没有返回值'
                    } : respResult;
                    // console.log("respData", respResult);
                    resolve([200, respResult]);
                }, 500);
            });
        });
    }

    // doFunc return 时用此方法进行数据标准化
    public static resultData(paramData, failMsg?: any) {
        // 传来的Data数据深拷贝
        const respData = JSON.parse(JSON.stringify(paramData));
        // failMsg存在就标记失败
        let result = '00';
        if (failMsg) {
            result = '01';
        }
        return {result, failMsg, ...respData};
    }
}
