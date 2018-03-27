<template>
  <div class="content">
    <div id="main" class="hello" style="width: 100%; height: 200px;"></div>
    <!--查看按钮-->
    <div class="look-detail"></div>
    <i class="iconfont icon-fangdajing look-detail-icon"  @click="modalChart"></i>
    <!--弹框-->
    <v-dialog v-if="isShow">
        <div slot="content" id="big_chart" style="width: 100%; height: 100%;"></div>
    </v-dialog>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VDialog from "../../../dialog/Modal"
  export default {
    props: ['tbsrqkbList'],
    name: 'HelloWorld',
    components: {
      VDialog
    },
    data () {
      return {
        isShow: false,
        option: {
          title: {
            text: '同比收入情况比',
            textStyle: {
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16
            },
            x: 'center',
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            orient: 'horizontal',
            right: 10,
            top: 30,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
              color: '#fff',
            },
            data: ['上期', '本期']
          },
          toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
              dataView: {readOnly: false},
              restore: {},
              saveAsImage: {}
            }
          },
          grid: {
            left: '0',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            axisLine: {
              lineStyle: {
                color: '#64B6ED',
              }
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#D9E1FF',
              },
            },
            nameTextStyle: {
              color: '#D0D4FC'
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: true,  //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ['#64B6ED'],
                opacity: 0.5
              }
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
          series: [
            {
              name: '上期',
              type: 'line',
              stack: '总量',
              data: [320, 332, 301, 334, 390, 8540, 320, 320, 5000, 301, 334, 900],
              symbol: 'circle',     //设定为实心点
              symbolSize: 10,   //设定实心点的大小
              itemStyle: {
                normal: {
                  color: '#D05640',
                  borderColor: '#fff',
                  borderWidth: 2,
                  lineStyle: {
                    color: '#A8AF1F',
                    width: 2.5
                  },
                }
              },
            },
            {
              name: '本期',
              type: 'line',
              stack: '总量',
              data: [820, 932, 901, 934, 1290, 1330, 1320, 320, 332, 301, 334, 390],
              symbol: 'circle',     //设定为实心点
              symbolSize: 10,   //设定实心点的大小
              itemStyle: {
                normal: {
                  color: '#9544E5',
                  borderColor: '#fff',
                  borderWidth: 2,
                  lineStyle: {
                    color: '#4479F0',
                  }
                }
              },
            }
          ]
        }
      }
    },
    watch: {
      tbsrqkbList: function () {
        let self = this;
        self.option.series[0].data = [];
        self.option.series[1].data = [];
        self.option.xAxis.data = [];
        self.tbsrqkbList.data.lastList.forEach(function (value, index) {
          self.option.series[0].data.push(value.hj);
          self.option.xAxis.data.push(value.yf.substring(value.yf.length-2,value.yf.length));
        });
        self.tbsrqkbList.data.nowList.forEach(function (value, index) {
          self.option.series[1].data.push(value.hj);
        });
        self.iconmFunction();
      }
    },
    mounted: function () {
      this.iconmFunction();//同比图
    },
    methods: {
      iconmFunction(){//同比图
        let self = this;
        var myChart = Vue.prototype.echarts.init(document.getElementById('main'));
        myChart.setOption(self.option);
      },
      modalChart: function () { //弹框图表
        let self = this;
        self.isShow = !self.isShow;
        setTimeout(function () {
          let myChart = Vue.prototype.echarts.init(document.getElementById('big_chart'));
          myChart.setOption(self.option);
        },300)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    position: relative;
    margin: 10px;
    overflow: hidden;
  }

  .hello {
    padding: 10px 20px;
    background: #102B7C;
    border-radius: 8px;
    background-image: url(../../../../assets/images/titleftbj.png), url(../../../../assets/images/titrightbj.png);
    background-position: 20px 20px, 95% 20px;
    background-repeat: no-repeat, no-repeat;
  }
  /*放大查看*/
  .look-detail{
    position: absolute;
    right: 0;
    bottom: 0;
    cursor: pointer;
    width: 0;
    height: 0;
    border-bottom: 50px solid rgba(0,0,0,.3);
    border-left: 50px solid transparent;
  }
  .look-detail-icon {
    position: absolute;
    right: 5px;
    bottom: 0;
    font-size: 20px;
    color: #5dc1fc;
    cursor: pointer;
  }
</style>
