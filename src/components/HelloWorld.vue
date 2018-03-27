<template>
  <div class="hello">
    <div id="main" style="width: 100%; height: 300px;"></div>
    <div id="container" style="width: 100%; height: 300px;"></div>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <div id="app" class="box" style="font-size: 100px"
         v-tap="vuetouch"
    v-longtap="{fn:vuetouch,name:'长按'}"
    v-swipeleft="{fn:vuetouch,name:'左滑'}"
    v-swiperight="{fn:vuetouch,name:'右滑'}"
    v-swipeup="{fn:vuetouch,name:'上滑'}"
    v-swipedown="{fn:vuetouch,name:'下滑'}"
    >{{ name }}</div>
  </div>
</template>

<script>
  import Vue from 'vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:"开始"
    }
  },
  mounted:function(){
    var myChart = Vue.prototype.echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        axisLabel:{
          interval:0,
          rotate:45,//倾斜度 -90 至 90 默认为0
          margin:15,
          textStyle:{
            color:"black"
          }
        },
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
    /*222222222222*/
    var myChart = Vue.prototype.echarts.init(document.getElementById('container'));
    var app = {};
    var option = {};
    app.title = '环形图';

    option = {
      title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : ['55%','70%'],
          center: ['50%', '60%'],
          data:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    if (option && typeof option === "object") {
      myChart.setOption(option, true);
    }
  },
  methods:{
    vuetouch:function(s,e){
      this.name=s.name;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
