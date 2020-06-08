import React from 'react';
import PropTypes from 'prop-types';

function Payment({ income, outcome }) {
  return (
    <div>
      收入：{income} 支出：{outcome}
    </div>
  );
}

Payment.propTypes = {
  income: PropTypes.number,
  outcome: PropTypes.number,
};
export default Payment;
