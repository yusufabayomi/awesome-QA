import React from 'react';
import { shallow } from 'enzyme';
import CheckBox from './CheckBox';

describe('Renders CheckBox Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      label: 'Delay entry by 5 seconds',
    };
    wrapper = shallow(<CheckBox {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a label', () => {
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('has an input field', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('label value must be Delay entry by 5 seconds', () => {
    expect(wrapper.find('label').text()).toBe('Delay entry by 5 seconds');
  });
});
