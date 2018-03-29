<template>
  <div class="indexback">
    <!--第一层页面-->
    <Row>
      <Row class=" flourOne">
        <Col span="7">
        <v-qhqyzb></v-qhqyzb>
        </Col>
        <Col span="10">
        <v-map></v-map>
        </Col>
        <Col span="7">
        <v-gzzbqk></v-gzzbqk>
        </Col>
      </Row>
      <Row class="cf">
        <Col span="7" style="height: 500px">
        <v-qsqy></v-qsqy>
        </Col>
        <Col span="10">
        <v-allback v-if="isShow_allback"></v-allback>
        <v-income></v-income>
        <v-tenprogress v-if="!isShow_allback"></v-tenprogress>
        </Col>
        <Col span="7">
        <v-qshy></v-qshy>
        </Col>
      </Row>
    </Row>
  </div>
</template>

<script>
  import Qhqyzb from './qhqyzb/Qhqyzb.vue'
  import map from './map/cdMap.vue'
  import gzzbqk from './gzzbqk/gzzbqk.vue'
  import Qsqy from './qsqy/Qsqy.vue'
  import allback from './income/allback.vue'
  import income from './income/income.vue'
  import tenprogress from './income/tenprogress.vue'
  import qshy from './qshy/qshy.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'index',
    components: {
      'v-qhqyzb': Qhqyzb,
      'v-map': map,
      'v-gzzbqk': gzzbqk,
      'v-qsqy': Qsqy,
      'v-allback': allback,
      'v-income': income,
      'v-tenprogress': tenprogress,
      'v-qshy': qshy,
    },
    data () {
      return {

      }
    },
    mounted: function () {
      let self = this;
      self.$nextTick(function () {
          self.$store.commit('SET_SHOW_TIME', true);
//        self.$store.dispatch('get_index_data', {kssj: '', jzsj: '', swjgdm: ''});
      });
    },
    methods: {

    },
    watch: {

    },
    computed: {
      ...mapState({
        isShow_allback: state => state.isShow_allback,
      })
    }
  }
</script>
<style scoped>
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

  .flourOne div {
    height: 250px;
  }

  .indexback {
    /*position: fixed;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*padding: 10px 20px;*/
    overflow-y: scroll;
  }

  .cf {
    margin: 12px 0;
  }

  .qyqk__line-box {
    background-image: url('../../assets/images/box_hsline.png'),
    url('../../assets/images/box_hsline.png'),
    url('../../assets/images/box_ssline.png'),
    url('../../assets/images/box_ssline.png');
    background-repeat: no-repeat;
    background-position: top center, bottom center, left center, right center;
    background-origin: padding-box;
    background-size: 98% 4px, 98% 4px, auto 98%, auto 98%;
  }
</style>
