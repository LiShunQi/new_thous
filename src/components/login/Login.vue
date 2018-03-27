<template>
  <div class="login__box text-center">
    <div class="login__content">
      <!--title-->
      <div class="content__header">
        <img src="../../assets/images/login/logo.png" :style="{width:90+'px',height:90+'px'}">
        <h1>成都市国家税务局</h1>
      </div>
      <!--内容-->
      <div class="content__detail">
        <h3 class="detail__title">用户登录</h3>
        <div class="detail__ipt detail__item">
          <input type="text" name="username" v-model="username" placeholder="" autofocus>
          <i class="iconfont icon-character ipt__icon" :style="{fontSize:18+'px'}"></i>
          <!--<Icon type="person" class="ipt__icon"></Icon>-->
        </div>
        <div class="detail__ipt detail__item">
          <input type="password" name="passwor" v-model="password" placeholder="">
          <i class="iconfont icon-mima ipt__icon"></i>
          <!--<Icon type="ios-locked" class="ipt__icon"></Icon>-->
        </div>
        <div class="detail__forget detail__item clearfix">
          <label class="remenber_pass">
            <input type="checkbox" v-model="isSelect"  :class="{selected: isSelect}">记住密码
          </label>
          <!--<Checkbox v-model="single" class="remenber_pass">记住密码</Checkbox>-->
          <a>忘记密码？</a>
        </div>
        <div class="detail__btn detail__item">
          <button @click="doLogin()">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Cookie from '../../assets/common/cookie'
  export default {
      name: 'Login',
      data() {
          return {
            isSelect: false, //是否记住用户名密码
            username: '', //用户名
            password: '', //密码
          }
      },
      mounted: function () {
          //初始化判断是否记住密码
          this.isRemenber();
      },
      methods: {
        doLogin: function () { //登录
          let self = this;
          if(!self.username || !self.password){
              self.$Message.info('请将用户名或密码填写完整！');
              return false;
          }
          self.$http.get('/cdSjtj/login',{
              params: {
                loginName: self.username,
                loginPassword: self.password
              }
          })
            .then(res => {
                let data = res.data.data;
                if(data.code === 100){
                    if(self.isSelect){
                        Cookie.setCookie('username',self.username,7);
                        Cookie.setCookie('password',self.password,7);
                    }else{
                        Cookie.deleteCookie('username');
                        Cookie.deleteCookie('password');
                    }
                    //跳转到首页
                    self.$router.push({name:'index'});
                }else{
                    self.$Message.error(data.msg);
                }
            })
        },
        isRemenber: function () { //判断是否记住密码
          if(Cookie.getCookie('username')){
            this.isSelect = true;
            this.username = Cookie.getCookie('username');
            this.password = Cookie.getCookie('password');
            return;
          }
          this.isSelect = false;
        }
      }
  }
</script>
<style scoped="">
  .login__box {
    padding: 30px;
    width: 100%;
    height: 100%;
    min-height: 580px;
    background-color: #06366e;
    background-image: url('../../assets/images/login/bjdian.png'),
    url('../../assets/images/login/l_topleft.png'),
    url('../../assets/images/login/l_topcenter.png'),
    url('../../assets/images/login/l_topright.png'),
    url('../../assets/images/login/l_botleft.png'),
    url('../../assets/images/login/l_bcenter.png'),
    url('../../assets/images/login/l_botright.png');
    background-repeat: repeat,no-repeat,no-repeat,no-repeat,no-repeat,no-repeat,no-repeat;
    background-position: right top, left top, center top,right top,left bottom, center bottom,right bottom;
    background-origin: border-box,content-box,content-box,content-box,content-box,content-box,content-box;
    background-size: auto,auto, 85% auto;
  }
  .login__content{
    display: inline-block;
  }
  .content__header{
    margin: 30px 0;
  }
  .content__header h1{
    color: #a2cbf3;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 4px;
  }
  .content__header h1:after{
    content: 'State Taxation Bureau of Chengdu';
    display: block;
    font-size: 12px;
    color: #4a709d;
    text-transform: uppercase;
    letter-spacing: normal;
  }
  .content__detail{
    position: relative;
    width: 380px;
    padding: 80px 40px 20px;
    background: url("../../assets/images/login/loginbox.png")  no-repeat left top/100% 100%;
  }
  .detail__title{
    position: absolute;
    left: 155px;
    top: 20px;
    color: #a2cbf3;
    font-weight: 400;
  }
  .detail__item{
    margin: 14px 0;
  }
  .detail__ipt{
    position: relative;
  }
  .detail__ipt input{
    width: 100%;
    height: 32px;
    line-height: 32px;
    color: #fff;
    text-indent: 28px;
    border: 1px solid #3b78b5;
    background-color: rgba(255,255,255,0.1);
  }
  .ipt__icon{
    position: absolute;
    left: 5px;
    top: 3px;
    color: #3b78b5;
    font-size: 20px;
  }

  .detail__forget .remenber_pass {
    float: left;
    font-size: 12px;
    color: #96a2b6;
    /*vertical-align: middle;*/
  }
  .detail__forget .remenber_pass input{
    position: relative;
    width: 13px;
    height: 13px;
    color: transparent;
    vertical-align: middle;
    margin-right: 5px;
    cursor: pointer;
    border: 1px solid #3b78b5;
    -webkit-appearance:none;
    background-color: rgba(255,255,255,.1);
  }
  .detail__forget .remenber_pass input:after{
    position: absolute;
    content: '✔';
    top: -3px;
    left: 1px;
    color: inherit;
  }
  .selected {
    color: #3b78b5 !important;
  }
  .detail__forget a {
    float: right;
    font-size: 12px;
  }

  .detail__btn button{
    width: 100%;
    height: 30px;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 10px;
    border: 1px solid #0ba5ff;
    background-color: #0ba5ff;
  }
  .detail__btn button:hover{
    opacity: 0.9;
  }
</style>
