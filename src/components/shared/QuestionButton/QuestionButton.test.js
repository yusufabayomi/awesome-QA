import React from 'react';
import { shallow } from 'enzyme';
import QuestionButton from './QuestionButton';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

describe('Renders Button Component', () => {
  let wrapper;
  beforeEach(() => {
    const props = {
      buttonText: 'Edit',
      icon: faPencilAlt,
    };
    wrapper = shallow(<QuestionButton {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
