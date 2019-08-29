import React from 'react'

// 选择时间
import SelectTime from './SelectTime'
// 支付情况
import Payment from './Payment'

function Header(params) {
  return <div>
    <SelectTime></SelectTime>
    <Payment></Payment>
  </div>
}

export default Header;