import React from 'react';
import { Tabs } from 'antd';

import ListItem from './ListItem';

const { TabPane } = Tabs;

function ListModel({ items, onModifyItem, onDeleteItem }) {
  return items.map((item) => (
    <ListItem item={item} key={item.id} onModifyItem={onModifyItem} onDeleteItem={onDeleteItem}></ListItem>
  ));
}

export default ListModel;
