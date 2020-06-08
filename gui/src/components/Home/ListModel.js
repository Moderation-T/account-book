import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const { TabPane } = Tabs;

function ListModel({ items, onModifyItem, onDeleteItem }) {
  return items.map((item) => (
    <ListItem item={item} key={item.id} onModifyItem={onModifyItem} onDeleteItem={onDeleteItem}></ListItem>
  ));
}

// 类型检查
ListModel.protoTypes = {
  // 函数类型且是必须的
  items: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onModifyItem: PropTypes.func.isRequired,
};

export default ListModel;
