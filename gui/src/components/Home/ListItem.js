import React from 'react';
import { Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function ListItem({ item, onModifyItem, onDeleteItem }) {
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
      <Col span={4}>
        <EditOutlined onClick={onModifyItem} />
      </Col>
      <Col span={4}>
        <DeleteOutlined onClick={onDeleteItem} />
      </Col>
    </Row>
  );
}

export default ListItem;
