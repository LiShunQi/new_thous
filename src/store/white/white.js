/**
 * Created by lsq on 2018/3/28.
 */
import axios from '@/assets/common/resetAjax'

const types = {
  SET_C_D: 'SET_C_D', //数据白板查询条件数据,赋值
  SET_RESULT_DATA: 'SET_RESULT_DATA', // 数据白板查询结果数据,赋值
  SET_IS_SHOW_CONTENT: 'SET_IS_SHOW_CONTENT', //
};

const state = {
  white_condition_data: null, //数据白板查询条件数据
  white_qyzb: null, //区域占比
  white_szzb: null, //税种占比
  white_zxt: null, //折线图
  is_show_content: false, //内容显示隐藏
};

const getters = {

};

const mutations = {
  [types.SET_C_D](state, obj){
    state.white_condition_data = obj;
  },
  [types.SET_RESULT_DATA](state, obj){
    state.white_qyzb = obj.hysr.data;
    state.white_szzb = obj.szsr.data.sspie;
    state.white_zxt = obj.szsr;
  },
  [types.SET_IS_SHOW_CONTENT](state, boolean){
    state.is_show_content = boolean;
  }
};

const actions = {
  get_white_condition_data({commit}) { //数据白板查询条件请求
    let self = this;

    axios.post('/qhjtSsglJcsjb/sjtj_05',{})
      .then((res) => {
        if(res.data.code === 100){
          console.log('数据白板查询条件',res.data.data);
          commit(types.SET_C_D, res.data.data); //数据白板查询条件数据
        }
      })
  },
  //数据白板查询
  white_data_search({commit},params) { // 第二个参数为负载
    let self = this;

    axios.post('/qhjtSsglJcsjb/sjtj_04',{
      kssj: params.kssj,
      jzsj: params.jzsj,
      swjgdm: params.swjgdm,
      hydm: params.hydm
    })
      .then((res) => {
        if(res.data.code === 100){
          console.log('数据白板查询结果', res);
          commit(types.SET_IS_SHOW_CONTENT, true);
          commit(types.SET_RESULT_DATA, res.data.data);
        }
      })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
