import axios from 'axios';
import Vue from 'vue';
// import {Loading,Message} from 'element-ui';
import router from './../router';
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL ='';

/**
 * 用法
 * this.$post(URL(请求路径string),param(参数Obj),isAlert(错误提示标识,为false报错时不不弹框))
 *    .then(result=>{
 *        result:请求成功时，接口返回的data数据
 *    }).catch(error=>{
 *        error:请求失败时，接口返回的data数据
 *    })
 */


// http request 拦截器
axios.interceptors.request.use((config) => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // console.log("========================>拦截到请求的 request",config)
    return config;
  },
        (error) => {
    return Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use((response) => {
    return response;
  },(error) => {
    return Promise.reject(error);
  }
)


/**
 * 封装post请求
 * @param url 请求路径 类型:string
 * @param data 参数 类型:obj
 * @param option  isAlert错误提示标识,为false报错时不不弹框 类型:boolean
 *
 */

export function post(url: string, data: any = {}, option: any = {}) {
  return new Promise((resolve, reject) => {

    // const loading = Loading.service({
    //   lock: true,
    //   text: '加载中...',
    //   // spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.0)'
    // });
    // console.log("声明了一个loadIng");
    axios.post(url, data)
      .then((response) => {
        // loading.close();
        // console.log("关闭");
        if (response.data.result === '00') {
          resolve(response.data);
        }else {
          if (!option.isAlert) {
            if (response.data.failMsg) {
                alert(response.data.failMsg);
            } else {
                alert(response.data.respMsg);
            }
          }
          reject(response.data);
        }
      }, (err) => {
        // loading.close();
        // console.log("关闭err");
        reject(err);
      });
  });
}


