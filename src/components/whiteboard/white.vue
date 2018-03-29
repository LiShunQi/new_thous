<template>
  <div class="white_box" >
    <!--第三层页面-->
    <Row>
      <Row>
        <Col span="24">
        <v-condition></v-condition>
        </Col>
      </Row>
      <Row class="mt20" v-if="is_show_content">
        <v-pie></v-pie>
      </Row>
      <Row class="mt20" v-if="is_show_content">
        <v-line></v-line>
      </Row>
    </Row>
  </div>
</template>
<script>
  import condition from './condition.vue'
  import pie from './Pie.vue'
  import line from './line.vue'
  import { mapState } from 'vuex'
  export default {
      name: 'white',
      components: {
          "v-condition": condition,
          "v-pie": pie,
          'v-line': line
      },
      mounted() {
          let self = this;
          self.$nextTick(() => {
            self.$store.commit('SET_SHOW_TIME', false);
//            self.$store.dispatch('get_white_condition_data');
          })
      },
      computed: {
        ...mapState({
          is_show_content: state => state.white.is_show_content,
        })
      }
  }
</script>
