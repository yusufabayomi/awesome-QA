import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

describe('Renders TextInput Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      label: 'Question',
    };
    wrapper = shallow(<TextInput {...props} />);
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
});
