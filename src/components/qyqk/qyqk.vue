<template>
  <div class="qyqk_box">
    <!--search 模块-->
    <v-search></v-search>
    <!--企业情况-->
    <Row  class="mt30">
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
  export default {
    name: 'qyqk',
    components: {
        'v-search': search,
        'v-qyjbxx': qyjbxx,
        'v-qyszzb': qyszzb,
        'v-qyszsssrybh': qyszsssrybh,
        'v-qysztbbh': qysztbbh,
        'v-tablemk': tablemk
    }
  }
</script>
