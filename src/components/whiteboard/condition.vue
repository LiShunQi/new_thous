<template>
  <div >
    <div id="allback" class="allback">
      <span class="mr10">区域</span>
      <Dropdown class="dropdown" style="line-height: 22px;color: #fff">
        <a href="javascript:void(0)" style="color: #fff;">
          {{area_name}}
          <Icon type="arrow-down-b" style="margin-left: 3px;"></Icon>
        </a>
        <DropdownMenu slot="list" style="text-align: center;max-height:200px;overflow: auto">
          <DropdownItem @click.native="select_area('全成都','')">全成都</DropdownItem>
          <DropdownItem v-for="item in areaList"
                        @click.native="select_area(item.swjgmc,item.swjgdm)"
                        :key="item.swjgdm">{{item.swjgmc}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <span class="ml30 mr10">行业</span>
      <Dropdown class="dropdown" style="line-height: 22px;color: #fff">
        <a href="javascript:void(0)" style="color: #fff;">
          {{hy_name}}
          <Icon type="arrow-down-b" style="margin-left: 3px;"></Icon>
        </a>
        <DropdownMenu slot="list" style="text-align: center;">
          <p class="catck">
            <input type="text" class="saerch" placeholder="请输入行业名称" v-model="hy_s_name">
            <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
          </p>
          <div style="text-align: center;max-height:200px;overflow: auto">
            <DropdownItem v-for="item in hyList"
                          @click.native="select_hy(item.hymc,item.hydm)"
                          :key="item.hydm">{{item.hymc}}</DropdownItem>
          </div>
        </DropdownMenu>
      </Dropdown>
      <span class="ml30 mr10">时间起</span>
      <DatePicker class="datapack inputDate_cf"
                  @on-change="select_time_s"
                  format="yyyy-MM"
                  type="date" placeholder="请选择日期" style="width: 150px;color: black"></DatePicker>
      <span class="ml30 mr10">止</span>
      <DatePicker class="datapack inputDate_cf"
                  @on-change="select_time_e"
                  format="yyyy-MM"
                  type="date" placeholder="请选择日期" style="width: 150px;color: black"></DatePicker>
      <button class="btnsesion cursor" @click="search()">查询</button>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'condition',
    data () {
      return {
        areaList: [], //地区
        hyList: [], //行业
        area_name: '全成都', //
        hy_name: '请选择行业', //
        hy_s_name: '', // 用于模糊搜索
        area_swjgdm: '', //
        hy_dm: '',
        time_s: '', //时间起
        time_e: '', //时间止
      }
    },
    mounted: function () {
        let self = this;
        self.$nextTick(function () {
            console.log('condition', self.white_c);
          self.handleData();
        })
    },
    methods: {
        // 数据处理
        handleData: function () {
          let self = this;
          if(self.white_c){
              console.log('white_c', self.white_c);
              self.areaList = self.white_c.AreaList;
              self.hyList = self.white_c.hyxx.data;
          }
        },
      //选择地区
        select_area: function (swjgmc,swjgdm) {
          let self = this;
          self.area_name = swjgmc;
          self.area_swjgdm = swjgdm;
        },
      //选择行业
        select_hy: function (hymc,hydm) {
          let self = this;
          self.hy_name = hymc;
          self.hy_dm = hydm;
        },
          //选择时间
        select_time_s: function (time) {
          let self = this;

          self.time_s = time;
        },
        //选择时间
        select_time_e: function (time) {
          let self = this;

          self.time_e = time;
        },
        //查询
        search: function () {
          let self = this;
          if(!self.hy_dm){
              self.$Message.info('请选择查询行业！');
              return false;
          }
          if(!self.time_s){
            self.$Message.info('请选择查询时间起！');
            return false;
          }
          if(!self.time_e){
            self.$Message.info('请选择查询时间止！');
            return false;
          }

          if(new Date(self.time_s) > new Date(self.time_e)){
            self.$Message.info('查询时间起不能大于时间止！');
            return false;
          }
          //触发请求方法
          self.$store.dispatch('white_data_search',{kssj:self.time_s, jzsj: self.time_e, swjgdm: self.area_swjgdm, hydm:self.hy_dm});
        }
    },
    watch:{
        white_c: function () {
          this.handleData();
        },
        //模糊搜索
        hy_s_name: function (data) {
            let self = this;
            self.hyList = self.white_c.hyxx.data.filter((el,i,arr) => {
                return el.hymc.indexOf(data) > -1;
            })
          }
    },
    computed: {
      ...mapState({
        white_c: state => state.white.white_condition_data,
      })
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .catck{
    position: relative;
  }
  .catck i{
    position: absolute;
    top:15px;
    right:20px;
  }
  .saerch{
    color: #fff;
    width: 90%;
    background-color: #062963;
    border-radius: 5px;
    border: 0 ;
    padding:5px 10px ;
    margin: 10px;
  }
  .btnsesion {
    background-color: #0855AD;
    border: 1px solid #445FA4;
    line-height: 22px;
    padding: 5px 30px;
    border-radius: 5px;
    color: #fff;
    margin-left: 30px;
  }

  .allback {
    margin-top: 10px;
    padding: 20px;
    height: 100px;
    line-height: 60px;
    color: #fff;
    background-image: url(../../assets/images/condition.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

</style>
