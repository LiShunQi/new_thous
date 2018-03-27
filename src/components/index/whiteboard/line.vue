<!--menglihuan-->
<template>
  <div class="contents">
    <Row >
      <Col span="12"  style="height:300px;padding-right:5px;">
      <div id="lineszsrbh" class="pic" ></div>
      </Col>
      <Col span="12"  style="height:300px;padding-left: 5px">
      <div id="sztbbh" class="pic"></div>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'gzzbqk',
    props: ['white_zxt'],
    data () {
      return {
          srbh_option: {
            title: {
              text: '税种收入变化',
              textStyle: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize:16
              },
              x: 'center',
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              orient:'horizontal',
              right: 10,
              top:30,
              itemWidth:10,
              itemHeight:10,
              textStyle:{
                color: '#fff',
              },
              data:['增值税','所得税','消费税']
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
                name: '增值税',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 8540, 320, 320, 5000, 301, 334, 900, 330, 320],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    color: '#9446DA',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#C2BD25',
                      width:2.5
                    },
                  }
                },
              },
              {
                name: '所得税',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320, 320, 332, 301, 334, 390, 330, 320],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    color: '#D45849',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#D45849',
                    }
                  }
                },
              },
              {
                name: '消费税',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320, 320, 332, 301, 334, 390, 330, 320],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    color: '#4F64D2',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#4F64D2',
                    }
                  }
                },
              }
            ]
          },
          tbbh_option: {
            title: {
              text: '税种同比变化',
              textStyle: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize:16
              },
              x: 'center',
            },
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
              orient:'horizontal',
              right: 10,
              top:30,
              itemWidth:10,
              itemHeight:10,
              textStyle:{
                color: '#fff',
              },
              data:['增值税','所得税','消费税']
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
                formatter: '{value} %',
                textStyle: {
                  color: '#D9E1FF',
                },
              },
            },
            series: [
              {
                name: '增值税',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 334, 390, 8540, 320, 320, 5000, 301, 334, 900, 330, 320],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    color: '#9446DA',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#C2BD25',
                      width:2.5
                    },
                  }
                },
              },
              {
                name: '所得税',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320, 320, 332, 301, 334, 390, 330, 320],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    color: '#D45849',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#D45849',
                    }
                  }
                },
              },
              {
                name: '消费税',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 1320, 320, 332, 301, 334, 390, 330, 320],
                symbol: 'circle',     //设定为实心点
                symbolSize: 10,   //设定实心点的大小
                itemStyle: {
                  normal: {
                    color: '#4F64D2',
                    borderColor: '#fff',
                    borderWidth: 2,
                    lineStyle: {
                      color: '#4F64D2',
                    }
                  }
                },
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
        let  myChart = self.echarts.init(document.getElementById('lineszsrbh'));
        self.handleData();
        myChart.clear();
        myChart.setOption(self.srbh_option);
      },
      gzzbqktwoFunction(){
        let self = this;
        let myChart = self.echarts.init(document.getElementById('sztbbh'));
        self.handleData();
        myChart.clear();
        myChart.setOption(self.tbbh_option);
      },
      handleData(){
        let self = this
          ,ret1 = []
          ,ret2 = [];
        if(self.white_zxt){
            console.log('white_zxt',self.white_zxt);
          //增值税
          self.white_zxt.data.zzsnowList.forEach((el,i,arr) => {
            ret1.push(el.zzs);
            ret2.push(el.yf.substring(el.yf.length - 2));
          });
          self.srbh_option.series[0].data = ret1.slice();ret1 = [];
          self.srbh_option.xAxis.data = ret2.slice();ret2 = [];
          //所得税
          self.white_zxt.data.sdsnowList.forEach((el,i,arr) => {
            ret1.push(el.sds);
          });
          self.srbh_option.series[1].data = ret1.slice();ret1 = [];
          //消费税
          self.white_zxt.data.xfsnowList.forEach((el,i,arr) => {
            ret1.push(el.xfs);
          });
          self.srbh_option.series[2].data = ret1.slice();ret1 = [];


          //增值税
          self.white_zxt.data.zzstblist.forEach((el,i,arr) => {
            ret1.push(parseFloat(el.bl)*100);
            ret2.push(el.yf.substring(el.yf.length - 2));
          });
          self.tbbh_option.series[0].data = ret1.slice();ret1 = [];
          self.tbbh_option.xAxis.data = ret2.slice();ret2 = [];
          //所得税
          self.white_zxt.data.sdstblist.forEach((el,i,arr) => {
            ret1.push(parseFloat(el.bl)*100);
          });
          self.tbbh_option.series[1].data = ret1.slice();ret1 = [];
          //消费税
          self.white_zxt.data.xfstblist.forEach((el,i,arr) => {
            ret1.push(parseFloat(el.bl)*100);
          });
          self.tbbh_option.series[2].data = ret1.slice();ret1 = [];
        }
      }
    },
    watch: {
      white_zxt: function () {
        this.gzzbqkFunction();
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
    width: 100%;height:250px;
    padding:30px 20px;
    text-align: center;
    background-image: url(../../../assets/images/allback.png);
    background-repeat: no-repeat,no-repeat;
    background-size: 100% 100%;
  }
</style>
