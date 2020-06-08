import React from 'react';
import styled from 'styled-components';

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

function Home(props) {
  const onModifyItem = () => {
    console.log('编辑');
  };
  const onDeleteItem = () => {
    console.log('删除');
  };

  return (
    <Container>
      <Header></Header>
      <ModelTab items={testData} onModifyItem={onModifyItem} onDeleteItem={onDeleteItem}></ModelTab>
    </Container>
  );
}

export default Home;
