<template>
  <div class="qyszzb bg__common">
    <!--头部区域-->
    <h3 class="header__title">企业税种占比</h3>
    <!--文本区域-->
    <div class="charts__item" id="con-qyszzb" style="width: 100%;height:100%;"></div>
  </div>
</template>
<script>
  export default {
    name: 'qyszzb',
    props: ['jtqk_gzszb'],
    data () {
      return {
        option: {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/><span style='color:#FFA247'>{b}: {c}元 ({d}%)</span>",
          },
          legend: {
            orient: 'vertical',
            right: 50,
            top:50,
            itemWidth:5,
            itemHeight:5,
            textStyle:{
              color: '#fff',
            },
            data:[
              {
                name:'增值税',
                icon: 'circle'
              },{
                name:'所得税',
                icon: 'circle'
              },{
                name:'消费税',
                icon: 'circle'
              }
            ]
          },
          color: ['#93ccce','#e18197','#8abe6e'],
          series: [
            {
              name:'企业税种占比',
              type:'pie',
              hoverOffset: 5,
              radius: ['45%', '65%'],
              center : ['50%', '55%'],
              avoidLabelOverlap: false,
              label: {
                formatter:'{d}%',
                position: 'outside',
                align: 'center',
                verticalAlign: 'top'
              },
              labelLine: {
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              data:[
                {value:51, name:'增值税'},
                {value:24.8, name:'所得税'},
                {value:24.2, name:'消费税'}
              ]
            }
          ]
        }
      }
    },
    mounted: function () {
        let self = this;
        this.$nextTick(function () {
          self.qyszzbFun();
        })
    },
    methods: {
      qyszzbFun(){
        let self = this;
        let myChart = self.echarts.init(document.getElementById('con-qyszzb'));
        self.handleData();
        myChart.clear();
        myChart.setOption(self.option);
      },
      // 处理数据
      handleData: function () {
        let self = this;
        if(self.jtqk_gzszb){
          self.option.series[0].data[0].value = self.jtqk_gzszb.zzs;
          self.option.series[0].data[1].value = self.jtqk_gzszb.sds;
          self.option.series[0].data[2].value = self.jtqk_gzszb.xfs;
        }
      }
    },
    watch: {
      jtqk_gzszb: function () {
        let self = this;
        self.qyszzbFun();
      }
    }
  }
</script>
<style scoped>
  .qyszzb{
    width: 100%;
    height: 100%;
    position: relative;
    padding: 20px;
  }
  .bg__common{
    background-image: url(../../../assets/images/allback.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .charts__item{
    width: 100%;
    height: 100%;
  }
  .header__title{
    position: absolute;
    color: #fff;
    top: 20px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 99;
  }
</style>
