/**
 * Created by lsq on 2018/3/28.
 */
import axios from '@/assets/common/resetAjax'

const types = {
  SET_SEARCH_DATA: 'SET_SEARCH_DATA',
};

const state = {
  jtListName: null,
};

const getters = {

};

const mutations = {
  [types.SET_SEARCH_DATA](state, res){
    state.jtListName = res.data.data.jtxx.data;
  }
};

const actions = {
  seartch({commit}) { //模糊搜索
    let self = this;
    axios.post('/qhjtSsglJcsjb/sjtj_03', {
      nsrmc: self.search,
      jtbz: self.juck == 'twoflore'?'Y':'N',
      zfjglx: self.juck == 'twoflore'?'Z':'F', //中分机构类型
    }).then(function (res) {
      if (res.data.data.jtxx.code !== 100) {
        self.$Message.error(res.data.data.jtxx.msg);
        self.jtListName = [];
        return false;
      }
      commit(types.SET_SEARCH_DATA, res);
      // self.jtListName = res.data.data.jtxx.data;
    })
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}
