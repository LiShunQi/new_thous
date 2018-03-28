<template>
  <div class="qyqk-table__content">
    <!--图切换还有更多-->
    <div class="tab_more">
      <!--下拉-->
      <div class="drop-down">
        <Icon type="arrow-down-b"></Icon>
      </div>
      <!--tab-->
      <div class="tab__wrap">
        <span class="tab tab__one f12 cursor f-color" :class="{active: tab1}" @click="toggleTable('zb')">
        主表
      </span>
        <span class="tab tab__two f12 cursor f-color" :class="{active: tab2}" @click="toggleTable('fb')">
        附表
      </span>
        <span class="tab tab__three f12 cursor f-color" :class="{active: tab3}" @click="toggleTable('zzb')">
        增值税减免税申报明细表
      </span>
      </div>
      <!--左右切换-->
      <div class="two__witch">
        <Icon class="two__witch_item" type="chevron-left"></Icon>
        <Icon class="two__witch_item" type="chevron-right"></Icon>
      </div>
      <a href="javascript:;" class="more cursor f-color">
        <!--更多-->
        <!--<i class="iconfont icon-gengduo"></i>-->
      </a>
      <span class="bot__line"></span>
      <span class="dot__line">
        <span class="line"></span>
      </span>
      <!--<img class="picture" src="../../../assets/images/box__border.png">-->
    </div>
    <!--表格标题-->
    <div class="table__title t-c cf">
      <h3>增值税纳税申报表（小规模纳税人使用）</h3>
      <h5 style="font-weight: normal;">税款所属期：<span>2018年02月01日</span><span>2018年02月28日</span></h5>
    </div>
    <div class="qyqk-table__wrap table__wrap">
      <table>
        <tbody>
          <tr>
            <td rowspan="8" class="t-c">(一)计税依据</td>
            <td rowspan="2" class="t-c">项目</td>
            <td rowspan="2" class="t-c">栏次</td>
            <td colspan="2" class="t-c">本期数</td>
            <td colspan="2" class="t-c">本年累计</td>
          </tr>
          <tr>
            <td class="t-c">货物及劳务</td>
            <td class="t-c">服务、不动产和无形资产</td>
            <td class="t-c">货物及劳务</td>
            <td class="t-c">服务、不动产和无形资产</td>
          </tr>
          <tr>
            <td>(一)应征增值税不含税销售额(3%征收税)</td>
            <td class="t-c">1</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
          </tr>
          <tr>
            <td>税务机关代开增值税专用发票不含税销售额</td>
            <td class="t-c">2</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
          </tr>
          <tr>
            <td>税控器具开具的普通发票不含税销售额</td>
            <td class="t-c">3</td>
            <td class="t-r">--</td>
            <td class="t-r">--</td>
            <td class="t-r">--</td>
            <td class="t-r">--</td>
          </tr>
          <tr>
            <td>(二)应征增值税不含税销售额(5%征收税)</td>
            <td class="t-c">4</td>
            <td class="t-r">--</td>
            <td class="t-r">--</td>
            <td class="t-r">--</td>
            <td class="t-r">--</td>
          </tr>
          <tr>
            <td>税务机关代开增值税专用发票不含税销售额</td>
            <td class="t-c">5</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
          </tr>
          <tr>
            <td>税控器具开具的普通发票不含税销售额</td>
            <td class="t-c">6</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
            <td class="t-r">0.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Tablemk',
    data(){
        return{
            tab1: true,
            tab2: false,
            tab3: false
        }
    },
    methods: {
        //table切换
        toggleTable: function (type) {
          switch (type){
            case 'zb':
               this.tab1 = true;
               this.tab2 = false;
               this.tab3 = false;
               break;
            case 'fb':
              this.tab1 = false;
              this.tab2 = true;
              this.tab3 = false;
              break;
            case 'zzb':
              this.tab1 = false;
              this.tab2 = false;
              this.tab3 = true;
              break;
            default:
                return;
          }
        }
    }
  }
</script>
<style scoped="">
  .qyqk-table__content{
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #093a72;
    background-image: url('../../../assets/images/box_hsline.png'),
    url('../../../assets/images/box_hsline.png'),
    url('../../../assets/images/box_ssline.png'),
    url('../../../assets/images/box_ssline.png'),
    url('../../../assets/images/titleftbj.png'),
    url('../../../assets/images/titrightbj.png');
    background-repeat: no-repeat;
    background-position: top center,bottom center,left center, right center, left top,right top;
    background-origin: padding-box,padding-box,padding-box,padding-box,content-box,content-box;
    background-size: 98% 4px, 98% 4px,auto 98%,auto 98%,auto auto,auto auto;
  }
  .table__title{
    margin-top: 80px;
  }
  .qyqk-table__wrap{
    color: #fff;
    margin-top: 20px;
    padding: 0 20px;
    max-height: 300px;
  }
  .table__wrap{
    overflow-x: hidden;
    overflow-y: auto;
  }
  .table__wrap::-webkit-scrollbar{
    width: 10px;
    display: block;
  }
  .table__wrap::-webkit-scrollbar-track{
    background-color: #092964 ;
  }
  .table__wrap::-webkit-scrollbar-thumb{
    width: 100%;
    min-height: 20px;
    background-color: #3d64b1;
  }
  table,td{
    border-collapse: collapse;
  }
  td{
    border: 1px solid #3e72ac;
    padding: 8px 10px;
  }

  /*切换 css - start*/
  .tab_more{
    position: absolute;
    left: 20px;
    right: 20px;
    top: 50px;
    z-index: 99;
    height: 38px;
    line-height: 41px;
    /*background-image: url(../../../assets/images/box__border.png);*/
    /*background-position: left bottom;*/
    /*background-repeat: no-repeat;*/
    /*background-size: 100% 32px;*/
  }
  .tab__wrap{
    position: absolute;
    left: 100px;
    bottom: 0;
  }
  .tab{
    position: absolute;
    bottom: 0;
    display: inline-block;
    padding-left: 6px;
    width: 80px;
    /*height: 32px;*/
    height: 28px;
    line-height: 30px;
    text-align: left;
    background-image: url(../../../assets/images/box_li.png);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 100%;
  }
  .tab__one{
    left: 0;
    text-indent: 20px;
  }
  .tab__two{
    text-indent: 20px;
    left: 70px;
  }
  .tab__three{
    z-index:-1;
    width: 170px;
    left: 140px;
  }
  .more{
    display: inline-block;
    position: absolute;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: 200;
    width: 60px;
    height: 38px;
    text-align: right;
    font-size: 12px;
    line-height: 14px;
    background-image: url('../../../assets/images/line.png');
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 100% auto;
  }
  .bot__line{
    display: inline-block;
    height: 1px;
    /*width: 200px;*/
    background-color: #4187CA;
    position: absolute;
    left: 27px;
    bottom: 0;
    right: 60px;
  }
  .f-color{
    color: #60c0fb;
  }
  .active{
    z-index: 111;
    height: 32px;
    line-height: 38px;
    color: #fff !important;
    background-image: url(../../../assets/images/botselct.png);
    background-size: 100% 100%;
  }
  .two__witch{
    position: absolute;
    right: 80px;
    bottom: 5px;
  }
  .two__witch_item{
    display: inline-block;
    width: 22px;
    height: 22px;
    line-height: 22px;
    cursor: pointer;
    color: #4f8acc;
    font-size: 18px;
    vertical-align: bottom;
    text-align: center;
    background-color: #33559f;
  }
  .two__witch_item:hover{
    opacity: 0.8;
  }
  .drop-down{
    display: inline-block;
    position: absolute;
    left: 60px;
    bottom: 4px;
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 20px;
    text-align: center;
    color: #54bbf5;
    border: 1px solid #54bbf5;
    cursor: pointer;
    border-radius: 50%;
    background-color: #0c3a85;
  }
  .dot__line{
    position: absolute;
    bottom: -18px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #4187CA;
    transform: rotate(-30deg);
  }
  .dot__line .line{
    position: absolute;
    top: 5px;
    left: 11px;
    display: inline-block;
    background-color: #4187CA;
    width: 20px;
    height: 1px;
  }
  /*切换 css - end*/
</style>
