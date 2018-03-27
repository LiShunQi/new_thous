<template>
  <div class="content">
    <div class="hello " style="width: 100%; height:269px;">
      <div class="title"><span>区域状况</span></div>
      <!--图切换还有更多-->
      <div class="tab_more">
      <span class="tab tab__one f12 cursor f-color" :class="{active: tab1}" @click="regions('qyqs','tab1')">
        入库前十
      </span>
        <span class="tab tab__two f12 cursor f-color" :class="{active: tab2}" @click="regions('qyqszf','tab2')">
        增浮前十
      </span>
        <a href="javascript:;" class="more cursor f-color" @click="isShow = !isShow">
          更多
          <i class="iconfont icon-gengduo"></i>
        </a>
        <span class="bot__line"></span>
      </div>
      <!--charts-->
      <div id="regions" style="width: 100%; height:250px;top:-40px;"></div>
    </div>
    <!--更多弹框-->
    <v-dialog v-if="isShow">
      <v-moreqy slot="content" :charts_data = 'sssrList'></v-moreqy>
    </v-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VDialog from "../../../dialog/Modal"
  import VMoreqy from './Moreqy.vue'
  export default {
    props:['sssrList','resetTab'],
    name: 'HelloWorld',
    components:{
      VDialog,
      VMoreqy,
    },
    data () {
      let self = this;
      return {
        tab1: true,
        tab2: false,
        name: "开始",
        isShow: false,
        chartsInstance: '', //chart实体
        //区域入库前十
        qyqs_option:{ //区域前十
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
            formatter: '{a}<br/><span class="tip-color">{b}: {c}元</span>',
          },
          grid: {
            left: '0',
            right: '4%',
            top: '40%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            data: ['1.龙泉驿区', '2.高新区', '3.彭州区', '4.青羊区', '5.武侯区', '6.锦江区', '7.成华区', '8.金牛区', '9.新都区', '10.双流区'],
            axisLabel: {
              interval: 0,
              rotate: 45,//倾斜度 -90 至 90 默认为0
              margin: 15,
              textStyle: {
                color: '#D9E1FF'
              },
              formatter: function (params) {
                return self.tool.trunc(params,8);
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#64B6ED',
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
            name: '税收收入',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#78D877'
              }
            },
            data: [365400, 29540, 36546, 185410, 88520, 298540, 36540, 29540, 36546, 185410]
          }]
        },
        //区域入库增幅前十
        qyqszf_option:{ //区域前十
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
                  '<span class="tip-color">' + params[0].name + ": " + parseFloat(params[0].data).toFixed(4) + '%' + '</span>'
            },
          },
          grid: {
            left: '0',
            right: '4%',
            top: '40%',
            bottom: '0%',
            containLabel: true
          },
          xAxis: {
            data: ['1.龙泉驿区', '2.高新区', '3.彭州区', '4.青羊区', '5.武侯区', '6.锦江区', '7.成华区', '8.金牛区', '9.新都区', '10.双流区'],
            axisLabel: {
              interval: 0,
              rotate: 45,//倾斜度 -90 至 90 默认为0
              margin: 15,
              textStyle: {
                color: '#D9E1FF'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#64B6ED',
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
            name: '增浮',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#78D877'
              }
            },
            data: [365400, 29540, 36546, 185410, 88520, 298540, 36540, 29540, 36546, 185410]
          }]
        }
      }
    },
    watch:{
      sssrList:function(){
        this.regions('qyqs');
      },
      resetTab: function () { //重置tab
        this.tab1 = true;
        this.tab2 = false;
      }
    },
    mounted: function () {
      let self = this;
      self.$nextTick(function () {
        self.chartsInstance = self.echarts.init(document.getElementById('regions'));
        self.regions('qyqs');//前十区域
      });
    },
    methods: {
      regions(type,state){
        let self = this;

        self.handlerData();
        self.chartsInstance.clear();
        if(state === 'tab1'){
            self.tab1 = true;
            self.tab2 = false;
        }else if(state === 'tab2'){
          self.tab1 = false;
          self.tab2 = true;
        }
        switch (type){
          case 'qyqs':
            self.chartsInstance.setOption(self.qyqs_option);
            break;
          case 'qyqszf':
            self.chartsInstance.setOption(self.qyqszf_option);
            break;
          default:
              return false;
        }

      },
      //数据处理
      handlerData: function () {
        let self = this;

        let qyqs_name = [] //区域前十name
          ,qyqszf_name = [] //区域前十增幅name
          ,qyqs_sssr = [] //区域前十sssr
          ,qyqszf_bl = []; //区域前十增幅bl
        if(self.sssrList){
          self.sssrList.countSssrTop.data.slice(0,10).forEach((el,i,arr) => {
            qyqs_name.push(el.swjgmc);
            qyqs_sssr.push(el.hj);
          });
          //前十税收
          self.qyqs_option.series[0].data = qyqs_sssr;
          self.qyqs_option.xAxis.data = qyqs_name;

          self.sssrList.countSszfTop.data.slice(0,10).forEach((el,i,arr) => {
            qyqszf_name.push(el.swjgmc);
            qyqszf_bl.push(parseFloat(el.bl)*100);
          });
          //增幅
          self.qyqszf_option.series[0].data = qyqszf_bl;
          self.qyqszf_option.xAxis.data = qyqszf_name;
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span.morth {
    line-height: 17px;
  }

  .incomeTen, .floatedten {
    display: inline-block;
    line-height: 40px;
    font-size: 12px;
    color: #3969C8;
  }

  .floatedten {
    margin-left: 50px;
  }

  .incomeTen {
    margin-left: 20px;
    color: #5CBCF1
  }
  .title {
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }
  .content {
    padding: 10px;
  }

  .regionsHello {
    position: absolute;
    left: 20px;
    right: 20px;
    top: 36px;
    z-index: 99;
    height: 36px;
    margin-top: 10px;
    background-image: url(../../../../assets/images/qten.png);
    background-repeat: no-repeat;
    background-size: 100% 35px;
  }

  .hello {
    position: relative;
    padding: 10px 20px;
    background: #102B7C;
    border-radius: 8px;
    background-image: url(../../../../assets/images/titleftbj.png), url(../../../../assets/images/titrightbj.png);
    background-position: 20px 20px, 95% 20px;
    background-repeat: no-repeat, no-repeat;
  }

  /*切换 css - start*/
  .tab_more{
    position: absolute;
    left: 20px;
    right: 20px;
    top: 40px;
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
    background-image: url(../../../../assets/images/bot.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 100%;
  }
  .tab__one{
    left: 0;
  }
  .tab__two{
    left: 70px;
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
    background-image: url('../../../../assets/images/line.png');
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
    /*width: 200px;*/
    background-color: #4187CA;
    position: absolute;
    bottom: 0;
    left: 0;
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
    background-image: url(../../../../assets/images/botselct.png);
    background-size: 100% 100%;
  }
  /*切换 css - end*/
</style>
