/**
 * Created by lsq on 2018/3/12.
 * 工具
 */
export default {
  //字符串截断
  trunc: function (str, length, truncation) {
    // [\u4E00-\u9FA5]表示汉字，[\uFE30-\uFFA0]表示全角
    var chinese_pattern = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
    str = str || " ";
    length = length || 30;
    truncation = truncation || '...';
    truncation = typeof truncation === "string" ? truncation : "...";
    var chineseIn = function (s) {
      return chinese_pattern.exec(s) ? true : false;
    };
    var calcSize = function(source){
      var strTemp = source.replace(chinese_pattern, "aa");
      return strTemp.length;
    };
    var recursion = function (source, length) {
      if (calcSize(source) <= length || (!chineseIn(source))) {
        return source;
      } else {
        return recursion(source.slice(0, source.length - 1), length);
      }
    };
    var sliceLength = length - truncation.length;
    return calcSize(str) > length ?  recursion(str.slice(0, sliceLength), sliceLength) + truncation : String(str);
  }
  //数字前置补零
  ,digit: function(num, length){
    var str = '';
    num = String(num);
    length = length || 2;
    for(var i = num.length; i < length; i++){
      str += '0';
    }
    return num < Math.pow(10, length) ? str + (num|0) : num;
  }
  //转化为日期格式字符
  ,toDateString: function(time, format){
    var that = this
      ,date = new Date(time || new Date())
      ,ymd = [
      that.digit(date.getFullYear(), 4)
      ,that.digit(date.getMonth() + 1)
      ,that.digit(date.getDate())
    ]
      ,hms = [
      that.digit(date.getHours())
      ,that.digit(date.getMinutes())
      ,that.digit(date.getSeconds())
    ];

    format = format || 'yyyy-MM-dd HH:mm:ss';

    return format.replace(/yyyy/g, ymd[0])
      .replace(/MM/g, ymd[1])
      .replace(/dd/g, ymd[2])
      .replace(/HH/g, hms[0])
      .replace(/mm/g, hms[1])
      .replace(/ss/g, hms[2]);
  }
}
