// import faker from 'faker'
// import lodash from 'lodash'

let faker = require('faker');
let lodash = require('lodash');

faker.locale = 'zh_CN';

const wayArr = ['income', 'spending'];
const iconArr = ['pet','learn','eat','shop','message','entertainment','traffic','digital' ]

module.exports = function() {
  return {
    account: lodash.times(200, function(n) {
      const wayIndex = Math.floor(Math.random() * wayArr.length);
      const iconIndex = Math.floor(Math.random() * iconArr.length);
      return {
        id: faker.random.uuid(),
        icon: iconArr[iconIndex], // 图表 - 消费类型
        todo: faker.lorem.sentence(), // 收入来源 or 消费去向
        money: faker.random.number(), // 金额
        date: faker.date.past(), // 日期
        way: wayArr[wayIndex], // 收入(spending) or 支出(income)
      };
    }),
  };
};
