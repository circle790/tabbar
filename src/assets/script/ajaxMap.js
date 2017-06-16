'use strict';
import urlMap from './urlMap';
import Mock from 'mockjs';


Mock.mock(/\/getVerify/, {
  "resultData": {
    success: true
  },
  "resultMsg": "发送成功！",
  "resultCode": 1
});

Mock.mock(/\/register/, {
  "resultData": {
    'success': false
  },
  "resultMsg": "老铁出错误了～",
  "resultCode": 1
});

//inviteList
Mock.mock(/\/inviteList/, {
  data: {
    currentPage: 1,
    pages: 4,
    total: 4,
    "list|30": [
      {
        regTime: Mock.mock('@date'),
        phone: /^((13[0-9]{9})|(14[0-9]{9})|(15[0-35-9][0-9]{8})|(17[0-9]{9})|(18[0-9]{9}))$/,
        "tenantCount|1-999": 100,
        inviteCount: /[0-9A-Za-z]{6}/
      }
    ]
  }
});
export default urlMap;
