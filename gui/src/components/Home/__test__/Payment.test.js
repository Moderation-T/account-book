import React from 'react';
import Payment from '../Payment';

import { shallow } from 'enzyme';

const props = {
  outcome: 100,
  income: 10,
};

describe('test Payment component', () => {
  it('component should render correct income&outcome number', () => {
    const wrapper = shallow(<Payment {...props}></Payment>);
    expect(wrapper.find('div .income').text()).toEqual(`收入：${props.income}`);
    expect(wrapper.find('div .outcome').text()).toEqual(`支出：${props.outcome}`);
  });
});
