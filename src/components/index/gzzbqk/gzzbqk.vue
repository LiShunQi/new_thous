<!--menglihuan-->
<template>
  <div class="content">
    <div id="gzzbqk" class="pic" style="width: 100%;height:100%"></div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    props: ['countSzzbBySzList'],
    name: 'gzzbqk',
    data () {
      return {
        option: {
          title: [
            {
              text: '各税种占比概况',
              left: 110,
              top: 12,
              textStyle: {
                color: '#fff',
                fontSize: '16',
                fontWeight: '600'
              }
            },
          ],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/><span style='color:#FFA247'>{b}: {c}元 ({d}%)</span>",
            textStyle: {
                fontSize: 14
            }
          },
          legend: {
            orient: 'vertical',
            right: 10,
            top: 150,
            itemWidth: 5,
            itemHeight: 5,
            textStyle: {
              color: '#fff',
            },
            data: ['增值税', '所得税', '消费税']
          },
          color: ['#93ccce', '#e18197', '#8abe6e'],
          series: [
            {
              name: '各税种占比概况',
              type: 'pie',
              hoverOffset: 5,
              startAngle: 180,
              selectedMode: 'single',
              radius: ['30%', '45%'],
              avoidLabelOverlap: false,
              label: {
                formatter: '{d}%',
                position: 'outside',
                align: 'center',
                verticalAlign: 'top'
              },
              labelLine: {},
              itemStyle: {
//                      color: ['#f00','#0f0'],
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              data: [
                {value: 512423, name: "增值税"},
                {value: 2432543.8, name: "所得税"},
                {value: 2343234.2, name: "消费税"}
              ]
            }
          ]
        }
      }
    },
    watch: {
      countSzzbBySzList: function () {
        this.option.series[0].data = []
        this.option.series[0].data.push ( {
          value: this.countSzzbBySzList.data.zzs, name: '增值税'
        });
        this.option.series[0].data.push ({
          value: this.countSzzbBySzList.data.sds, name: '所得税'
        }) ;
        this.option.series[0].data.push ({
          value: this.countSzzbBySzList.data.xfs, name: '消费税'
        });
        this.gzzbqkFunction();
      }
    },
    mounted: function () {
      this.gzzbqkFunction();
    },
    methods: {
      gzzbqkFunction(){
        var myChart = Vue.prototype.echarts.init(document.getElementById('gzzbqk'));
        myChart.setOption(this.option);
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    position: relative;
    padding: 2px 5px 3px 2px;
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
    background-position: top center, bottom center, left center, right center, left top, right top;
    background-origin: padding-box, padding-box, padding-box, padding-box, content-box, content-box;
    background-size: 98% auto, 98% auto, auto 98%, auto 98%, auto auto, auto auto;
  }

  .pic {
    background: #102B7C;
    /*border-radius:2px ;*/
    text-align: center;
    background-image: url(../../../assets/images/titleftbj.png), url(../../../assets/images/titrightbj.png);
    background-position: 20px 20px, 95% 20px;
    background-repeat: no-repeat, no-repeat;
  }
</style>
