<!--menglihuan 各种纳税情况小-->
<template>
  <div class="content_table">
    <h3 class="picture__title_this">集团成员企业</h3>
    <div class="jt-table__wrap table__wrap">
      <Table :row-class-name='rowClassName' :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: 'jtcyqy',
    data () {
      return {
        columns1: [
          {
            title: '公司名称',
            key: 'name'
          },
          {
            title: '企业税号',
            key: 'sh'
          },
          {
            title: '登记序号',
            key: 'djxh',
            className:'test'
          },
          {
            title:'总税收',
            key:'total'
          },
          {
            title:'增值税',
            key:'zzs'
          },
          {
            title:'所得税',
            key:'sds'
          },
          {
            title:'所属区域',
            key:'ssqy'
          }
        ],
        data1: [
          {
            name: '世纪中税',
            sh: 18121212222,
            djxh: "1232132",
            total: 332131,
            zzs:1231,
            sds:232323.2,
            ssqy:"锦江区"
          },
          {
            name: '世纪中税',
            sh: 18121212222,
            djxh: "1232132",
            total: 332131,
            zzs:1231,
            sds:232323.2,
            ssqy:"锦江区"
          },
          {
            name: '世纪中税',
            sh: 18121212222,
            djxh: "1232132",
            total: 332131,
            zzs:1231,
            sds:232323.2,
            ssqy:"锦江区"
          },
          {
            name: '世纪中税',
            sh: 18121212222,
            djxh: "1232132",
            total: 332131,
            zzs:1231,
            sds:232323.2,
            ssqy:"锦江区"
          },
          {
            name: '世纪中税',
            sh: 18121212222,
            djxh: "1232132",
            total: 332131,
            zzs:1231,
            sds:232323.2,
            ssqy:"锦江区"
          },
          {
            name: '世纪中税',
            sh: 18121212222,
            djxh: "1232132",
            total: 332131,
            zzs:1231,
            sds:232323.2,
            ssqy:"锦江区"
          },
          {
            name: '世纪中税',
            sh: 18121212222,
            djxh: "1232132",
            total: 332131,
            zzs:1231,
            sds:232323.2,
            ssqy:"锦江区"
          }
        ]
      }
    },
    mounted:function(){
    },
    methods: {
      rowClassName:function(row,index){
        //奇偶
        index=index%2;
        if (index===0){
          return 'tableRow1';
        }else{
          return 'tableRow2';
        }
        return "";
      },
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  /*集团情况table样式,由于scoper导致无效*/

  .ivu-table .tableRow1 td{
    border: none;
    background-color:#093a72;
    color: #fff;
  }
  .ivu-table .tableRow2 td{
    border: none;
    background-color:#0a316c ;
    color: #fff;
  }
  .ivu-table th{
    color: #fff;
    background-color: #062963;
    border: none;
  }
  .picture__title_this{
    margin:12px 0 20px 0;
    z-index: 99;
    text-align: center;
    color: #fff;
  }
  .content_table{
    position: relative;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #093a72;
    background-image: url('../../../assets/images/box_hsline.png'),
    url('../../../assets/images/box_hsline.png'),
    url('../../../assets/images/box_ssline.png'),
    url('../../../assets/images/box_ssline.png'),
    url('../../../assets/images/titleftbj.png'),
    url('../../../assets/images/titrightbj.png');
    background-repeat: no-repeat;
    background-position: top center,bottom center,left center, right center, 0 3%,100% 3%;
    background-origin: padding-box,padding-box,padding-box,padding-box,content-box,content-box;
    background-size: 98% 4px, 98% 4px,auto 98%,auto 98%,auto auto,auto auto;
  }
  .jt-table__wrap{
    padding-right: 20px;
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
</style>
