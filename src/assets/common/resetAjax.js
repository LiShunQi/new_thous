/**
 * Created by summer on 2018/3/14.
 */
/**
 * http配置
 */
import Vue from 'vue'
import qs from 'qs';
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../../router'
import {Message, Spin} from 'iview'
axios.defaults.timeout = 3000000;
axios.defaults.baseURL = "thousands";
axios.defaults.headers.get['Content-Type']='application/json;charset=utf-8';
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=utf-8';

Vue.use(VueAxios, axios);

// http请求拦截器
axios.interceptors.request.use(config => {
  Spin.show();
  config.data = qs.stringify(config.data,
    //  加入JS对象转换配置
    {allowDots: true});
  return config
}, error => {
  Spin.hide();
  Message.error({
    content: '加载超时',
    duration: 10
  });
  return Promise.reject(error)
});
// http响应拦截器
axios.interceptors.response.use(data => {
  Spin.hide();
  if(data.data.code === 888){
    router.push('/login');
  }
  return data
}, error => {
  Spin.hide();
  Message.error('服务器出问题啦，请刷新重试！');
  return Promise.reject(error)
});

export default axios;


