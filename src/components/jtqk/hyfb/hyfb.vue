<!--menglihuan
    集团在蓉区域分布-->
<template>
  <div class="content">
    <h3 class="picture__title">集团在蓉行业分布</h3>
    <div id="hyfb" class="pic" style="width: 100%;height:100%"></div>
  </div>
</template>

<script>
  export default {
    props: ['szsr'],
    name: 'hyfb',
    data () {
      return {
        option: {
          title: [
//              {
//                text: '行业户数占比',
//                left: 130,
//                top: 50,
//                textStyle: {
//                  color: '#fff',
//                  fontSize: '10',
//                  fontWeight: 'normal'
//                }
//              },
//              {
//                text: '行业税收收入占比',
//                left: 380,
//                top: 50,
//                textStyle: {
//                  color: '#fff',
//                  fontSize: '10',
//                  fontWeight: 'normal'
//                }
//              },
          ]
          ,
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: 'vertical',
            height: 100,
//            width:40,
//            itemGap:12,
            itemWidth: 10,
            itemHeight: 10,
            left: 30,
            right: 10,
            bottom: 10,
            top: 230,
            textStyle: {
              color: '#fff',
              fontSize: 12
            },
            data: [
              {
                name: '批发和零售业', icon: 'circle'
              },
              {
                name: '金融业', icon: 'circle'
              },
              {
                name: '制造业', icon: 'circle'
              },
              {
                name: '房地产业', icon: 'circle'
              },
              {
                name: '建筑业', icon: 'circle'
              },
              {
                name: '租赁和商务服务业', icon: 'circle'
              },
              {
                name: '信息传输,软件和信息技术业', icon: 'circle',
              },
              {
                name: '科学研究和技术服务业', icon: 'circle'
              },
              {
                name: '交通运输,仓储和邮政业', icon: 'circle'
              },
              {
                name: '电力,热力,燃气,及水生产和供应业', icon: 'circle'
              },
              {
                name: '住宿和餐饮业', icon: 'circle'
              },
              {
                name: '采矿业', icon: 'circle'
              },
              {
                name: '农,林,牧,渔业', icon: 'circle'
              },
              {
                name: '卫生和社会工作', icon: 'circle'
              },
              {
                name: '教育', icon: 'circle'
              },
              {
                name: '居民服务,修理和其他服务业', icon: 'circle'
              },
              {
                name: '文化,体育,和娱乐业', icon: 'circle'
              },
              {
                name: '水利,环境和公共设施管理业', icon: 'circle'
              },
              {
                name: '公共管理,社会保障和社会组织', icon: 'circle'
              }
            ]
          },
          color:[
            '#fbab2e',
            '#ff561b',
            '#8b613b',
            '#9d8569',
            '#bf9d6f',
            '#09fcff',
            '#a3005d',
            '#617140',
            '#23b574',
            '#9e826a',
            '#95cfd1',
            '#3bb546',
            '#5d3917',
            '#ffdf3c',
            '#01A89E'],
          series: [
            {
              name: '行业税收收入占比',
              type: 'pie',
              hoverOffset: 5,
              radius: [0, '30%'],
              center: ['50%', '40%'],
              avoidLabelOverlap: false,
              tooltip: {
                formatter: '{b}<br/>{c}元'
              },
              label: {
                normal: {
                  show: true,
                  lineHeight: 18,
                  padding:5,
                  backgroundColor: '#093A72',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  formatter: ['{b}','{c}元'].join('\n'),
                  color: '#fff',
                  position: 'outside',
                  align: 'center',
                  verticalAlign: 'top',
                  rich: {
                    b: {
                      color: '#fff',
                      lineHeight: 22,
                      align: 'center'
                    },
                    d: {
                      color: '#fff',
                      lineHeight: 22,
                      align: 'center'
                    },
                    abg: {
                      height: 22,
                      width: '100%',
                    }
                  }
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 40,
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
//                      color: ['#f00','#0f0'],
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              data: [
                {
                  name: '批发和零售业', value: 5
                },
                {
                  name: '金融业', value: 5
                },
                {
                  name: '制造业', value: 5
                },
                {
                  name: '房地产业', value: 5
                },
                {
                  name: '建筑业', value: 5
                },
                {
                  name: '租赁和商务服务业', value: 5
                },
                {
                  name: '信息传输,软件和信息技术业', value: 5,
                },
                {
                  name: '科学研究和技术服务业', value: 5
                },
                {
                  name: '交通运输,仓储和邮政业', value: 5
                },
                {
                  name: '电力,热力,燃气,及水生产和供应业', value: 5
                },
                {
                  name: '住宿和餐饮业', value: 5
                },
                {
                  name: '采矿业', value: 5
                },
                {
                  name: '农,林,牧,渔业', value: 5
                },
                {
                  name: '卫生和社会工作', value: 5
                },
                {
                  name: '教育', value: 5
                },
                {
                  name: '居民服务,修理和其他服务业', value: 5
                },
                {
                  name: '文化,体育,和娱乐业', value: 5
                },
                {
                  name: '水利,环境和公共设施管理业', value: 5
                },
                {
                  name: '公共管理,社会保障和社会组织', value: 10
                }
              ]
            },
            {
              name: '行业户数占比',
              startAngle: 180,
              type: 'pie',
              hoverOffset: 5,
              radius: ["35%", '45%'],
              center: ['50%', '40%'],
              avoidLabelOverlap: false,
              tooltip: {
                formatter: '{b}<br/>{c}户'
              },
              label: {
                normal: {
                  show: true,
                  lineHeight:22,
                  padding: 5,
                  backgroundColor: '#093A72',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  formatter: ['{b}','{c}户'].join('\n'),
                  color: '#fff',
                  position: 'outside',
                  align: 'center',
                  verticalAlign: 'top',
                  rich: {
                    b: {
                      color: '#fff',
                      lineHeight: 22,
                      align: 'center'
                    },
                    d: {
                      color: '#fff',
                      lineHeight: 22,
                      align: 'center'
                    },
                    abg: {
                      height: 22,
                      width: '100%',
                    }
                  }
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 20,
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              data: [
                {
                  name: '批发和零售业', value: 5
                },
                {
                  name: '金融业', value: 5
                },
                {
                  name: '制造业', value: 5
                },
                {
                  name: '房地产业', value: 5
                },
                {
                  name: '建筑业', value: 5
                },
                {
                  name: '租赁和商务服务业', value: 5
                },
                {
                  name: '信息传输,软件和信息技术业', value: 5
                },
                {
                  name: '科学研究和技术服务业', value: 5
                },
                {
                  name: '交通运输,仓储和邮政业', value: 5
                },
                {
                  name: '电力,热力,燃气,及水生产和供应业', value: 5
                },
                {
                  name: '住宿和餐饮业', value: 5
                },
                {
                  name: '采矿业', value: 5
                },
                {
                  name: '农,林,牧,渔业', value: 5
                },
                {
                  name: '卫生和社会工作', value: 5
                },
                {
                  name: '教育', value: 5
                },
                {
                  name: '居民服务,修理和其他服务业', value: 5
                },
                {
                  name: '文化,体育,和娱乐业', value: 5
                },
                {
                  name: '水利,环境和公共设施管理业', value: 5
                },
                {
                  name: '公共管理,社会保障和社会组织', value: 10
                }
              ]
            },
          ]
        }
      }
    },
    mounted: function () {
      let self = this;
      console.log('集团行业分布list ', self.szsr);
      self.$nextTick(function () {
        self.hyfbFunction();
      })
    },
    methods: {
      hyfbFunction(){
        let self = this;
        let myChart = self.echarts.init(document.getElementById('hyfb'));

        self.handleData();
        myChart.clear();
        myChart.setOption(self.option);
      },
      //数据处理
      handleData: function () {
        let self = this;
        let ret1 = []
          , ret2 = [];

        if (self.szsr) {
          //在蓉集团行业分布(税收)
          self.szsr.data.jtSs.forEach((el, i, arr) => {
            ret1.push({value: el.hj, name: el.hymc});
            ret2.push({name: el.hymc, icon: 'circle'})
          });
          self.option.series[0].data = ret1.slice();
          ret1 = [];
          self.option.legend.data = ret2.slice();
          ret2 = [];

          //在蓉集团行业分布(户数)
          self.szsr.data.jths.forEach((el, i, arr) => {
            ret1.push({value: el.hyhs, name: el.hymc});
            ret2.push({name: el.hymc, icon: 'circle'})
          });
          self.option.series[1].data = ret1.slice();ret1 = [];
          self.option.legend.data = ret2.slice();ret2 = [];
        }
      },
    },
    watch: {
        szsr: function () {
          this.hyfbFunction();
        }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content{
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
    background-position: top center,bottom center,left center, right center, left top,right top;
    background-origin: padding-box,padding-box,padding-box,padding-box,content-box,content-box;
    background-size: 98% auto, 98% auto,auto 98%,auto 98%,auto auto,auto auto;
  }
  .pic{
    background: #093a72;
    /*border-radius:2px ;*/
    text-align: center;
    background-image: url(../../../assets/images/titleftbj.png),url(../../../assets/images/titrightbj.png) ;
    background-position: 20px 20px, 95% 20px;
    background-repeat: no-repeat,no-repeat;
  }
  .picture__title{
    position: absolute;
    top:20px;
    left: 0;
    right: 0;
    z-index: 99;
    text-align: center;
    color: #fff;
  }
</style>

