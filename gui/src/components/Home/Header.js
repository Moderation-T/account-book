import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// 选择时间
import SelectTime from './SelectTime';
// 支付情况
import Payment from './Payment';

const Container = styled.div`
  height: 150px
  background: #a4dac1
`;

function Header({ year, month, onChangeMonth }) {
  return (
    <Container>
      <Row>
        <Col span={12}>
          <SelectTime year={year} month={month} onChangeMonth={onChangeMonth}></SelectTime>
        </Col>
        <Col span={12}>
          <Payment></Payment>
        </Col>
      </Row>
    </Container>
  );
}

Header.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
};

export default Header;
