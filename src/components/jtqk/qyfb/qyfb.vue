<!--menglihuan
    集团在蓉区域分布-->
<template>
  <div class="content">
    <h3 class="picture__title">集团在蓉区域分布</h3>
    <div id="qyfb" class="pic" style="width: 100%;height:100%"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'qyfb',
    data () {
      return {
        //chart 实体
        chartsInstance: {},
        //charts option
        option: {
          tooltip: {
            trigger: 'item',
//            formatter: function (params) {
//              switch (params.seriesIndex){
//                case 0:
//                    return params.name + '<br/>' + params.value + '元';
//                    break;
//                case 1:
//                    return (params.name + "<br/>" + params.value + '户');
//                    break;
//                default:
//                    return;
//              }
//            },
          },
          legend: {
            orient:'vertical',
            height:80,
//            width:40,
//            itemGap:12,
            itemWidth:10,
            itemHeight:10,
            left: 100,
            right: 60,
            top: 240,
//            bottom: 40,
            textStyle:{
              color: '#fff',
              fontSize:12
            },
            data:[
              {name:'龙泉驿',icon:'circle'
              },
              {name:'高新区',icon:'circle'
              },
              {name:'彭州市',icon:'circle'
              },
              {name:'武侯区',icon:'circle'
              },
              {name:'青羊区',icon:'circle'
              },
              {name:'锦江区',icon:'circle'
              },
              {name:'成华区',icon:'circle',
              },
              {name:'金牛区',icon:'circle'
              },
              {name:'新都区',icon:'circle'
              },
              {name:'温江区',icon:'circle'
              },
              {name:'双流区',icon:'circle'
              },
              {name:'青白江区',icon:'circle'
              },
              {name:'都江堰',icon:'circle'
              },
              {name:'郫县',icon:'circle'
              },
              {name:'天府新区',icon:'circle'
              },
              {name:'崇州市',icon:'circle'
              },
              {name:'新津县',icon:'circle'
              },
              {name:'邛崃市',icon:'circle'
              },
              {name:'金堂县',icon:'circle'
              },
              {name:'大邑县',icon:'circle'
              },
              {name:'简阳市',icon:'circle'
              },
              {name:'浦江县',icon:'circle'
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
              name:'区税收收入情况',
              type:'pie',
              hoverOffset: 5,
              radius:  [0, '30%'],
              startAngle: 180,
              center : ['50%', '40%'],
              avoidLabelOverlap: false,
              tooltip: {
                formatter: '{b}<br/>{c}元'
              },
              label: {
                normal: {
                  show: true,
                  padding:5,
                  lineHeight:18,
                  backgroundColor: '#093A72',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  formatter:['{b}','{c}元'].join('\n'),
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
                    abg:{
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
              data:[
                {value:5, name:'龙泉驿'},
                {value:5, name:'高新区'},
                {value:5, name:'彭州市'},
                {value:5, name:'武侯区'},
                {value:5, name:'青羊区'},
                {value:5, name:'锦江区'},
                {value:5, name:'成华区'},
                {value:5, name:'金牛区'},
                {value:5, name:'新都区'},
                {value:5, name:'温江区'},
                {value:5, name:'双流区'},
                {value:5, name:'青白江区'},
                {value:5, name:'都江堰'},
                {value:5, name:'郫县'},
                {value:5, name:'天府新区'},
                {value:5, name:'崇州市'},
                {value:5, name:'新津县'},
                {value:5, name:'邛崃市'},
                {value:2, name:'金堂县'},
                {value:2, name:'大邑县'},
                {value:2, name:'简阳市'},
                {value:4, name:'浦江县'},
              ]
            },
            {
              name:'区户数',
              type:'pie',
              hoverOffset: 5,
              startAngle: 45,
              radius: ['35%', '45%'],
              center : ['50%', '40%'],
              tooltip: {
                formatter: '{b}<br/>{c}户'
              },
              label: {
                normal: {
                  show: true,
                  padding: 5,
                  lineHeight: 20,
                  backgroundColor: '#093A72',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  formatter:['{b}','{c}户'].join('\n'),
                  color: '#fff',
                  position: 'outside',
                  align: 'left',
                  verticalAlign: 'top',
                  rich: {
                    c: {
                      color: '#71b5e2',
//                      align: 'center'
                    },
                    d: {
                      color: '#fff',
                      lineHeight: 22,
                      align: 'center'
                    },
                    abg:{
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
                  length:20,
                }
              },
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              data:[
                {value:5, name:'龙泉驿'},
                {value:5, name:'高新区'},
                {value:5, name:'彭州市'},
                {value:5, name:'武侯区'},
                {value:5, name:'青羊区'},
                {value:5, name:'锦江区'},
                {value:5, name:'成华区'},
                {value:5, name:'金牛区'},
                {value:5, name:'新都区'},
                {value:5, name:'温江区'},
                {value:5, name:'双流区'},
                {value:5, name:'青白江区'},
                {value:5, name:'都江堰'},
                {value:5, name:'郫县'},
                {value:5, name:'天府新区'},
                {value:5, name:'崇州市'},
                {value:5, name:'新津县'},
                {value:5, name:'邛崃市'},
                {value:2, name:'金堂县'},
                {value:2, name:'大邑县'},
                {value:2, name:'简阳市'},
                {value:4, name:'浦江县'},
              ]
            },
          ]
        }
      }
    },
    mounted:function(){
        let self = this;
        console.log('集团区域分布',self.jtqyssList);
        self.$nextTick(function () {
          self.chartsInstance = self.echarts.init(document.getElementById('qyfb'));
          self.qyfbFunction();
        });
    },
    methods:{
      //渲染函数
      qyfbFunction(){
        let self = this;
        self.handleData();

        self.chartsInstance.clear();
        self.chartsInstance.setOption(self.option);
      },
      handleData: function () {
        let self = this;
        let ret1 = []
          ,ret2 = [];

        if(self.jtqyssList){
//            alert(typeof self.jtqyssList)
          //在蓉集团区域分布（税收）
          self.jtqyssList.jtqyhsssBydq.data.forEach((el,i,arr) => {
            ret1.push({value: el.hj,name: el.swjgmc});
//            ret2.push({name: el.swjgmc,icon: 'circle'})
          });
          self.option.series[0].data = ret1.slice();ret1 = [];
//          self.option.legend.data = ret2.slice();ret2 = [];

          //在蓉集团区域分布（户数）
          self.jtqyssList.jtqyhs.data.forEach((el,i,arr) => {
            ret1.push({value: el.hs,name: el.swjgmc});
            ret2.push({name: el.swjgmc,icon: 'circle'})
          });
          self.option.series[1].data = ret1.slice();ret1 = [];
          self.option.legend.data = ret2.slice();ret2 = [];
        }
      }
    },
    watch: {
      jtqyssList: function () {
        this.qyfbFunction();
      }
    },
    computed: {
      ...mapState({
        jtqyssList: state => state.jtqy.jtqyssList,
      })
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
