'use strict';
//获取url指定参数
let getQueryString = function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return decodeURI(r[2]);
    return null;
}
//获取url全部参数
let getUrlParams = function () {
    var params = {};
    var name, value;
    var str = location.search; //取得整个地址栏
    var arr = str.substr(1).split("&"); //各个参数放到数组里
    for (var i in arr) {
        var num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            params[name] = decodeURI(value);
        }
    }
    return params;
}
//参数追加生成URL
let generateURL = function (data, origin) {
    let dataStr = '',url = origin || location.href; //数据拼接字符串
    Object.keys(data).forEach(key => {
        dataStr += key + '=' + encodeURI(data[key]) + '&';
    })

    if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url + '?' + dataStr;
    }
    return url;
}


export default {
    getQueryString, getUrlParams, generateURL
}