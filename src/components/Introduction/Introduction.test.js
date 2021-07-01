import React from 'react';
import { shallow } from 'enzyme';
import Introduction from './Introduction';
import { findByTestAtrribute } from '../../utils/testUtil';

describe('Renders Introduction Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Introduction />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render app name', () => {
    expect(findByTestAtrribute(wrapper, 'appName').length).toBe(1);
  });

  it('Should render app description', () => {
    expect(findByTestAtrribute(wrapper, 'appDescription').length).toBe(1);
  });
});
