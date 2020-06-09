import React from 'react';
import { shallow } from 'enzyme';
import { Col } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import ListItem from '../ListItem';

/** 测试用例说明
 * 1. 是否正确显示 name price data item 的值
 * 2. 是否成功触发 onModifyItem 与 onDeleteItem 方法
 */

const item = {
  title: 'buy stuff for kitten',
  price: 100,
  date: '2018-08-15',
  monthCategory: '2018-8',
  id: '_kly1klf4g',
  cid: '1',
  timestamp: 1534291200000,
};

const props = {
  item,
  onModifyItem: jest.fn(),
  onDeleteItem: jest.fn(),
};

let wrapper;

describe('test ListItem component', () => {
  //  每次运行单个测试用例的时候会执行这一步
  beforeEach(() => {
    wrapper = shallow(<ListItem {...props}></ListItem>);
  });

  // 创建快照
  it('should render the component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should correct render title&price&date value', () => {
    expect(wrapper.find('Row .title').prop('children')).toEqual(item.title);
    expect(wrapper.find('Row .price').prop('children')).toEqual(item.price);
    expect(wrapper.find('Row .date').prop('children')).toEqual(item.date);
  });

  it('should trigger the correct function callbacks', () => {
    wrapper.find(EditOutlined).simulate('click');
    expect(props.onModifyItem).toHaveBeenCalled();
    wrapper.find(DeleteOutlined).simulate('click');
    expect(props.onDeleteItem).toHaveBeenCalled();
  });
});
