import React from 'react';
import { Row, Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

function ListItem({ item, onModifyItem, onDeleteItem }) {
  // 判断收入还是支出
  // const type = item.category.type === 'outcome' ? '-' : '+';

  return (
    <Row gutter={16}>
      <Col span={4} className="title">
        {item.title}
      </Col>
      <Col span={4} className="price">
        {/* {type} */}
        {item.price}
      </Col>
      <Col span={4} className="date">
        {item.date}
      </Col>
      <Col span={4} className="edit">
        <EditOutlined onClick={onModifyItem} />
      </Col>
      <Col span={4} className="delete">
        <DeleteOutlined onClick={onDeleteItem} />
      </Col>
    </Row>
  );
}

// 类型检查
ListItem.protoTypes = {
  // 函数类型且是必须的
  item: PropTypes.object.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onModifyItem: PropTypes.func.isRequired,
};

/* 
// 可以给组件属性设置默认值
ListItem.defaultProps = {
  // 函数类型且是必须的
  onModifyItem: () => {},
};
 */

export default ListItem;
