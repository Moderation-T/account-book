import React from 'react';
import { Row, Col } from 'antd';
// import { EditOutline, DeleteOutline } from '@ant-design/icons';

function ListItem({ item }) {
  // 判断收入还是支出
  // const type = item.category.type === 'outcome' ? '-' : '+';

  return (
    <Row gutter={16}>
      <Col span={4}>{item.name}</Col>
      <Col span={4}>{item.title}</Col>
      <Col span={4}>
        {/* {type} */}
        {item.price}
      </Col>
      <Col span={4}>{item.date}</Col>
      <Col span={4}>{/* <EditOutline /> */}</Col>
      <Col span={4}>{/* <DeleteOutline /> */}</Col>
    </Row>
  );
}

export default ListItem;
