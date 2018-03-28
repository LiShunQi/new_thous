/**
 * Created by lsq on 2018/3/28.
 */
import axios from '@/assets/common/resetAjax'

const types = {
  SET_JTQY_DATA: 'SET_JTQY_DATA', // 设置集团企业情况
};

const state = {
  jt_qyhs: null,
  jt_total: null,
  jtqyssList: null,
  jtqk_gzszb: null,
  szsr: null,
  qyjbxx: null,
};

const getters = {

};

const mutations = {
  [types.SET_JTQY_DATA](state, res, item){
    state.jt_qyhs = res.data.data.jtqy.jtqyhs; //集团企业户数
    state.jt_total = res.data.data.jtss; //集团税收统计
    state.jtqyssList = res.data.data.jtqy;//集团情况
    state.jtqk_gzszb = res.data.data.szsr.data.sspie; //集团情况各种税占比
    state.szsr = res.data.data.szsr; //集团情况(包含2折线图，饼图，)
    state.qyjbxx = item; //企业基本信息
  }
};

const actions = {
  get_jtqy_data ({commit}, item) { //集团与企业详情
    let self = this;

    axios.post('/qhjtSsglJcsjb/sjtj_02',{
      djxh: item.djxh,
      jtbz: self.juck == 'twoflore'?'Y':'N', //集团，企业区分标志
      zfjglx: self.juck == 'twoflore'?'Z':'F', //中分机构类型
    }).then(function(res){
      if(res.data.code !== 100){
        return false;
      }
      console.log('集团情况或企业情况',res.data.data);

      commit(types.SET_JTQY_DATA, res, item);
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
