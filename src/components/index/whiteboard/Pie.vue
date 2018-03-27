<!--menglihuan-->
<template>
  <div class="contents">
    <Row >
      <Col span="12"  style="height:250px;padding-right: 5px;">
      <div id="gzzbqk" class="pic" ></div>
     </Col>
      <Col span="12"  style="height:250px;padding-left: 5px;">
      <div id="gzzbqktwo" class="pic"></div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'gzzbqk',
    props: ['white_qyzb','white_szzb'],
    data () {
      return {
          //区域占比optin
          qyzb_option: {
            title:
              [
                {
                  text: '区域占比',
                  x: 'center',
                  top: 12,
                  textStyle: {
                    color: '#fff',
                    fontSize: '17',
                    fontWeight: 'normal'
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
              right: 20,
              top:120,
              itemWidth:5,
              itemHeight:5,
              textStyle:{
                color: '#fff',
              },
              data:['其他行业','电力、热力、燃气及水生产和供应业']
            },
            color: ['#FF5A00','#92CCCE'],
            series: [
              {
                name:'行业占比',
                type:'pie',
                hoverOffset: 5,
                startAngle: 45,
                radius: ['40%', '60%'],
                center:['50%','60%'],
                avoidLabelOverlap: false,
                label: {
                  formatter:'{d}%',
                  position: 'outside',
                  align: 'center',
                  verticalAlign: 'top',
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
                  {value:71, name:'其他行业'},
                  {value:29, name:'电力、热力、燃气及水生产和供应业'}
                ]
              }
            ]
          },
          //行业占比option
          szzb_option: {
            title:
              [
                {
                  text: '税种占比',
                  x: 'center',
                  top: 12,
                  textStyle: {
                    color: '#fff',
                    fontSize: '17',
                    fontWeight: 'normal'
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
              right: 60,
              top:100,
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
                startAngle: 180,
                radius: ['40%', '60%'],
                center:['50%','60%'],
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
          self.gzzbqkFunction();
          self.gzzbqktwoFunction();
        });
    },
    methods:{
      gzzbqkFunction(){
        let self = this;
        let myChart = self.echarts.init(document.getElementById('gzzbqk'));

        self.handle_qyzb();
        myChart.clear();
        myChart.setOption(self.qyzb_option);
      },
      gzzbqktwoFunction(){
        let self = this;
        let myChart = self.echarts.init(document.getElementById('gzzbqktwo'));

        self.handle_szzb();
        myChart.clear();
        myChart.setOption(self.szzb_option);
      },
      handle_qyzb: function () {
        let self = this;
        let ret1 = [];
        if(self.white_qyzb){
            self.white_qyzb.forEach((el,i,arr) => {
                ret1.push(el.hymc);
            });
            self.qyzb_option.legend.data = ret1.slice();ret1 = [];
          self.qyzb_option.series[0].data[0].value = self.white_qyzb[0].hj;
          self.qyzb_option.series[0].data[0].name = self.white_qyzb[0].hymc;

          self.qyzb_option.series[0].data[1].value = self.white_qyzb[1].ssje;
          self.qyzb_option.series[0].data[1].name = self.white_qyzb[1].hymc;
        }
      },
      handle_szzb: function () {
        let self = this;

        if(self.white_szzb){
          self.szzb_option.series[0].data[0].value = self.white_szzb.zzs;
          self.szzb_option.series[0].data[1].value = self.white_szzb.sds;
          self.szzb_option.series[0].data[2].value = self.white_szzb.xfs;
        }
      }
    },
    watch: {
      white_qyzb: function () {
          this.gzzbqkFunction();
      },
      white_szzb: function () {
          this.gzzbqktwoFunction();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contents{
    position: relative;
    padding: 2px 5px 3px 2px;
    width: 100%;
    height: 100%;
  }
  .pic{
    padding:15px 0px;
    width: 100%;height:100%;
    /*text-align: center;*/
    background-image: url(../../../assets/images/allback.png);
    background-repeat: no-repeat,no-repeat;
    background-size: 100% 100%;
  }
</style>
