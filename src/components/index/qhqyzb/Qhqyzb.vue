<template>
  <!--千户占比-->
  <div id="qhqyzb" class="qhqyzb__box">

    <h3 class="picture__title">千户集团占比概况</h3>
    <div id="qhqyzb_picture" class="qhqyzb_picture"></div>
  </div>
</template>
<script>
  export default {
    props: ['countQhjtZbList'],
    name: 'Qhqyzb',
    data() {
      return {
        option2: {
//                title:{
//                  text: '千户集团占比概况',
//                  left: 'center',
//                  top: '-5',
//                  textStyle: {
//                    color: '#fff'
//                  }
//                },
          tooltip: {
            trigger: 'item',
//            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: ['25%','2%']
          },
//          color: ['#fdbc39', '#77d877'],
          series: [
            {
              name: '千户纳税人占比',
              type: 'pie',
              hoverOffset: 5,
              startAngle: 90,
              selectedMode: 'single',
              radius: [0, '30%'],
              center: ['50%', '60%'],
              tooltip: {
                formatter: "{a} <br/><span style='color:#FFA247'>{b}: {c}户 ({d}%)</span>",
              },
              label: {
                formatter: "{b}\n{d}%",
                position: 'outside',
              },
              labelLine: {
                length2: 20
              },
              data: [
                {value: 335, name: '千户纳税人',itemStyle: {color: '#bdd834'}},
                {value: 1548, name: '全市纳税人', itemStyle:{color: '#77d877'} ,
                  label: {show: false}, labelLine: {show: false, emphasis:{show: false}}}
              ]
            },
            {
              name: '千户纳税人收入占比',
              type: 'pie',
              hoverOffset: 5,
              startAngle: 180,
              radius: ['40%', '55%'],
              center: ['50%', '60%'],
              tooltip: {
                formatter: "{a} <br/><span style='color:#FFA247'>{b}: {c}元 ({d}%)</span>",
              },
              label: {
                formatter: "{b}\n{d}%",
                position: 'outside',
                fontSize: 12
              },
              labelLine: {
                length: 6
              },
              data: [
                {value: 1000, name: '千户纳税人税收收入', itemStyle: {color: '#ffb753'}},
                {value: 1548, name: '全市纳税人收入', itemStyle: {color: '#f79441'},
                  label: {show: false}, labelLine: {show: false, emphasis:{show: false}}}
              ]
            }
          ]
        }
      }
    },
    mounted: function () {
      let self = this;
      self.$nextTick(function () {
        self.dataInit(self.option2);
      })
    },
    watch:{
      countQhjtZbList:function(){
        let self = this;
        self.dataInit(self.option2);
      }
    },
    methods: {
      dataInit: function (option) {
        let self = this;
        let echarts = this.echarts.init(document.getElementById('qhqyzb_picture'));
        if(this.countQhjtZbList){
          //户数
          self.option2.series[0].data[0].value = self.countQhjtZbList.data.qhjthszb[0].hs;
          self.option2.series[0].data[0].name = self.countQhjtZbList.data.qhjthszb[0].mc;
          self.option2.series[0].data[1].value = self.countQhjtZbList.data.qhjthszb[1].hs;
          self.option2.series[0].data[1].name = self.countQhjtZbList.data.qhjthszb[1].mc;
          //税收
          self.option2.series[1].data[0].value = self.countQhjtZbList.data.qhjtSssr[0].hj;
          self.option2.series[1].data[0].name = self.countQhjtZbList.data.qhjtSssr[0].mc;
          self.option2.series[1].data[1].value = self.countQhjtZbList.data.qhjtSssr[1].hj;
          self.option2.series[1].data[1].name = self.countQhjtZbList.data.qhjtSssr[1].mc;
        }
        echarts.clear();
        echarts.setOption(option);
      }
    }
  }
</script>
<style scoped="">
  .qhqyzb__box {
    position: relative;
    padding: 20px;
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

  .qhqyzb_picture {
    width: 100%;
    height: 100%;
  }

  .picture__title {
    position: absolute;
    left: 0;
    right: 0;
    top: 15px;
    z-index: 99;
    text-align: center;
    color: #fff;
  }
</style>
