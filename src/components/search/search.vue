<template>
  <div class="search_box">
    <Row>
      <Col span="24" class="text-center">
      <div class="positionRE">
        <input type="text" class="textplace" :placeholder="placeholder" v-model="search_keyword">
        <i class="iconfont icon-iconfontzhizuobiaozhun22"></i>
        <div class="list_jt" >
          <ul>
            <li class="cursor" v-for="(index, item) in jtqy_list"
                @click="handle_li_click(item)"
                :key="index">{{item.nsrsbh}}</li>
          </ul>
        </div>
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
      name: 'search',
      data(){
        return {
          jtqy_list: [], //集团企业list
          search_keyword: '', //搜索关键字
        }
      },
      methods: {
        handle_li_click(obj){
          let self = this;
          self.$store.dispatch('get_jtqy_data', obj);
        }
      },
      watch: {
        search_keyword(data){
          let self = this;
          self.$store.dispatch('search',{keyword: data, flag: self.is_jtqy});
        },
        jtListName(data){
          this.jtqy_list = data;
        }
      },
      computed: {
        ...mapState({
          placeholder: state => state.search.placeholder,
          jtListName: state => state.search.jtListName,
          is_jtqy: state => state.jtqy.is_jtqy
        })
      }
  }
</script>
<style scoped="">
  .positionRE {
    position: relative;
  }
  .positionRE i {
    position: absolute;
    font-weight: bold;
    color: #fff;
    right: 31%;
    top: 4px;
  }
  .positionRE input::-webkit-input-placeholder {
    color: #fff !important;
  }
  .positionRE input:-moz-placeholder {
    color: #fff !important;
  }
  .positionRE input::-moz-placeholder {
    color: #fff !important;
  }
  .positionRE input:-ms-input-placeholder {
    color: #fff !important;
  }
  .textplace {
    color: #fff;
    background: #11135D;
    width: 40%;
    border-radius: 50px;
    border: none;
    padding: 10px 20px;
    height: 30px;
  }
  .list_jt {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 35px;
    bottom: 0;
    margin: 0 auto;
    height: 200px;
    background: #052862;
    text-align: left;
    width: 40%;
    border-radius: 10px;
    border: 1px solid #1C4C84;
    overflow: auto;
    z-index: 200;
    transition: all .5s linear;
  }
  .activeJt.list_jt {
    opacity: 1;
  }
  .list_jt li {
    padding: 5px 10px;
    list-style: none;
    color: #fff;
  }
  .list_jt li:hover {
    background: #082E6F;
  }
</style>
