import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Renders Button Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      buttonText: 'Sort Questions',
      buttonColor: 'sort',
    };
    wrapper = shallow(<Button {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
