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

export default new Vuex.Store({
  modules: {
    white: white,
    index: index,
    jtqy: jtqy,
    search: search
  }
});

