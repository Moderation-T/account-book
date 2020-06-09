import React from 'react';
import { shallow } from 'enzyme';

import ListItem from '../ListItem';
import ListModel from '../ListModel';

/** 测试用例说明
 * 1. 判断 LIstItem 渲染长度是否符合预期
 */

const items = [
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

const props = { items, onModifyItem: jest.fn(), onDeleteItem: jest.fn() };

let wrapper;
describe('test ListModel component', () => {
  //  每次运行单个测试用例的时候会执行这一步
  beforeEach(() => {
    wrapper = shallow(<ListModel {...props}></ListModel>);
  });

  it('should render the component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correct array length', () => {
    expect(wrapper.find(ListItem).length).toEqual(items.length);
  });
});
