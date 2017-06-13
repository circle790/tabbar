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
    list: [
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 1,
        inviteCount: "SADKJD"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 2,
        inviteCount: "FSDAFF"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 3,
        inviteCount: "FSAFDA"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 4,
        inviteCount: "MKONIJ"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 5,
        inviteCount: "FDSADF"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 6,
        inviteCount: "FSDAFG"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 1,
        inviteCount: "SADKJD"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 2,
        inviteCount: "FSDAFF"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 3,
        inviteCount: "FSAFDA"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 4,
        inviteCount: "MKONIJ"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 5,
        inviteCount: "FDSADF"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 6,
        inviteCount: "FSDAFG"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 1,
        inviteCount: "SADKJD"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 2,
        inviteCount: "FSDAFF"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 3,
        inviteCount: "FSAFDA"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 4,
        inviteCount: "MKONIJ"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 5,
        inviteCount: "FDSADF"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 6,
        inviteCount: "FSDAFG"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 1,
        inviteCount: "SADKJD"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 2,
        inviteCount: "FSDAFF"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 3,
        inviteCount: "FSAFDA"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 4,
        inviteCount: "MKONIJ"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 5,
        inviteCount: "FDSADF"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 6,
        inviteCount: "FSDAFG"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 1,
        inviteCount: "SADKJD"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 2,
        inviteCount: "FSDAFF"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 3,
        inviteCount: "FSAFDA"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 4,
        inviteCount: "MKONIJ"
      },
      {
        regTime: "2017-05-12",
        phone: 15822546846,
        tenantCount: 5,
        inviteCount: "FDSADF"
      },
      {
        regTime: "2017-05-22",
        phone: 15822265465,
        tenantCount: 10,
        inviteCount: "FSDAFG"
      }
    ]
  }
});
export default urlMap;
