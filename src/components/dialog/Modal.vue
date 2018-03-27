<template>
  <!--弹框组件-->
  <div class="dialog">
    <div class="mask" v-if="visible"></div>
    <div class="dialog_content">
      <div class="close" @click="close()">
        <img src="../../assets/images/closebot.png">
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Dialog',
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    data(){
      return {
        visible: this.value
      }
    },
    mounted: function () {
//      this.visible = true;
    },
    methods: {
      close : function () {
//        this.visible = false;
        this.$parent.isShow = false;
//        this.$emit('input', false);
      }
    }
  }
</script>
<style scoped="">
  .dialog {
    position: relative;
  }
  .dialog .dialog_content{
    position: fixed;
    box-sizing: border-box;
    padding: 44px 30px 20px ;
    width: 70%;
    height: 82%;
    min-height: 400px;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -30%);
    border-radius: 5px;
    background-color: transparent;
    z-index: 50002;
    background-image: url('../../assets/images/titleftbj.png'),
    url('../../assets/images/titrightbj.png'),
    url("../../assets/images/tkbox.png");
    background-origin: content-box,content-box,padding-box;
    background-position:  left top,right top,left top;
    background-size: auto auto ,auto auto,100% 100%;
    background-repeat: no-repeat;
  }
  .dialog .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 50001;
    background: rgba(0,0,0,.5);
  }
  .dialog .close{
    position: absolute;
    top: -6px;
    right: -26px;
    cursor: pointer;
  }
  .dialog .close img{
    width: 34px;
    height: 34px;
  }
</style>

