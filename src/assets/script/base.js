'use strict';
import $ from 'jquery'
import tips from './tips'

// 设备信息
let device = (() => {
    let ua = navigator.userAgent.toLowerCase();

    return {
        isWeChat: (/MicroMessenger/i).test(ua),
        isIphone: (/iphone/i).test(ua),
        isMac: (/mac/i).test(ua),
        isAndroid: (/(Android)|(Linux)/i).test(ua),
    }
})();

//  常用验证
let validateRule = {
    'phone':/^((13[0-9]{9})|(14[0-9]{9})|(15[0-35-9][0-9]{8})|(17[0-9]{9})|(18[0-9]{9}))$/,
    'password':/^[a-zA-Z\d_]{6,}$/,
    'realName':'isReg:^[\\u4e00-\\u9fa5]*$',
    'identityCard':'isReg:(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)'
}



export default {
    device,
    validateRule,
    confirm(opts){
      tips.confirm(opts)
    },
    notice(opts){
      tips.notice(opts)
    },
    alert(opts,fn){
      tips.alert(opts,fn)
    },
    toast(opts){
      tips.toast(opts)
    }
}
