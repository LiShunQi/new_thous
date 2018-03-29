/**
 * Created by lsq on 2018/3/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import index from './index/index.js';
import jtqy from './jtqy/jtqy.js';
import white from './white/white.js';
import search from './search/search.js'

const types = {
  SET_SHOW_TIME: 'SET_SHOW_TIME',//控制时间区域显示隐藏
  SET_SHOW_ALLBACK: 'SET_SHOW_ALLBACK',//控制时间区域显示隐藏
  SET_ISSHOW_HEADER: 'SET_ISSHOW_HEADER',//控制时间区域显示隐藏
};
const state = {
  isShow_allback: false, //控制allback显示隐藏
  isShow_time: true, //控制时间区域显示隐藏
  isShow_header: true, //控制时间区域显示隐藏
};
const mutations = {
  [types.SET_SHOW_TIME](state, boolean) {
    state.isShow_time = boolean;
  },
  [types.SET_SHOW_ALLBACK](state, boolean){
    state.isShow_allback = boolean;
  },
  [types.SET_ISSHOW_HEADER](state, boolean){
    state.isShow_header = boolean;
  }
};
const actions = {

};
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    white: white,
    index: index,
    jtqy: jtqy,
    search: search
  }
});

