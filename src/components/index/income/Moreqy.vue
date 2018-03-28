<template>
  <!--行业分布: 更多-->
  <div  class="component__box">
    <h3 class="chart__title">区域分布</h3>
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
    props: ['charts_data'],
    data() {
      let self = this;
      return {
        chartsInstance: '', //charts 实体
        tab: [{name: '区域户数',state: true},{name: '入库情况',state: false},{name: '增长情况',state: false},{name: '分税种情况',state: false}],
        data1: [1054100, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000, 185410, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000],
        //区域户数
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
            formatter: '{a}<br/><span class="tip-color">{b}: {c}户</span>',
            textStyle:{
              fontSize:14
            }
          },
          grid: {
            left:'10%',
            right: '5%',
            top: '30%',
            bottom:'30%'
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
                return self.tool.trunc(params,12);
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
            name: '区域户数',
            type: 'bar',
            barWidth: 12,
            itemStyle:{
              normal:{
                color:'#ffc637'
              }
            },
            data: [185410, 2000000, 185410, 185410, 2000000, 298540,36540,298540,36540,
              185410, 2000000, 185410, 185410,
              185410, 2000000, 185410, 2000000, 185410, 185410, 2000000, 298540, 2000000]
          }]
        },
        //入库情况
        option2: {
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
            formatter: '{a}<br/><span class="tip-color">{b}: {c}元</span>',
          },
          grid: {
            left:'12%',
            right: '5%',
            top: '30%',
            bottom:'30%'
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
            type:'value',
//            min: -40,
//            max: 120,
//            interval: 20,
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
//              formatter: '{value}'
            },
          },
          series: [{
            name: '入库情况',
            type: 'bar',
            barWidth: 12,
            itemStyle:{
              normal:{
                color:'#ffc637'
              }
            },
            data: [100, 99, 88, 111, -30, -20,77, 100, 111, 78, 100, 98, -10, 76, -20,99, 120, 100, -20,99, 120, 100]
          }]
        },
        //增长情况
        option3: {
          title: {
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
            },
            x: 'center',
          },
//          color: ['#9d9f10', '#ffc637', '#f87100'],
//          legend: {
//            top: '12%',
//            left: '4%',
//            data: [{name: '增值税',icon: 'circle'},{name: '消费税',icon: 'circle'},{name: '所得税',icon: 'circle'}],
//            textStyle: {
//              color: '#fff'
//            }
//          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: function (params) {
              return params[0].seriesName + '<br/>' +
                  '<span class="tip-color">'+ params[0].name + ": " + parseFloat(params[0].data).toFixed(4) + '%' +'</span>'
            },
          },
          grid: {
            left:'10%',
            right: '5%',
            top: '30%',
            bottom:'30%'
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
              formatter: '{value} %'
            },
          },
          series: [{
            name: '增长情况',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              color:'#ffc637'
            },
            data: [185410, 2000000, 185410, 185410, 2000000, 298540,36540,298540,36540,
              185410, 2000000, 185410, 185410,
              185410, 2000000, 185410, 2000000, 185410, 185410, 2000000, 298540, 2000000]
          }
          ]
        },
        //分税种情况
        option4: {
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
//           position: ['35%','20%'],
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
            textStyle:{
//              fontSize:12
            }
          },
          grid: {
            left:'12%',
            right: '5%',
            top: '30%',
            bottom:'30%'
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
            type:'value',
//            min: -40,
//            max: 120,
//            interval: 20,
//           splitNumber: 7,
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
//              formatter: '{value} %'
            },
          },
          series: [{
            name: '增值税',
            type: 'bar',
            barGap: 0,
            data: [100, 99, 88, 111, -30, -20,77, 100, 111, 78, 100, 98, -10, 76, -20,99, 120, 100, -20,99, 120, 100]
          },
            {
              name: '消费税',
              type: 'bar',
              data: [100, 99, 88, 111, -30, -20,77, 100, 111, 78, 100, 98, -10, 76, -20,99, 120, 100, -20,99, 120, 100]
            },
            {
              name: '所得税',
              type: 'bar',
              data: [100, 99, 88, 111, -30, -20,77, 100, 111, 78, 100, 98, -10, 76, -20,99, 120, 100, -20,99, 120, 100]
            }
          ]
        },
      }
    },
    mounted: function () {
      let self = this;
      self.$nextTick(function () {
        self.chartsInstance = self.echarts.init(document.getElementById('component_chart'));
        self.dataInit(1);
      });
    },
    methods: {
        //图表渲染
      dataInit: function (i) {
        let self = this;
        self.handleData();
        self.chartsInstance.clear();
        self.chartsInstance.setOption(this['option' + i]);
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
          case 3:
            self.dataInit(4);
            break;
          default:
            return;
        }
      },
      //数据处理
      handleData: function () {
        let self = this
          ,ret1 = [] //temp array
          ,ret2 = []
          ,ret3 = []
          ,ret4 = [];
        //如果获取到了数据
        if(self.charts_data){
          //区域户数
          self.charts_data.countQyhs.data.forEach((el,i,arr) => {
              ret1.push(el.swjgmc);
              ret2.push(el.hs);
          });
          self.option1.xAxis.data = ret1.slice(); ret1 = [];
          self.option1.series[0].data = ret2.slice(); ret2 = [];
          //入库情况
          self.charts_data.countSssrTop.data.forEach((el,i,arr) => {
            ret1.push(el.swjgmc);
            ret2.push(el.hj);
          });
          self.option2.xAxis.data = ret1.slice(); ret1 = [];
          self.option2.series[0].data = ret2.slice(); ret2 = [];
          // 增长情况
          self.charts_data.countSszfTop.data.forEach((el,i,arr) => {
            ret1.push(el.swjgmc);
            ret2.push(parseFloat(el.bl)*100);
          });
          self.option3.xAxis.data = ret1.slice(); ret1 = [];
          self.option3.series[0].data = ret2.slice(); ret2 = [];
          //分税种情况
          self.charts_data.countQyszqk.data.forEach((el,i,arr) => {
            ret1.push(el.zzs); //增值税
            ret2.push(el.xfs); //消费税
            ret3.push(el.sds); //所得税
            ret4.push(el.swjgmc); //区域
          });

          self.option4.series[0].data = ret1.slice(); ret1 = [];
          self.option4.series[1].data = ret2.slice(); ret2 = [];
          self.option4.series[2].data = ret3.slice(); ret3 = [];
          self.option4.xAxis.data = ret4.slice(); ret4 = [];
        }
      }
    },
    watch: {
      charts_data: function () {
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
    /*left: 45%;*/
    right: 16px;
    top: 45px;
    width: 500px;
    height: 40px;
    z-index: 99;
    line-height: 40px;
  }
  .tab__charts li{
    display: inline-block;
    width: 100px;
    text-align: center;
    margin-left: 18px;
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
