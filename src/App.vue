<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'
export default {
  name: 'App',
  mounted: function () {
    this.$nextTick(function () {
      Vue.prototype.msg = this.$Message;
      Vue.prototype.spin = this.$Spin;
    })
  }
}
</script>

<style>
  html,body,#app{
    width: 100%;
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #fff;*/
  }

</style>
