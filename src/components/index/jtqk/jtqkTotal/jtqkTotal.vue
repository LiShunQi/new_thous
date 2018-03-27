<template>
  <div class="">
    <div id="allback" class="allback">
      <h3 class="header__title">{{jt_mc}}</h3>
      <Row style="margin-top: 30px;">
        <Col class="t-c" :xs="{ span: 4, offset: 1 }" :lg="{ span: 4, offset: 1 }">
        <div class="sssr"><b>{{jt_tj.hj}}</b> 亿</div>
        <div class="spantext" :class="[(parseFloat(jt_tj.bl) >= 0)?'greenColor':'redColor']">
          <i class="iconfont bl" :class="[(parseFloat(jt_tj.bl) >= 0)? 'icon-plus-select-up': 'icon-plus-select-down']"></i><span class="greentext">{{(parseFloat(jt_tj.bl)*100).toFixed(4)}}%</span><span class="ffftext">税收收入</span>
        </div>
        </Col>
        <Col class="t-c" :xs="{ span: 4, offset: 1 }" :lg="{ span: 4, offset: 1 }">
        <div class="zzs"><b>{{jt_tj.zzs}}</b>亿</div>
        <div class="spantext" :class="[(parseFloat(jt_tj.blzzs) >= 0)?'greenColor':'redColor']">
          <i class="iconfont bl" :class="[(parseFloat(jt_tj.blzzs) >= 0)? 'icon-plus-select-up': 'icon-plus-select-down']"></i><span class="greentext">{{(parseFloat(jt_tj.blzzs)*100).toFixed(4)}}%</span><span
          class="ffftext">增值税收入</span>
        </div>
        </Col>
        <Col class="t-c" :xs="{ span: 4, offset: 1 }" :lg="{ span: 4, offset: 1 }">
        <div class="sds"><b>{{jt_tj.sds}}</b> 亿</div>
        <div class="spantext" :class="[(parseFloat(jt_tj.blsds) >= 0)?'greenColor':'redColor']">
          <i class="iconfont bl" :class="[(parseFloat(jt_tj.blsds) >= 0)? 'icon-plus-select-up': 'icon-plus-select-down']"></i><span class="greentext">{{(parseFloat(jt_tj.blsds)*100).toFixed(4)}}%</span><span
          class="ffftext">所得税收入</span>
        </div>
        </Col>
        <Col class="t-c" :xs="{ span: 4, offset: 1 }" :lg="{ span: 4, offset: 1 }">
        <div class="xfs"><b>{{jt_tj.xfs}}</b> 亿</div>
        <div class="spantext" :class="[(parseFloat(jt_tj.blxfs) >= 0)?'greenColor':'redColor']">
          <i class="iconfont bl" :class="[(parseFloat(jt_tj.blxfs) >= 0)? 'icon-plus-select-up': 'icon-plus-select-down']"></i><span class="greentext">{{(parseFloat(jt_tj.blxfs)*100).toFixed(4)}}%</span><span
          class="ffftext">消费税收入</span>
        </div>
        </Col>
        <Col class="t-c" :xs="{ span: 4 }" :lg="{ span: 4}">
        <div class="cyqy"><b>{{jt_hs}}</b> 个</div>
        <div class="spantext">
          <!--<i class="iconfont icon-plus-select-up"></i><span class="greentext">{{qyObj.bl}}%</span>-->
          <span class="ffftext">成员企业</span>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    props:['jt_total','jt_qyhs'], //统计
    name: 'jtqkTotal',
    data () {
      return {
        jt_tj:{}, //集团统计
        jt_mc: '', //集团名称
        jt_hs: 0, //集团企业户数
      }
    },
    watch:{
      jt_total:function() {
        this.jt_tj = this.jt_total.data[0]; //集团统计
      },
      jt_qyhs: function () {
        this.handleData();
      }
    },
    mounted: function () {
        let self =  this;
        self.$nextTick(function () {
          if(self.jt_total){
            self.jt_tj = self.jt_total.data[0]; //集团统计
          }
          if(self.jt_qyhs){
              self.handleData();
          }
        });
        console.log('集团情况total',this.jtqyssList)
    },
    methods: {
      handleData: function () {
        let self = this;
        let hs = 0;
        self.jt_mc = self.jt_qyhs.data[0].nsrmc;
        self.jt_qyhs.data.forEach((el,i,arr) => {
          hs += parseInt(el.hs);
        });
        self.jt_hs = hs; //统计集团企业户数
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
  .spantext .ffftext {
    color: #65aad4;
    font-size: 12px;
    margin-left: 8px;
  }

  .sssr {
    color: #D0CACA;
    font-size: 24px;
  }

  .zzs {
    color: #D0CACA;
    font-size: 24px;
  }

  .sds {
    color: #D0CACA;
    font-size: 24px;
  }
  .xfs{
    color: #D0CACA;
    font-size: 24px;
  }
  .cyqy{
    color: #D0CACA;
    font-size: 24px;
  }

  .allback {
    position: relative;
    padding: 20px;
    height: 130px;
    background-image: url(../../../../assets/images/alljt.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .header__title{
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    z-index:99;
    color: #fff;
    text-align: center;
  }
</style>
