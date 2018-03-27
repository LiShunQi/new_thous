/**
 * Created by lsq on 2018/3/6.
 */
export default {
  setCookie: function(name,value,day) {
    if(day){
      var Days = day;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days*24*60*60*1000);
      document.cookie = name + "="+ encodeURIComponent (value) + ";expires=" + exp.toGMTString();
    }else{
      document.cookie = name + "="+ encodeURIComponent (value)
    }
  },
  getCookie: function (name) {
    var arr, reg = new RegExp("(^| )"+ name +"=([^;]*)(;|$)");

    if(arr = document.cookie.match(reg))

      return decodeURIComponent(arr[2]);
    else
      return null;
  },
  deleteCookie: function (name) {
    var that = this;
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = that.getCookie(name);
    if(cval !== null)
      document.cookie= name + "="+cval+";expires="+exp.toGMTString();
  }
}
