<template>
  <div class="white_box">
    <!--第三层页面-->
    <Row>
      <Row>
        <Col span="24">
        <v-condition></v-condition>
        </Col>
      </Row>
      <Row class="mt20">
        <v-pie></v-pie>
      </Row>
      <Row class="mt20">
        <v-line></v-line>
      </Row>
    </Row>
  </div>
</template>
<script>
  import condition from './condition.vue'
  import pie from './Pie.vue'
  import line from './line.vue'
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
//              self.$store.dispatch('get_white_condition_data');
          })
      }
  }
</script>
