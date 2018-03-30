<template>
  <div id="app">
    <!--头部-->
    <v-header v-if="isShow_header"></v-header>
    <!--路由-->
    <div class="route_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    'v-header': header,
  },
  mounted: function () {
    let self = this;
    self.$nextTick(function () {

    })
  },
  computed: {
    ...mapState({
      isShow_header: state => state.isShow_header,
    })
  }
}
</script>

<style>
  /*html,body{*/
    /*width: 100%;*/
    /*height: 100%;*/
  /*}*/
  #app {
    min-height: 100vh;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #063380;
    /*background-image: url(./assets/images/back.png);*/
    /*background-size: 100% 100%;*/
  }
  .route_content{
    padding: 10px 20px;
  }
</style>
