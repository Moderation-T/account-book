import moment from 'moment';

// 转换 moment 为 string
export const parseMonthMomentToMonthString = (date) => {
  moment(new Date()).format('YYYY-MM');
};
