import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';

import ListModel from './ListModel';
import ChartModel from './ChartModel';

const { TabPane } = Tabs;

function ModelTab({ items, onModifyItem, onDeleteItem }) {
  return (
    <Tabs defaultActiveKey="list">
      <TabPane tab="列表模式" key="list">
        <ListModel items={items} onModifyItem={onModifyItem} onDeleteItem={onDeleteItem}></ListModel>
      </TabPane>
      <TabPane tab="图表模式" key="chart">
        <ChartModel></ChartModel>
      </TabPane>
    </Tabs>
  );
}

ModelTab.protoTypes = {
  // 函数类型且是必须的
  items: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onModifyItem: PropTypes.func.isRequired,
};

export default ModelTab;
