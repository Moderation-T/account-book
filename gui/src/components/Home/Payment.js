import React from 'react';
import PropTypes from 'prop-types';

function Payment({ income, outcome }) {
  return (
    <div>
      <span className="income">收入：{income}</span>
      <span className="outcome">支出：{outcome}</span>
    </div>
  );
}

Payment.propTypes = {
  income: PropTypes.number,
  outcome: PropTypes.number,
};
export default Payment;
