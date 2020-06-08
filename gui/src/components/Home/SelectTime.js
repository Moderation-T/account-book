import React from 'react';
import { DatePicker } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';

function SelectTime({ monthCategory, onChangeMonth }) {
  return (
    <div>
      <DatePicker allowClear={false} defaultValue={moment(monthCategory)} onChange={onChangeMonth} picker="month" />
    </div>
  );
}

SelectTime.propTypes = {
  monthCategory: PropTypes.string.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
};

export default SelectTime;
