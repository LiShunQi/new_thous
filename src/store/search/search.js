/**
 * Created by lsq on 2018/3/28.
 */
import axios from '@/assets/common/resetAjax'

const types = {
  SET_SEARCH_DATA: 'SET_SEARCH_DATA', //获取数据
  SET_PLACEHOLDER: 'SET_PLACEHOLDER', //设置placeholder
};

const state = {
  jtListName: null,
  placeholder: '', //input pl
};

const getters = {

};

const mutations = {
  [types.SET_SEARCH_DATA](state, res){
    state.jtListName = res.data.data.jtxx.data;
  },
  [types.SET_PLACEHOLDER](state, text) {
    state.placeholder = text;
  }
};

const actions = {
  search({commit}, obj) { //模糊搜索
    let self = this;
    axios.post('/qhjtSsglJcsjb/sjtj_03', {
      nsrmc: obj.keyword,
      jtbz: obj.flag === 'jt'?'Y':'N',
      zfjglx: obj.flag === 'jt'?'Z':'F', //中分机构类型
    })
      .then(function (res) {
      if (res.data.data.jtxx.code !== 100) {
        return false;
      }
      commit(types.SET_SEARCH_DATA, res);
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
