<template>
  <div class="content">
    <div  class="hello "  style="width: 100%; height:100%;">
      <div class="title"><h5 >行业状况</h5></div>
      <!--tab 切换-->
      <div class="tab_more">
        <span class="tab tab__one f12 cursor f-color" :class="{active: tab1}" @click="toggleChart('qshy')">
          入库前十
        </span>
          <span class="tab tab__two f12 cursor f-color" :class="{active: tab2}" @click="toggleChart('qshyzf')">
          增浮前十
        </span>
          <a href="javascript:;" class="more cursor f-color" @click="isShow = !isShow">
            更多
            <i class="iconfont icon-gengduo"></i>
          </a>
          <span class="bot__line"></span>
      </div>
      <!--picture-->
      <div id="firstten" style="width: 100%; height:454px;"></div>
    </div>
    <!--更多弹框-->
    <v-dialog v-if="isShow">
      <v-more slot="content" :charts_data="qshyList"></v-more>
    </v-dialog>
  </div>
</template>

<script>
  import VDialog from "../../dialog/Modal"
  import VMore from './More.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'qshy',
    components:{
      VDialog,
      VMore,
    },
    data () {
      let self = this;
      return {
        tab1: true,
        tab2: false,
        isShow: false, //控制弹框显示
        chartInstance: '', //echarts实体
        //前十行业
        qshy_option: { //前十行业option
          title: {
//            text: '前十区域',
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
            },
            x: 'center',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: '{a}<br/><span class="tip-color">{b}:{c}元</span>'
          },
          grid: {
            left: '2%',
            right: '2%',
            top: '18%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: {
            data: ['test','test','test','test','test','test','test','test','test','test'], //行业
            axisLabel:{
              interval:0,
              rotate:45,//倾斜度 -90 至 90 默认为0
              margin:15,
              textStyle:{
                color:'#D9E1FF'
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
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ['#64B6ED'],
                opacity: 0.5
              },
            },
//            splitNumber: 7,
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
            name: '行业税收收入',
            type: 'bar',
            barWidth: 12,
            itemStyle:{
              normal:{
                color:'#ACCBEA'
              }
            },
            data: [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000] //金额
          }]
        },
        //前十增幅
        qshyzf_option: { //前十增幅option
          title: {
//            text: '前十区域',
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
            },
            x: 'center',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: function (params) {
              return params[0].seriesName + '<br/>' +
                  '<span class="tip-color">'+
                params[0].name + ": " + parseFloat(params[0].data).toFixed(4) + '%' +
                '</span>'
            },
          },
          grid: {
            left: '10%',
            right: '2%',
            top: '18%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: {
            data: ['test','test','test','test','test','test','test','test','test','test'], //行业
            axisLabel:{
              interval:0,
              rotate:45,//倾斜度 -90 至 90 默认为0
              margin:15,
              textStyle:{
                color:'#D9E1FF'
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
            splitLine: {
              show: true,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ['#64B6ED'],
                opacity: 0.5
              },
            },
//            splitNumber: 7,
            axisLine: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#D9E1FF',
              },
              formatter: '{value} %'
            },
          },
          series: [{
            name: '行业增浮',
            type: 'bar',
            barWidth: 12,
            itemStyle:{
              normal:{
                color:'#ACCBEA'
              }
            },
            data: [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000] //金额
          }]
        }
      }
    },
    mounted:function(){
        console.log('qshyList',this.qshyList);
      this.$nextTick(function () {
          //init charts实体
        this.chartInstance = this.echarts.init(document.getElementById('firstten'));
        this.dataRender(this.qshy_option);
      });
    },
    methods:{
        //前十行业
      dataRender(option){
        let self = this;

        this.handleData();
        self.chartInstance.clear();
        self.chartInstance.setOption(option);
      },
      //处理数据
      handleData: function () {
        let self = this
          ,qshy_name = [] //前十行业name
          ,qshy_je = [] //前十行业data
          ,qshyzf_name = [] //前十增幅行业name
          ,qshyzf_bl = []; //前十增幅行业 data

        if(self.qshyList){
          //前十企业
          self.qshyList.data.rkqkList.slice(0,10).forEach((el,i,arr) => {
            qshy_name.push(el.hymc);
            qshy_je.push(el.hj);
          });
          //前十企业增幅
          self.qshyList.data.zzqkList.slice(0,10).forEach((el,i,arr) => {
            qshyzf_name.push(el.hymc);
            qshyzf_bl.push(parseFloat(el.bl)*100);
          });
          self.qshy_option.xAxis.data = qshy_name;
          self.qshyzf_option.xAxis.data = qshyzf_name;
          self.qshy_option.series[0].data = qshy_je;
          self.qshyzf_option.series[0].data = qshyzf_bl;
        }
      },
      //表格切换
      toggleChart: function (type) {
          let self = this;

        switch (type) {
          case 'qshy':
            self.tab1 = true;
            self.tab2 = false;
            self.dataRender(self.qshy_option);
            break;
          case 'qshyzf':
            self.tab1 = false;
            self.tab2 = true;
            self.dataRender(self.qshyzf_option);
            break;
          default:
              return false;
        }
      }
    },
    watch:{
      qshyList: function(){
        this.dataRender(this.qshy_option);
      },
    },
    computed: {
      ...mapState({
        qshyList: state => state.index.qshyList,
      })
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span.morth{line-height: 8px;}
  .incomeTen,.floatedten{
    display: inline-block;
    line-height: 35px;
    font-size: 12px;
    color: #3969C8;
  }
  .floatedten{margin-left: 18px;}
  .incomeTen{margin-left: 6px;color: #5CBCF1}
  .title{
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  /*.content{*/
    /*padding: 10px;*/
  /*}*/
  .regionsHello{
    position: absolute;
    left: 20px;
    right: 20px;
    top: 50px;
    z-index: 99;
    height: 40px;
    background-image: url(../../../assets/images/qten.png);
    background-repeat: no-repeat;
    background-size: 100% 30px;
  }
  .hello{
    position: relative;
    padding: 10px 20px;
    background: #102B7C;
    border-radius: 8px ;
    background-image: url(../../../assets/images/titleftbj.png),
    url(../../../assets/images/titrightbj.png),
    url('../../../assets/images/box_hsline.png'),
    url('../../../assets/images/box_hsline.png'),
    url('../../../assets/images/box_ssline.png'),
    url('../../../assets/images/box_ssline.png');
    background-position: 20px 20px, 95% 20px ,top center,bottom center,left center, right center;
    background-repeat: no-repeat;
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
    padding-left: 12px;
    width: 80px;
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
    left: 74px;
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
