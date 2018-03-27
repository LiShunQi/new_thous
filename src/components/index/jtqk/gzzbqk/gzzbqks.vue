<!--menglihuan 各种纳税情况小-->
<template>
  <div class="content__this">
    <div id="gzzbqks" class="pic" style="width: 100%;height:100%"></div>
  </div>
</template>

<script>
  export default {
    name: 'gzzbqks',
    props: ['jtqk_gzszb'],
    data () {
      return {
          chartsInstance: '', //charts实例
          option: {
            title:
              [
                {
                  text: '各税种占比概况',
                  left: 100,
                  top: 12,
                  textStyle: {
                    color: '#fff',
                    fontSize: '16',
                    fontWeight: '600'
                  }
                },
              ]
            ,
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/><span class='tip-color'>{b}: {c}元 ({d}%)</span>",
            },
            legend: {
              orient: 'vertical',
              right: 10,
              top:200,
              itemWidth:5,
              itemHeight:5,
              textStyle:{
                color: '#fff',
              },
              data:['增值税','所得税','消费税']
            },
            color: ['#93ccce','#e18197','#8abe6e'],
            series: [
              {
                name:'各税种占比概况',
                type:'pie',
                hoverOffset: 5,
                radius: ['30%', '45%'],
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
//                      color: ['#f00','#0f0'],
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
    mounted:function(){
        let self = this;
        self.$nextTick(function () {
            self.chartsInstance = self.echarts.init(document.getElementById('gzzbqks'));
            self.gzzbqksFunction();
        });
    },
    methods:{
      gzzbqksFunction(){
        let self = this;
        self.handleData();
        self.chartsInstance.clear();
        self.chartsInstance.setOption(self.option);
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
          self.gzzbqksFunction();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content__this{
    padding: 2px 5px 3px 2px;
    width: 100%;
    height: 100%;
  }
  .pic{
    /*background: #102B7C;*/
    /*border-radius:2px ;*/
    text-align: center;
    background-image: url(../../../../assets/images/titleftbj.png),url(../../../../assets/images/titrightbj.png) ;
    background-position: 20px 20px, 95% 20px;
    background-repeat: no-repeat,no-repeat;
  }
</style>
