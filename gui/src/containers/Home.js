import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { parseMonthMomentToMonthString } from '../utils/utility';

import Header from '../components/Home/Header';
import ModelTab from '../components/Home/ModelTab';

const Container = styled.div`
  width: 600px;
  height: 800px;
  margin: 200px auto;
  border: 1px solid #ccc;
`;

const testData = [
  {
    title: 'buy stuff for kitten',
    price: 100,
    date: '2018-08-15',
    monthCategory: '2018-8',
    id: '_kly1klf4g',
    cid: '1',
    timestamp: 1534291200000,
  },
  {
    title: '这是我的工资',
    price: 20000,
    date: '2018-08-18',
    monthCategory: '2018-8',
    id: '_bd16bjeen',
    cid: '2',
    timestamp: 1534550400000,
  },
];

function Home() {
  // 年月选择
  const [monthCategory, setMonthCategory] = useState(parseMonthMomentToMonthString(new Date()));
  // 收入
  const [income, setIncome] = useState(0);
  // 支出
  const [outcome, setOutcome] = useState(0);

  // 编辑账目
  const onModifyItem = () => {
    console.log('编辑');
  };
  // 删除账目
  const onDeleteItem = () => {
    console.log('删除');
  };
  // 选择月份
  const onChangeMonth = (date) => {
    setMonthCategory(parseMonthMomentToMonthString(date));
  };

  return (
    <Container>
      <Header monthCategory={monthCategory} onChangeMonth={onChangeMonth} income={income} outcome={outcome}></Header>
      <ModelTab items={testData} onModifyItem={onModifyItem} onDeleteItem={onDeleteItem}></ModelTab>
    </Container>
  );
}

export default Home;
