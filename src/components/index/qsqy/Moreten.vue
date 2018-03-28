<template>
  <!--行业分布: 更多-->
  <div  class="component__box">
    <h3 class="chart__title">企业情况</h3>
    <!--tab-->
    <ul class="tab__charts">
      <li v-for="(item, index) in tab" :key="index" :class="{active: item.state}" @click="handlerClick(index)">{{item.name}}</li>
    </ul>
    <div id="component_chart" class="component__chart" style="width: 100%;height: 100%"></div>
  </div>
</template>
<script>
  export default {
    name: 'Hyfbmodal',
    props: ['qsqyList'], //父组件传入data
    data() {
      let self = this;
      return {
        chartsInstance: {}, //charts 实体
        tab: [{name: '企业总收入',state: true},{name: '企业税种收入',state: false},{name: '集团税种收入',state: false}],
        data1: [1054100, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000, 185410, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000],
        //企业总税收
        option1: {
          title: {
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
            formatter: '{b}<br /><span class="tip-color">{c}元</span>',
            textStyle:{
              fontSize:14
            }
          },
          grid: {
            left:'12%',
            right: '5%',
            top: '25%',
            bottom:'35%'
          },
          xAxis: {
            data: ['1.中国石油四川石化有限责任公司', '2.四川中烟工业有限责任公司', '3.一汽－大众汽车有限公司成都分公司',
              '4.四川一汽丰田汽车有限公司', '5.浙江豪情汽车制造有限公司成都分公司', '6.四川科伦药业股份有限公司',
              '7.成都高原汽车工业有限公司', '8.成都达利食品有限公司','9.华润雪花啤酒（四川）有限责任公司', '10.成都印钞有限公司',
              '7.成都高原汽车工业有限公司', '8.成都达利食品有限公司','9.华润雪花啤酒（四川）有限责任公司', '10.成都印钞有限公司',
              '7.成都高原汽车工业有限公司', '8.成都达利食品有限公司','9.华润雪花啤酒（四川）有限责任公司', '10.成都印钞有限公司'],
            axisLabel:{
              interval:0,
              rotate:55,//倾斜度 -90 至 90 默认为0
              margin:15,
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
                color: ['#64B6ED']
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
            data: [12345, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000, 185410, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000]
          }]
        },
        //企业分税种税收
        option2: {
          title: {
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
            },
            x: 'center',
          },
          color: ['#9d9f10', '#ffc637', '#f87100'],
          legend: {
            top: '12%',
            left: '4%',
            data: [{name: '增值税',icon: 'circle'},{name: '消费税',icon: 'circle'},{name: '所得税',icon: 'circle'}],
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
//            formatter: '{b}<br/><span class="tip-color">{a}: {c}元</span>',
            formatter: function (params) {
                let str = params[0].name + '<br/>' +
                  '<span class="tip-color">';
                params.forEach((el,i,arr) => {
                   str +=  params[0].seriesName + ': ' + params[0].value + '元<br/>';
                });
                str += '</span>';
                return str;
            },
          },
          grid: {
            left:'12%',
            right: '5%',
            top: '25%',
            bottom:'35%'
          },
          xAxis: {
            data: ['龙泉驿区', '高新区', '彭州市', '青羊区', '武侯区', '锦江区', '成华区',
              '金牛区', '新都区', '双流区','温江区', '青白江区', '都江堰市', '郫县','天府新区', '崇州市',
              '新津县', '邛崃市',
              '金堂县', '大邑县', '简阳市', '蒲江县'],
            axisLabel:{
              interval:0,
              rotate:55,//倾斜度 -90 至 90 默认为0
              margin:15,
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
                color: ['#64B6ED']
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
            name: '增值税',
            type: 'bar',
            barGap: 0,
            itemStyle: {

            },
            data: [185410, 2000000, 185410, 185410, 2000000, 298540,36540,298540,36540,
              185410, 2000000, 185410, 185410,
              185410, 2000000, 185410, 2000000, 185410, 185410, 2000000, 298540, 2000000]
          },
            {
              name: '消费税',
              type: 'bar',
              data: [185410, 2000000, 185410, 185410, 2000000, 298540,36540,298540,36540,
                185410, 2000000, 185410, 185410,
                185410, 2000000, 185410, 2000000, 185410, 185410, 2000000, 298540, 2000000]
            },
            {
              name: '所得税',
              type: 'bar',
              data: [185410, 2000000, 185410, 185410, 2000000, 298540,36540,298540,36540,
                185410, 2000000, 185410, 185410,
                185410, 2000000, 185410, 2000000, 185410, 185410, 2000000, 298540, 2000000]
            }
          ]
        },
        //集团分税种税收
        option3: {
          title: {
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
            },
            x: 'center',
          },
          color: ['#9d9f10', '#ffc637', '#f87100'],
          legend: {
            top: '12%',
            left: '4%',
            data: [{name: '增值税',icon: 'circle'},{name: '消费税',icon: 'circle'},{name: '所得税',icon: 'circle'}],
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
//            formatter: '{b}<br/><span class="tip-color">{a}: {c}元</span>',
            formatter: function (params) {
              let str = params[0].name + '<br/>' +
                '<span class="tip-color">';
              params.forEach((el,i,arr) => {
                str +=  params[0].seriesName + ': ' + params[0].value + '元<br/>';
              });
              str += '</span>';
              return str;
            },
          },
          grid: {
            left:'12%',
            right: '5%',
            top: '25%',
            bottom:'35%'
          },
          xAxis: {
            data: ['龙泉驿区', '高新区', '彭州市', '青羊区', '武侯区', '锦江区', '成华区',
              '金牛区', '新都区', '双流区','温江区', '青白江区', '都江堰市', '郫县','天府新区', '崇州市',
              '新津县', '邛崃市',
              '金堂县', '大邑县', '简阳市', '蒲江县'],
            axisLabel:{
              interval:0,
              rotate:55,//倾斜度 -90 至 90 默认为0
              margin:15,
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
                color: ['#64B6ED']
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
            name: '增值税',
            type: 'bar',
            barGap: 0,
            itemStyle: {

            },
            data: [185410, 2000000, 185410, 185410, 2000000, 298540,36540,298540,36540,
              185410, 2000000, 185410, 185410,
              185410, 2000000, 185410, 2000000, 185410, 185410, 2000000, 298540, 2000000]
          },
            {
              name: '消费税',
              type: 'bar',
              data: [185410, 2000000, 185410, 185410, 2000000, 298540,36540,298540,36540,
                185410, 2000000, 185410, 185410,
                185410, 2000000, 185410, 2000000, 185410, 185410, 2000000, 298540, 2000000]
            },
            {
              name: '所得税',
              type: 'bar',
              data: [185410, 2000000, 185410, 185410, 2000000, 298540,36540,298540,36540,
                185410, 2000000, 185410, 185410,
                185410, 2000000, 185410, 2000000, 185410, 185410, 2000000, 298540, 2000000]
            }
          ]
        },
      }
    },
    mounted: function () {
      let self = this;
      self.$nextTick(function () {
          console.log('qsqy',self.qsqyList);
        self.chartsInstance = self.echarts.init(document.getElementById('component_chart'));
        self.dataInit(1);
      })
    },
    methods: {
      dataInit: function (i) {
        let self = this;
        self.handleData();
        self.chartsInstance.clear();
        self.chartsInstance.setOption(self['option' + i]);
      }
      //tab 切换
      ,handlerClick: function (index) {
        let self  = this;
        this.tab.forEach(function (el,i,arr) {
          if(index === i && arr[index] !== true){
            arr[index].state = true;
          }else {
            arr[i].state = false;
          }
        });

        switch (index){
          case 0:
            self.dataInit(1);
            break;
          case 1:
            self.dataInit(2);
            break;
          case 2:
            self.dataInit(3);
            break;
          default:
            return;
        }
      },
      //处理数据
      handleData: function () {
        let self = this
          ,ret1 = []
          ,ret2 = []
          ,ret3 = []
          ,ret4 = [];

        if(self.qsqyList){
          //前十企业
          self.qsqyList.qsqy.data.forEach((el,i,arr) => {
            ret1.push(el.nsrmc);
            ret2.push(el.hj);
          });
          self.option1.xAxis.data = ret1.slice();ret1 = [];
          self.option1.series[0].data = ret2.slice();ret2 = [];

          //前十企业分税种
          self.qsqyList.qsqy.data.forEach((el,i,arr) => {
            ret1.push(el.nsrmc);
            ret2.push(el.zzs); //增值税
            ret3.push(el.xfs); //消费税
            ret4.push(el.sds); //所得税
          });
          self.option2.xAxis.data = ret1.slice();ret1 = [];
          self.option2.series[0].data = ret2.slice();ret2 = [];
          self.option2.series[1].data = ret3.slice();ret3 = [];
          self.option2.series[2].data = ret4.slice();ret4 = [];

          //前十集团分税种
          self.qsqyList.qsjt.data.forEach((el,i,arr) => {
            ret1.push(el.nsrmc);
            ret2.push(el.zzs); //增值税
            ret3.push(el.xfs); //消费税
            ret4.push(el.sds); //所得税
          });
          self.option3.xAxis.data = ret1.slice();ret1 = [];
          self.option3.series[0].data = ret2.slice();ret2 = [];
          self.option3.series[1].data = ret3.slice();ret3 = [];
          self.option3.series[2].data = ret4.slice();ret4 = [];
        }
      }
    },
    watch: {
        qsqyList: function () {
          let self = this;
          self.dataInit(1);
        }
    }
  }
</script>
<style scoped="">
  .component__box{
    position: relative;
    /*padding: 20px;*/
    width: 100%;
    height: 100%;
  }
  .component__chart{
    width: 100%;
    height: 100%;
  }
  .chart__title{
    position: absolute;
    left: 0;
    right: 0;
    z-index: 99;
    text-align: center;
    color: #fff;
  }

  .tab__charts{
    position: absolute;
    left: 50%;
    right: 0;
    z-index: 99;
    top: 40px;
    height: 40px;
    line-height: 40px;
  }
  .tab__charts li{
    display: inline-block;
    width: 100px;
    text-align: center;
    margin-left: 20px;
    font-size: 12px;
    color: #b9bad5;
    cursor: pointer;
    background-image: url("../../../assets/images/tkbot.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .tab__charts li.active{
    color: #fff;
    background-image: url("../../../assets/images/tkselectbot.png");
  }
</style>
