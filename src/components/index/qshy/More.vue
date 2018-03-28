<template>
  <!--行业分布: 更多-->
  <div  class="component__box">
    <h3 class="chart__title">行业分布</h3>
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
       tab: [{name: '行业分布',state: true},{name: '入库情况',state: false},{name: '增长情况',state: false},{name: '全市占比',state: false}],
       chartsInstance: {}, //charts实体
       //行业总数
       data1: [1054100, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000, 185410, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000],
       //行业分布
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
           formatter: '{b}<br /><span class="tip-color">{c}户</span>',
           textStyle:{
//             fontSize:12
           }
         },
         grid: {
           left:'10%',
           right: '5%',
           top: '24%',
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
//           min:0,
//           max: 3500000,
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
           formatter: '{b}<br /><span class="tip-color">{c}元</span>',
           textStyle:{
             fontSize:12
           }
         },
         grid: {
           left:'12%',
           right: '5%',
           top: '24%',
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
//           min:0,
//           max: 3500000,
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
       //增幅情况
       option3: {
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
           formatter: function (params) {
             return params[0].seriesName + '<br/>' +
               '<span class="tip-color">'+
               params[0].name + ": " + parseFloat(params[0].data).toFixed(4) + '%' +
               '</span>'
           },
         },
         grid: {
           left:'10%',
           right: '5%',
           top: '24%',
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
           type:'value',
//           min: -50,
//           max: 300,
//           interval: 50,
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
           itemStyle:{
             normal:{
               color:'#ffc637'
             }
           },
           data: [100, 200, 220, 111, -30, -20,150, 100, 220, 220, 100, 150, -10, 220, -20,220, 120, 150]
         }]
       },
       //全市占比
       option4: {
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
           formatter: function (params) {
             return params[0].name + "<br/>" +
               "<span style='color:#f79441'>"+
               "行业占比: " + (params[1].value/self.data1[params[1].dataIndex]*100).toFixed(4) + '%' +
               "</span>";
           }
         },
         grid: {
           left:'14%',
           right: '5%',
           top: '24%',
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
//           min:0,
//           max: 3500000,
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
           name: '全市',
           type: 'bar',
           barWidth: 12,
           stack: '总量',
           itemStyle:{
             normal:{
               color:'#ffc637'
             }
           },
           data: [1054100, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000, 185410, 2000000, 36546, 185410, 2000000, 298540,36540, 29540, 2000000]
         },
           {
             name: '行业',
             type: 'bar',
             stack: '总量',
             itemStyle:{
               normal:{
                 color:'#f79441'
               }
             },
             data: [685410, 685410, 5000, 5000, 5000, 5000,5000, 5000, 3000, 3000, 3000, 3000, 1000, 3000, 2000,3000, 2000, 3000]
           }
         ]
       },
     }
   },
   mounted: function () {
     let self = this;

     console.log(self.charts_data);
     self.$nextTick(function () {
         //获取chart 实体
       self.chartsInstance = self.echarts.init(document.getElementById('component_chart'));
       self.dataInit(1);
     })
   },
   methods: {
       //数据渲染
     dataInit: function (i) {
       let self = this;
       self.handlerData();
       self.chartsInstance.clear(); //清除缓存
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
     //处理数据
     handlerData: function () {
       let self = this
         ,ret1 = [] //name
         ,ret2 = [] //data
         ,ret3 = [];
       //如果获取到了数据
       if(self.charts_data){
         //行业分布
         self.charts_data.data.hyfbList.slice(0,20).forEach((el,i,arr) => {
           ret1.push(el.hymc);
           ret2.push(el.hyhs);
         });
         self.option1.xAxis.data = ret1.slice(); ret1 = [];
         self.option1.series[0].data = ret2.slice(); ret2 = [];
         //入库情况
         self.charts_data.data.rkqkList.slice(0,20).forEach((el,i,arr) => {
           ret1.push(el.hymc);
           ret2.push(el.hj);
         });
         self.option2.xAxis.data = ret1.slice(); ret1 = [];
         self.option2.series[0].data = ret2.slice(); ret2 = [];
         // 增长情况
         self.charts_data.data.zzqkList.slice(0,20).forEach((el,i,arr) => {
           ret1.push(el.hymc);
           ret2.push(parseFloat(el.bl)*100);
         });
         self.option3.xAxis.data = ret1.slice(); ret1 = [];
         self.option3.series[0].data = ret2.slice(); ret2 = [];
         // 全市占比
         self.charts_data.data.qszssList.slice(0,20).forEach((el,i,arr) => {
           ret1.push(el.hymc);
           ret2.push(el.hj);
           ret3.push(el.ssje); //千户
         });
         self.option4.xAxis.data = ret1.slice(); ret1 = [];
         self.option4.series[0].data = ret2.slice();self.data1 = ret2.slice(); ret2 = [];
         self.option4.series[1].data = ret3.slice(); ret3 = [];
       }
     }
   },
   watch: {
       charts_data: function () {
         this.dataInit(1);
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
    left: 42%;
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
