import React from 'react';
import Payment from '../Payment';

import { shallow } from 'enzyme';

/** 测试用例说明
 * 1. 是否正确显示 outcome 与 income 的值
 */

const props = {
  outcome: 100,
  income: 10,
};

let wrapper;
describe('test Payment component', () => {
  //  每次运行单个测试用例的时候会执行这一步
  beforeEach(() => {
    wrapper = shallow(<Payment {...props}></Payment>);
  });

  it('should render the component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('component should render correct income&outcome number', () => {
    expect(wrapper.find('div .income').text()).toEqual(`收入：${props.income}`);
    expect(wrapper.find('div .outcome').text()).toEqual(`支出：${props.outcome}`);
  });
});
