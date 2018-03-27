<template>
  <div class="qysztbbh">
    <!--头部区域-->
    <h3 class="header__title">企业税种同比变化</h3>

    <!--图标区域-->
    <div id="con-qysztbbh" style="width: 100%;height:100%;"></div>
  </div>
</template>
<script>
  export default {
    name: 'qysztbbh',
    props: ['szsr'],
    data () {
      return {
          option: {
            tooltip: {
              trigger: 'axis',
              formatter: function (params) {
                let str = params[0].name + '<br/>';
                params.forEach((el,i,arr) => {
                  str += el.seriesName + ': ' + parseFloat(el.value).toFixed(4) + '%' + '<br/>';
                });
                return str;
              }
            },
            legend: {
              orient: 'horizontal',
              top: 25,
              right: 10,
              itemWidth: 10,
              itemHeight: 10,
              textStyle: {
                color: '#fff',
              },
              data: ['增值税', '所得税', '消费税']
            },
            grid: {
              left: '2%',
              right: '2%',
              bottom: '2%',
              top:'25%',
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
//              min: -10,
//              max: 40,
//            interval: 10,
//            splitNumber: 7,
              splitLine: {
                show: true,  //  改变轴线颜色
                lineStyle: {
                  // 使用深浅的间隔色
                  color: ['#64B6ED']
                }
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
            series: [
              {
                name: '增值税',
                type: 'line',
                stack: '总量',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                showSymbol: true,
                itemStyle: {
                  normal: {
                    color: '#ffed27',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#c6ce3d',
                      width:2.5
                    },
                  }
                },
              },
              {
                name: '所得税',
                type: 'line',
                stack: '总量',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    color: '#ed5d28',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#7c4e59'
                    }
                  }
                },
              },
              {
                name: '消费税',
                type: 'line',
                stack: '总量',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    color: '#3878f4',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#245ec2'
                    }
                  }
                },
              }
            ]
          }
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.qysztbbhFun();
      })
    },
    methods: {
      qysztbbhFun(){
        let self = this;
        let myChart = this.echarts.init(document.getElementById('con-qysztbbh'));

        self.handleData();
        myChart.clear();
        myChart.setOption(self.option);
      },
      //处理数据
      handleData: function () {
        let self = this
          ,ret1 = []
          ,ret2 = [];
        if(self.szsr){
          if(self.szsr.data.zzstblist.length === 1 && !self.szsr.data.zzstblist.yf){
            let now = new Date()
              ,months = now.getMonth() + 1; //当前月

            for(let i = 1; i <= months; i++){
              ret2.push(i < 10? '0'+ i:i);
            }
            self.option.xAxis.data = ret2.slice();ret2 = [];
            //无数据返回
            return false;
          }

          //增值税
          self.szsr.data.zzstblist.forEach((el,i,arr) => {
            ret1.push(parseFloat(el.bl)*100);
            ret2.push(el.yf.substring(el.yf.length - 2));
          });
          self.option.series[0].data = ret1.slice();ret1 = [];
          self.option.xAxis.data = ret2.slice();ret2 = [];
          //所得税
          self.szsr.data.sdstblist.forEach((el,i,arr) => {
            ret1.push(parseFloat(el.bl)*100);
          });
          self.option.series[1].data = ret1.slice();ret1 = [];
          //消费税
          self.szsr.data.xfstblist.forEach((el,i,arr) => {
            ret1.push(parseFloat(el.bl)*100);
          });
          self.option.series[2].data = ret1.slice();ret1 = [];
        }
      }
    },
    watch: {
      szsr: function () {
        this.qysztbbhFun();
      }
    }
  }
</script>
<style scoped>
  .qysztbbh{
    position: relative;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-image: url(../../../../assets/images/titleftbj.png),
    url(../../../../assets/images/titrightbj.png);
    background-repeat: no-repeat;
    background-origin: content-box;
    background-position: top left, right top;
  }
  .header__title{
    position: absolute;
    color: #fff;
    top: 18px;
    left: 0;
    right: 0;
    text-align: center;
    z-index:99;
  }
</style>
