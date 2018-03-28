<template>
  <!--前十企业-->
  <div id="qsqy" class="qsqy__box">
    <h3 class="picture__title">企业情况</h3>
    <!--图切换还有更多-->
    <div class="tab_more">
      <span class="tab tab__one f12 cursor f-color" :class="{active: tab1}" @click="dataInit('qsjt')">
        入库前十集团
      </span>
      <span class="tab tab__two f12 cursor f-color" :class="{active: tab2}" @click="dataInit('qsqy')">
        入库前十企业
      </span>
      <a href="javascript:;" class="more cursor f-color" @click="isShow = !isShow">
        更多
        <i class="iconfont icon-gengduo"></i>
      </a>
      <span class="bot__line"></span>
    </div>
    <!--picture-->
    <div id="qsqy_picture" class="qsqy_picture" ></div>
    <!--更多弹框-->
    <v-dialog v-if="isShow">
      <v-moreten slot="content" :qsqyList="qsqyList"></v-moreten>
    </v-dialog>
  </div>
</template>
<script>
  import VDialog from "../../dialog/Modal"
  import VMoreten from './Moreten.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'Qsqy',
    components:{
      VDialog,
      VMoreten,
    },
    data(){
      let self = this;
      return {
        isShow: false,
        tab1: true,
        tab2: false,
        chartsInstance: {},//charts实体
        //前十集团
        qsjt_option: {
          title: {
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
            },
            x: 'center',
          },
          tooltip: {
            position: ['35%','20%'],
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: '{b}<br /><span class="tip-color">{c}元</span>',
            textStyle:{
//              fontSize:12
            }
          },
          grid: {
            left:'28%',
            top: '22%',
            right: '1%',
            bottom:'32%'
          },
          xAxis: {
            data: ['1.中国石油四川石化有限责任公司', '2.四川中烟工业有限责任公司', '3.一汽－大众汽车有限公司成都分公司', '4.四川一汽丰田汽车有限公司', '5.浙江豪情汽车制造有限公司成都分公司', '6.四川科伦药业股份有限公司','7.成都高原汽车工业有限公司', '8.成都达利食品有限公司','9.华润雪花啤酒（四川）有限责任公司', '10.成都印钞有限公司'],
            axisLabel:{
              rotate:60,//倾斜度 -90 至 90 默认为0
              margin:15,
              fontStyle: 'normal',
              fontFamily: 'Arial',
              fontWeight: 'normal',
              textStyle:{
                color:'#D9E1FF',
                fontSize: 12
              },
              formatter: function (params) {
                return self.tool.trunc(params,24);
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
            },
            axisLine:{
              lineStyle:{
                color:'#64B6ED',
              }
            },
          },
          yAxis: {
//            min:0,
//            max: 3500000,
            splitNumber: 7,
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ['#64B6ED'],
                opacity: 0.5
              },
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#D9E1FF',
              },
            },
          },
          series: [{
            name: '',
            type: 'bar',
            barWidth: 12,
            itemStyle:{
              normal:{
                color:'#ffc637'
              }
            },
            data: [12345, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000, 185410]
          }]
        },
        //前十企业
        qsqy_option: {
          title: {
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
            },
            x: 'center',
          },
          tooltip: {
            position: ['35%','20%'],
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: '{b}<br /><span style="color:#FFA247">{c}元</span>',
            textStyle:{
//              fontSize:12
            }
          },
          grid: {
            left:'28%',
            top: '22%',
            right: '1%',
            bottom:'32%'
          },
          xAxis: {
            data: ['1.中国石油四川石化有限责任公司', '2.四川中烟工业有限责任公司', '3.一汽－大众汽车有限公司成都分公司', '4.四川一汽丰田汽车有限公司', '5.浙江豪情汽车制造有限公司成都分公司', '6.四川科伦药业股份有限公司','7.成都高原汽车工业有限公司', '8.成都达利食品有限公司','9.华润雪花啤酒（四川）有限责任公司', '10.成都印钞有限公司'],
            axisLabel:{
              rotate:60,//倾斜度 -90 至 90 默认为0
              margin:15,
              fontStyle: 'normal',
              fontFamily: 'Arial',
              fontWeight: 'normal',
              textStyle:{
                color:'#D9E1FF',
                fontSize: 12
              },
              formatter: function (params) {
                return self.tool.trunc(params,24);
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
            },
            axisLine:{
              lineStyle:{
                color:'#64B6ED',
              }
            },
          },
          yAxis: {
//            min:0,
//            max: 3500000,
            splitNumber: 7,
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ['#64B6ED'],
                opacity: 0.5
              },
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#D9E1FF',
              },
            },
          },
          series: [{
            name: '',
            type: 'bar',
            barWidth: 12,
            itemStyle:{
              normal:{
                color:'#ffc637'
              }
            },
            data: [12345, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000, 185410]
          }]
        }
      }
    },
    mounted: function () {
      let self  = this;
      self.$nextTick(function () {
        self.chartsInstance = self.echarts.init(document.getElementById('qsqy_picture'));
        self.dataInit('qsjt');
      });
    },
    methods: {
      dataInit: function (symbol) {
        let self = this;
        self.handleData();
        self.chartsInstance.clear();
        switch (symbol){
          case 'qsjt':
            self.tab1 = true;self.tab2 = false;
            self.chartsInstance.setOption(self.qsjt_option);
            break;
          case 'qsqy':
            self.tab1 = false;self.tab2 = true;
            self.chartsInstance.setOption(self.qsqy_option);
            break;
          default:
              return;
        }
      },
      //数据处理
      handleData: function () {
        let self = this
          ,ret1 = []
          ,ret2 = [];

        if(self.qsqyList){
            //前十集团
            self.qsqyList.qsjt.data.slice(0,10).forEach((el,i,arr) => {
                ret1.push(el.nsrmc);
                ret2.push(el.hj);
            });
            self.qsjt_option.xAxis.data = ret1.slice();ret1 = [];
            self.qsjt_option.series[0].data = ret2.slice();ret2 = [];
            //前十企业
          self.qsqyList.qsqy.data.slice(0,10).forEach((el,i,arr) => {
            ret1.push(el.nsrmc);
            ret2.push(el.hj);
          });
          self.qsqy_option.xAxis.data = ret1.slice();ret1 = [];
          self.qsqy_option.series[0].data = ret2.slice();ret2 = [];
        }
      }
    },
    watch: {
        qsqyList: function () {
            let self = this;
            self.dataInit('qsjt');
        },
    },
    computed: {
      ...mapState({
        qsqyList: state => state.index.qsqyList,
      })
    }
  }
</script>
<style scoped="">
  .qsqy__box{
    position: relative;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #102B7C;
    background-image: url('../../../assets/images/box_hsline.png'),
    url('../../../assets/images/box_hsline.png'),
    url('../../../assets/images/box_ssline.png'),
    url('../../../assets/images/box_ssline.png'),
    url('../../../assets/images/titleftbj.png'),
    url('../../../assets/images/titrightbj.png');
    background-repeat: no-repeat;
    background-position: top center,bottom center,left center, right center, left top,right top;
    background-origin: padding-box,padding-box,padding-box,padding-box,content-box,content-box;
    background-size: 98% auto, 98% auto,auto 98%,auto 98%,auto auto,auto auto;
  }
  .qsqy_picture{
    width: 100%;
    height: 100%;
  }
  .picture__title{
    position: absolute;
    left: 0;
    right: 0;
    top: 15px;
    z-index: 99;
    text-align: center;
  }
  /*切换 css - start*/
  .tab_more{
    position: absolute;
    left: 20px;
    right: 20px;
    top: 50px;
    z-index: 99;
    height: 38px;
    line-height: 41px;
    /*background-image: url(../../../assets/images/qten.png);*/
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 32px;
    /*border-bottom: 1px solid #4187CA;*/
    /*box-shadow: inset 0 -1px 0 #4187CA;*/
  }
  .tab{
    position: absolute;
    bottom: 0;
    display: inline-block;
    padding-left: 6px;
    width: 100px;
    /*height: 32px;*/
    height: 28px;
    line-height: 30px;
    text-align: left;
    background-image: url(../../../assets/images/bot.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 100%;
  }
  .tab__one{
    left: 0;
  }
  .tab__two{
    left: 90px;
  }
  .more{
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 200;
    width: 60px;
    height: 38px;
    text-align: right;
    font-size: 12px;
    line-height: 28px;
    background-image: url('../../../assets/images/line.png');
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 100% auto;
    vertical-align: middle;
  }
  .more i{
    display: inline-block;
    margin-bottom: 2px;
    margin-left: -4px;
    margin-right: 7px;
    vertical-align: middle;
  }
  .bot__line{
    display: inline-block;
    height: 1px;
    width: 200px;
    background-color: #4187CA;
    position: absolute;
    bottom: 0;
    right: 60px;
  }
  .f-color{
    color: #60c0fb;
  }
  .active{
    z-index: 111;
    height: 32px;
    line-height: 38px;
    color: #fff !important;
    background-image: url(../../../assets/images/botselct.png);
    background-size: 100% 100%;
  }
  /*切换 css - end*/
</style>
