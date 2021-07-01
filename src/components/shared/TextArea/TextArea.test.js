import React from 'react';
import { shallow } from 'enzyme';
import TextArea from './TextArea';

describe('Renders TextArea Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      label: 'Answer',
    };
    wrapper = shallow(<TextArea {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a label', () => {
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('has a textarea', () => {
    expect(wrapper.find('textarea')).toHaveLength(1);
  });
});
