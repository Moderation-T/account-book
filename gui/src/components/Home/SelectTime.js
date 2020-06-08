import React from 'react';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';

function SelectTime({ year, month, onChangeMonth }) {
  return (
    <div>
      <DatePicker onChange={onChangeMonth} picker="month" />
    </div>
  );
}

SelectTime.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
};

export default SelectTime;
