<template>
  <div class="content">
    <div id="allback" class="allback">
      <div class="text-center">
        <span class="backall">整体情况</span>
        <span class="timeback">截止数据到{{lastTime}}</span>
      </div>
      <Row style="margin-top: 10px;">
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 7, offset: 2 }" class="t-c">
        <div class="yiyuan" ><b style=" font-family: 'Impact Regular';">{{total_ss}}</b> 亿</div>
        <div class="spantext">
          <span :class="[isUp?'greenColor':'redColor']">
            <i class="iconfont bl" :class="[isUp? 'icon-plus-select-up': 'icon-plus-select-down']"></i><span class="greentext">{{total_bl}}</span>
          </span>
          <span  class="ffftext">税收收入</span>
        </div>
        </Col>
        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }" class="t-c">
        <div class="fushu" ><b style=" font-family: 'Impact Regular';">{{jtNum}}</b> 户</div>
        <div class="spantext">
          <!--<i class="iconfont icon-plus-select-up"></i><span class="greentext">15%</span>-->
          <span class="ffftext">集团户数</span>
        </div>
        </Col>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 2 }" class="t-c">
        <div class="nummber" ><b style=" font-family: 'Impact Regular';">{{qhjtNum}}</b> 个</div>
        <div class="spantext">
          <!--<i class="iconfont icon-plus-select-up"></i><span class="greentext">15%</span>-->
          <span class="ffftext">成员企业</span>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'allback',
    props: ['ssHs'],
    data () {
      return {
        jtNum: '', //集团户数
        qhjtNum: '', //企业户数
        total_ss: '', //总税收
        total_bl: '', //比例
        isUp: true, //是否上涨
        lastTime: '', //截止时间
      }
    },
    mounted: function () {
      let self = this;
      self.$nextTick(function () {
        self.gettj(self.ssHs);
      })
    },
    methods: {
      //获取截止时间
      getTime: function () {
        let self = this;
        if(sessionStorage.getItem('lastTime')){
          self.lastTime = self.tool.toDateString(sessionStorage.getItem('lastTime'),'yyyy年MM月');
        }else{
          self.lastTime = self.tool.toDateString(new Date(),'yyyy年MM月');
        }
      },
      //获取统计数据
      gettj: function(data){
        if(data){
          let bl = parseFloat(data.data.allSs.bl) - 1; //比例
          this.jtNum =  data.data.jtNum;
          this.qhjtNum = data.data.qhjtNum;
          this.total_ss = (parseFloat(data.data.allSs.hj)/Math.pow(10,8)).toFixed(4);
          //判断上涨还是下降
          if(bl >= 0){
            this.isUp = true;
            this.total_bl  = bl.toFixed(4) + '%';
          }else if(bl < 0){
            this.isUp = false;
            this.total_bl  = bl.toFixed(4) + '%';
          }
        }
      },
    },
    watch: {
      ssHs: function (data){
        this.gettj(data);
        this.getTime();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .spantext .icon-plus-select-up, .spantext .greentext {
    /*color: #22AB36;*/
    font-size: 12px;
    vertical-align: middle;
    font-weight: bold;
  }
  .bl.icon-plus-select-up,.bl.icon-plus-select-down {
    font-size: 20px ;
    vertical-align: middle ;
  }
  .spantext .ffftext {
    color: #fff;
    font-size: 12px;
    margin-left: 8px;
  }

  .yiyuan {
    color: #7CD972;
    font-family: 'Impact Regular';
    font-weight: 300;
    font-size: 25px;
  }

  .fushu {
    color: #FFC43B;
    font-weight: 300;
    font-size: 25px;
  }

  .nummber {
    color: #94CCC8;
    font-weight: 300;
    font-size: 25px;
  }

  .timeback {
    display: block;
    color: #60B8EB;
    font-size: 12px;
  }

  .backall {
    color: #fff;
    font-size: 20px;
  }

  .allback {
    padding: 20px;
    height: 180px;
    background-image: url(../../../../assets/images/allback.png);
    background-repeat: no-repeat;
    background-size: 100%;
  }

  .content {
    padding: 10px;
  }
</style>
