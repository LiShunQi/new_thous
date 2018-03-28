/**
 * Created by lsq on 2018/3/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import index from './index/index.js';
import jtqk from './jtqk/jtqk.js';
import qyqk from './qyqk/qyqk.js';
import white from './white/white.js';

export default new Vuex.Store({
  modules: {
    white: white,
    index: index,
    jtqk: jtqk,
    qyqk: qyqk
  }
});

