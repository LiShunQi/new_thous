<template>
  <div id="app">
    <!--头部-->
    <v-header></v-header>
    <!--路由-->
    <div class="route_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default {
  name: 'App',
  components: {
    'v-header': header,
  },
  mounted: function () {
    this.$nextTick(function () {

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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*background-color: #06318A;*/
    background-image: url(./assets/images/back.png);
    background-size: 100% 100%;
  }
  .route_content{
    padding: 10px 20px;
  }
</style>
