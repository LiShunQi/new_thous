/**
 * Created by lsq on 2018/3/28.
 */
import axios from '@/assets/common/resetAjax'

const types = {
  SET_INDEX_DATA: 'SET_INDEX_DATA', //设置index各版块的数据
};

const state = {
  countQhjtZbList: null,
  cdmapAll: null,
  countSzzbBySzList: null,
  qsqyList: null,
  ssHs: null,
  tbsrqkbList: null,
  sssrList: null,
  qshyList: null,
  AreaListList: null,
};

const getters = {

};

const mutations = {
  [types.SET_INDEX_DATA](state, res){
    state.countQhjtZbList = res.data.data.countQhjtZb;//千户集团占比情况
    state.countSzzbBySzList = res.data.data.countSzzbBySz;//各种纳税情况占比
    state.qsqyList = res.data.data.jtqy;//前十企业
    state.ssHs = res.data.data.ssHs; //统计集团总户数，企业总户数
    state.sssrList = res.data.data.sssr;//区域状况
    state.tbsrqkbList = res.data.data.tbsrqkb;//同比收入情况比
    state.qshyList = res.data.data.qshy;//前十行业
    state.AreaListList = res.data.data.AreaList;//地区值
    state.cdmapAll = {AreaListList:self.AreaListList,sssrList:self.sssrList}; //地图数据
  }
};

const actions = {
  get_index_data({commit}, obj){ //初始化首页数据包
    let self = this;

    axios.post('/qhjtSsglJcsjb/sjtj_01', {kssj: obj.fast, jzsj: obj.last, swjgdm:obj.swjgdmChange}).then(function (res) {
      console.log('index', res);

      if(res.data.code === 100){
        commit(types.SET_INDEX_DATA, res);
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
