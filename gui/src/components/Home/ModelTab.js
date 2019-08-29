import React from 'react'
import {Tabs} from 'antd'

import ListModel from './ListModel'
import ChartModel from './ChartModel'

const {TabPane} = Tabs;

function ModelTab(params) {
  
  return (<Tabs defaultActiveKey="list" >
  <TabPane tab="列表模式" key="list">
    <ListModel></ListModel>
  </TabPane>
  <TabPane tab="图表模式" key="chart">
    <ChartModel></ChartModel>
  </TabPane>
</Tabs>)
}


export default ModelTab;