<template>
  <div class="indexback">
    <!--头部-->
    <v-userheader @init="init" v-bind:AreaListList="AreaListList"
                  v-on:isjtqy="isjtqy"
                  @white_cf="white_data_condition"
                  v-on:headerJuck="juckFuncion"  :juck="juck"></v-userheader>
    <!--第一层页面-->
    <Row v-if="juck == 'oneflore'">
      <Row class=" flourOne">
        <Col span="7">
        <v-qhqyzb v-bind:countQhjtZbList="countQhjtZbList"></v-qhqyzb>
        </Col>
        <Col span="10">
        <v-map @init="init" v-bind:cdmapAll="cdmapAll"   :ssHs = "ssHs" v-on:indexJuck="indexFuncion"></v-map>
        </Col>
        <Col span="7">
        <v-gzzbqk v-bind:countSzzbBySzList="countSzzbBySzList"></v-gzzbqk>
        </Col>
      </Row>
      <Row class="cf">
        <Col span="7" style="height: 500px">
        <v-qsqy :qsqyList='qsqyList' :resetTab="resetTab"></v-qsqy>
        </Col>
        <Col span="10">
        <v-allback v-if="!indexChange" :ssHs = "ssHs"></v-allback>
        <v-income v-bind:tbsrqkbList='tbsrqkbList'></v-income>
        <v-tenprogress v-if="indexChange" v-bind:sssrList="sssrList" :resetTab="resetTab"></v-tenprogress>
        </Col>
        <Col span="7">
        <v-qshy v-bind:qshyList="qshyList" :resetTab="resetTab"></v-qshy>
        </Col>
      </Row>
    </Row>
    <!--第二层页面-->
    <Row>
      <Row v-if="serchShow">
        <Col span="24" class="text-center">
        <div class="positionRE">
          <input type="text" class="textplace" v-model="search" v-bind:placeholder="placeholder">
          <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
          <div class="list_jt" v-bind:class="{activeJt:jtListName.length}">
            <ul>
              <li v-for="item in jtListName " @click="jtDtail(item)" class="cursor">{{item.nsrmc}}</li>
            </ul>
          </div>
        </div>
        </Col>
      </Row>
      <!--集团情况-->
      <Row class="mt50" v-if="isShowjt">
        <Row>
          <Col span="24" style="height:125px;">
          <v-jtqktotal v-bind:jt_total="jt_total" :jt_qyhs="jt_qyhs"></v-jtqktotal>
          </Col>
        </Row>
        <Row class="mt20" :gutter="16">
          <Col span="12" style="height:350px;">
          <v-qyfb v-bind:jtqyssList="jtqyssList"></v-qyfb>
          </Col>
          <Col span="12" style="height:350px;">
          <v-hyfb :szsr="szsr"></v-hyfb>
          </Col>
        </Row>
        <Row class="mt20" style="background-color: #093a72">
          <Col span="6" style="height:300px;">
          <v-gzzbqks :jtqk_gzszb= 'jtqk_gzszb'></v-gzzbqks>
          </Col>
          <Col span="9" style="height:300px;">
          <v-szsssrbh :szsr="szsr"></v-szsssrbh>
          </Col>
          <Col span="9" style="height:300px;">
          <v-sztbbh :szsr="szsr"></v-sztbbh>
          </Col>
        </Row>
        <Row class="mt20">
          <Col span="24" style="height:100%">
          <v-jtcyqy></v-jtcyqy>
          </Col>
        </Row>
      </Row>
      <!--企业情况-->
      <Row v-if="isShowqy" class="mt30">
        <Row :gutter="16">
          <Col span="12" style="height: 280px">
          <v-qyjbxx :qyjbxx="qyjbxx"></v-qyjbxx>
          </Col>
          <Col span="12" style="height: 280px">
          <v-qyszzb :jtqk_gzszb="jtqk_gzszb"></v-qyszzb>
          </Col>
        </Row>
        <Row class="mt20 qyqk__line-box">
          <Col span="12" style="height: 300px">
          <v-qyszsssrybh :szsr="szsr"></v-qyszsssrybh>
          </Col>
          <Col span="12" style="height: 300px">
          <v-qysztbbh :szsr="szsr"></v-qysztbbh>
          </Col>
        </Row>
        <Row class="mt20">
          <Col span="24" style="height:500px;">
          <v-tablemk></v-tablemk>
          </Col>
        </Row>
      </Row>
    </Row>
    <!--第三层页面-->
    <Row v-if="juck == 'lostFlore'">
      <Row>
        <Col span="24">
        <v-condition :white_c="white_c" @white_s="white_data_search"></v-condition>
        </Col>
      </Row>
      <Row class="mt20" v-if="jsShow_whie">
        <v-Pie :white_qyzb="white_qyzb" :white_szzb="white_szzb"></v-Pie>
      </Row>
      <Row class="mt20" v-if="jsShow_whie">
        <v-line :white_zxt="white_zxt"></v-line>
      </Row>
    </Row>
  </div>
</template>

<script>
  import Header from '../header/header.vue'
  import Qhqyzb from './allindex/qhqyzb/Qhqyzb.vue'
  import income from './allindex/income/income.vue'
  import map from './allindex/map/cdMap.vue'
  import allback from './allindex/income/allback.vue'
  import tenprogress from './allindex/income/tenprogress.vue'
  import qshy from './allindex/qshy/qshy.vue'
  import gzzbqk from './allindex/gzzbqk/gzzbqk.vue'
  import gzzbqks from './jtqk/gzzbqk/gzzbqks.vue'
  import Qsqy from './allindex/qsqy/Qsqy.vue'
  import qyfb from './jtqk/qyfb/qyfb.vue'
  import hyfb from './jtqk/hyfb/hyfb.vue'
  import szsssrbh from './jtqk/szsssrbh/szsssrbh.vue'
  import sztbbh from './jtqk/sztbbh/sztbbh.vue'
  import jtqkTotal from  './jtqk/jtqkTotal/jtqkTotal.vue'
  import qyjbxx from './qyqk/qyjbxx/qyjbxx.vue'
  import qyszzb from './qyqk/qyszzb/qyszzb.vue'
  import VQyszzb from "./qyqk/qyszzb/qyszzb.vue";
  import qyszsssrybh from "./qyqk/qyszsssrybh/qyszsssrybh.vue"
  import VQyszsssrybh from "./qyqk/qyszsssrybh/qyszsssrybh"
  import qysztbbh from "./qyqk/qysztbbh/qysztbbh.vue"
  import VQysztbbh from "./qyqk/qysztbbh/qysztbbh";
  import condition from "./whiteboard/condition";
  import Pie from "./whiteboard/Pie";
  import line from "./whiteboard/line";
  import jtcyqy from  './jtqk/jtcyqy/jtcyqy.vue'
  import Tablemk from './qyqk/tablemk/Tablemk.vue'
  export default {
    name: 'index',
    data () {
      return {
        juck: 'oneflore',
        serchShow: false,
        isShowjt: false, //是否显示集团
        isShowqy: false,//是否显示企业
        jsShow_whie: false, // 是否显示白板内容
        qshyList: '',
        qsqyList: '', //前十企业
        ssHs:'', //统计集团总户数，企业总户数
        search: '',//模糊搜索
        tbsrqkbList: "",
        indexChange:true,//切换区域
        countSzzbBySzList: '',
        countQhjtZbList: '',
        sssrList: '',
        AreaListList:'',
        placeholder: '请输入集团名称',
        jtListName: [],
        jt_qyhs: '', //集团企业户数
        jt_total: '', //集团税收统计
        jtqyssList: '', //集团情况list
        jtqk_gzszb: '', //集团情况各种税占比
        szsr: '', //集团情况
        qyjbxx: '', //企业基本信息
        clickJTlist:'',//判断是否点击
        white_c: '', //数据白板查询条件（地区，行业）
        white_qyzb: '', //数据白板区域占比
        white_szzb: '', // 数据白板税种占比
        white_zxt: '', //数据白板
        cdmapAll:{},
        resetTab: '', //是否重置tab
      }
    },
    watch: {
      juck: function () {
        this.juck = sessionStorage.getItem("headerJuck");
        if (this.juck == 'oneflore' || this.juck == 'lostFlore') {
          this.serchShow = false;
        } else {
          this.placeholder = this.juck == 'twoflore' ? '请输入集团名称' : '请输入企业税号或者纳税人名称';
          this.serchShow = true;
        }
      },
      search: function (cur, old) {
        let self = this;
        setTimeout(function () {
          if (self.search != cur) {
            return false;
          }else if(self.search == self.clickJTlist){
            return false;
          }
          self.seartch();
        }, 500);
      }
    },
    mounted: function () {
      let self = this;
      self.$nextTick(function () {
        let juck = sessionStorage.getItem("headerJuck");
        if (juck) {
          self.juck = juck;
        }
        if(self.juck === 'oneflore'){
            //切换到首页再发请求
          self.init({swjgdmChange:"",fast:'',last:''});
        }else if(self.juck === 'lostFlore'){
            //如果当前是在数据白板，刷新时及时请求地区，行业。
            self.white_data_condition();
        }
      });
    },
    methods: {
      indexFuncion:function(res){//控制页面数据显示全成都还是区域
        this.indexChange = res;
      },
      //处理 header组件 内部内部触发的事件
      juckFuncion(res){
        this.juck = res.flore;
        this.indexChange = res.blooen;
      },
      init(obj){//初始化首页数据包
        let self = this;
        self.$http.post('/qhjtSsglJcsjb/sjtj_01', {jzsj: obj.last, kssj: obj.fast,swjgdm:obj.swjgdmChange}).then(function (res) {
          console.log(res);
          sessionStorage.setItem('lastTime',obj.last); //保存统计数据截止时间
          self.qshyList = res.data.data.qshy;//前十行业
          self.tbsrqkbList = res.data.data.tbsrqkb;//同比收入情况比
          self.countSzzbBySzList = res.data.data.countSzzbBySz;//各种纳税情况占比
          self.countQhjtZbList = res.data.data.countQhjtZb;//千户集团占比情况
          self.sssrList = res.data.data.sssr;//区域状况
          self.AreaListList = res.data.data.AreaList;//地区值的分别
          self.qsqyList = res.data.data.jtqy;//前十企业
          self.ssHs = res.data.data.ssHs; //统计集团总户数，企业总户数
          self.cdmapAll = {AreaListList:self.AreaListList,sssrList:self.sssrList};
          self.resetTab = Math.random(); //触发重置
        })
      },
      seartch: function () { //模糊搜索
        let self = this;
        self.$http.post('/qhjtSsglJcsjb/sjtj_03', {
            nsrmc: self.search,
            jtbz: self.juck == 'twoflore'?'Y':'N',
            zfjglx: self.juck == 'twoflore'?'Z':'F', //中分机构类型
        }).then(function (res) {
          if (res.data.data.jtxx.code != 100) {
            self.$Message.error(res.data.data.jtxx.msg);
            self.jtListName = [];
            return false;
          }
          self.jtListName = res.data.data.jtxx.data;
        })
      },
      jtDtail: function (item) { //集团与企业详情
        let self = this;
        self.clickJTlist = item.nsrmc;
        this.search = item.nsrmc;
        this.jtListName = [];

        self.$http.post('/qhjtSsglJcsjb/sjtj_02',{
            djxh: item.djxh,
            jtbz: self.juck == 'twoflore'?'Y':'N', //集团，企业区分标志
            zfjglx: self.juck == 'twoflore'?'Z':'F', //中分机构类型
        }).then(function(res){
          if(res.data.code != 100){
            self.$Message.error(res.data.msg);
            return false;
          }
          self.isjtqy();
          self.jt_qyhs = res.data.data.jtqy.jtqyhs; //集团企业户数
          self.jt_total = res.data.data.jtss; //集团税收统计
          self.jtqyssList = res.data.data.jtqy;//集团情况
          self.jtqk_gzszb = res.data.data.szsr.data.sspie; //集团情况各种税占比
          self.szsr = res.data.data.szsr; //集团情况(包含2折线图，饼图，)
          self.qyjbxx = item; //企业基本信息
          console.log('集团情况或企业情况',res.data.data)
        })
      },
      white_data_condition: function () { //数据白板查询条件请求
        let self = this;

        self.$http.post('/qhjtSsglJcsjb/sjtj_05',{})
          .then((res) => {
            if(res.data.code === 100){
              console.log('数据白板查询条件',res.data.data);
              self.white_c = res.data.data; //数据白板查询条件数据
            }
          })
      },
      white_data_search: function (params) {
        let self = this;

        self.$http.post('/qhjtSsglJcsjb/sjtj_04',{
            kssj: params.kssj,
            jzsj: params.jzsj,
            swjgdm: params.swjgdm,
            hydm: params.hydm
        })
          .then((res) => {
            if(res.data.code === 100){
              console.log('数据白板查询结果',res);
              self.jsShow_whie = true;
              self.white_qyzb = res.data.data.hysr.data; //区域占比
              self.white_szzb = res.data.data.szsr.data.sspie; //税种占比
              self.white_zxt = res.data.data.szsr; //折线图
            }
          })
      },
      isjtqy: function (change) { //控制集团情况，企业情况隐藏显示
        let self = this;
        if(change){
          self.isShowjt = false;
          self.isShowqy = false;
          self.jsShow_whie = false;
          return;
        }
        if(self.juck === 'twoflore'){
          self.isShowjt = true;
          self.isShowqy = false;
        }else if(self.juck === 'treenflore'){
          self.isShowjt = false;
          self.isShowqy = true;
        }
      }
    },
    components: {
      'v-userheader': Header,
      'v-income': income,
      'v-allback': allback,
      'v-gzzbqk': gzzbqk,
      'v-gzzbqks': gzzbqks,
      'v-qhqyzb': Qhqyzb,
      'v-qsqy': Qsqy,
      'v-tenprogress': tenprogress,
      'v-qshy': qshy,
      'v-map': map,
      'v-qyfb': qyfb,
      'v-hyfb': hyfb,
      'v-szsssrbh': szsssrbh,
      'v-sztbbh': sztbbh,
      'v-jtqktotal': jtqkTotal,
      'v-jtcyqy': jtcyqy,
      'v-qyjbxx': qyjbxx,
      'v-qyszzb': qyszzb,
      'v-qyszsssrybh': qyszsssrybh,
      'v-qysztbbh': qysztbbh,
      'v-condition': condition,
      'v-Pie': Pie,
      'v-line': line,
      'v-tablemk': Tablemk
    }
  }
</script>
<style scoped>
  .list_jt {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 35px;
    bottom: 0;
    margin: 0 auto;
    height: 200px;
    background: #052862;
    text-align: left;
    width: 40%;
    border-radius: 10px;
    border: 1px solid #1C4C84;
    overflow: auto;
    z-index: 200;
    transition: all .5s linear;
  }

  .activeJt.list_jt {
    opacity: 1;
  }

  .list_jt li {
    padding: 5px 10px;
    list-style: none;
    color: #fff;
  }

  .list_jt li:hover {
    background: #082E6F;
  }

  .positionRE {
    position: relative;
  }

  .positionRE i {
    position: absolute;
    font-weight: bold;
    color: #fff;
    right: 31%;
    top: 4px;
  }

  .positionRE input::-webkit-input-placeholder {
    color: #fff !important;
  }

  .positionRE input:-moz-placeholder {
    color: #fff !important;
  }

  .positionRE input::-moz-placeholder {
    color: #fff !important;
  }

  .positionRE input:-ms-input-placeholder {
    color: #fff !important;
  }

  .textplace {
    color: #fff;
    background: #11135D;
    width: 40%;
    border-radius: 50px;
    border: none;
    padding: 10px 20px;
    height: 30px;
  }

  .flourOne div {
    height: 250px;
  }

  .indexback {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    overflow-y: scroll;
    background-image: url(../../assets/images/back.png);
    background-size: 100% 100%;
  }

  .cf {
    margin: 12px 0;
  }

  .qyqk__line-box {
    background-image: url('../../assets/images/box_hsline.png'),
    url('../../assets/images/box_hsline.png'),
    url('../../assets/images/box_ssline.png'),
    url('../../assets/images/box_ssline.png');
    background-repeat: no-repeat;
    background-position: top center, bottom center, left center, right center;
    background-origin: padding-box;
    background-size: 98% 4px, 98% 4px, auto 98%, auto 98%;
  }
</style>
