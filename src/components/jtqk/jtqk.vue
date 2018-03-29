<template>
  <div class="jtqk_box">
    <!--search 模块-->
    <v-search></v-search>
    <!--集团情况-->
    <Row class="mt50" v-if="isShow_content && (is_jtqy === 'jt')">
      <Row>
        <Col span="24" style="height:125px;">
        <v-jtqktotal ></v-jtqktotal>
        </Col>
      </Row>
      <Row class="mt20" :gutter="16">
        <Col span="12" style="height:350px;">
        <v-qyfb ></v-qyfb>
        </Col>
        <Col span="12" style="height:350px;">
        <v-hyfb ></v-hyfb>
        </Col>
      </Row>
      <Row class="mt20" style="background-color: #093a72">
        <Col span="6" style="height:300px;">
        <v-gzzbqk ></v-gzzbqk>
        </Col>
        <Col span="9" style="height:300px;">
        <v-szsssrbh ></v-szsssrbh>
        </Col>
        <Col span="9" style="height:300px;">
        <v-sztbbh ></v-sztbbh>
        </Col>
      </Row>
      <Row class="mt20">
        <Col span="24" style="height:100%">
        <v-jtcyqy></v-jtcyqy>
        </Col>
      </Row>
    </Row>
  </div>
</template>
<script>
  import search from '../search/search.vue'
  import jtqktotal from './jtqkTotal/jtqkTotal.vue'
  import qyfb from './qyfb/qyfb.vue'
  import hyfb from './hyfb/hyfb.vue'
  import gzzbqk from './gzzbqk/gzzbqks.vue'
  import szsssrbh from './szsssrbh/szsssrbh.vue'
  import sztbbh from './sztbbh/sztbbh.vue'
  import jtcyqy from './jtcyqy/jtcyqy.vue'
  import { mapState } from 'vuex'
  export default {
      name: 'jtqy',
      components: {
          'v-search': search,
          'v-jtqktotal': jtqktotal,
          'v-qyfb': qyfb,
          'v-hyfb': hyfb,
          'v-gzzbqk': gzzbqk,
          'v-szsssrbh': szsssrbh,
          'v-sztbbh': sztbbh,
          'v-jtcyqy': jtcyqy
      },
    mounted(){
        let self = this;
        self.$store.commit('SET_SHOW_TIME', false);
        self.$store.commit('SET_PLACEHOLDER', '请输入集团名称');
        self.$store.commit('SET_JTQY_FLAG', 'jt');
    },
    computed: {
      ...mapState({
        isShow_content: state => state.jtqy.isShow_content,
        is_jtqy: state => state.jtqy.is_jtqy, //当前页面标志
      })
    }
  }
</script>
