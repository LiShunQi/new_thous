<template>
  <div class="qyqk_box">
    <!--search 模块-->
    <v-search></v-search>
    <!--企业情况-->
    <Row  class="mt30" v-if="isShow_content && (is_jtqy === 'qy')">
      <Row :gutter="16">
        <Col span="12" style="height: 280px">
        <v-qyjbxx ></v-qyjbxx>
        </Col>
        <Col span="12" style="height: 280px">
        <v-qyszzb ></v-qyszzb>
        </Col>
      </Row>
      <Row class="mt20 qyqk__line-box">
        <Col span="12" style="height: 300px">
        <v-qyszsssrybh ></v-qyszsssrybh>
        </Col>
        <Col span="12" style="height: 300px">
        <v-qysztbbh ></v-qysztbbh>
        </Col>
      </Row>
      <Row class="mt20">
        <Col span="24" style="height:500px;">
        <v-tablemk></v-tablemk>
        </Col>
      </Row>
    </Row>
  </div>
</template>
<script>
  import search from '../search/search.vue'
  import qyjbxx from './qyjbxx/qyjbxx.vue'
  import qyszzb from './qyszzb/qyszzb.vue'
  import qyszsssrybh from './qyszsssrybh/qyszsssrybh.vue'
  import qysztbbh from './qysztbbh/qysztbbh.vue'
  import tablemk from './tablemk/Tablemk.vue'
  import { mapState } from 'vuex'
  export default {
    name: 'qyqk',
    components: {
        'v-search': search,
        'v-qyjbxx': qyjbxx,
        'v-qyszzb': qyszzb,
        'v-qyszsssrybh': qyszsssrybh,
        'v-qysztbbh': qysztbbh,
        'v-tablemk': tablemk
    },
    mounted() {
      let self = this;
      self.$store.commit('SET_SHOW_TIME', false);
      self.$store.commit('SET_PLACEHOLDER', '请输入企业名称');
      self.$store.commit('SET_JTQY_FLAG', 'qy');
    },
    computed: {
      ...mapState({
        isShow_content: state => state.jtqy.isShow_content,
        is_jtqy: state => state.jtqy.is_jtqy, //当前页面标志
      })
    }
  }
</script>
