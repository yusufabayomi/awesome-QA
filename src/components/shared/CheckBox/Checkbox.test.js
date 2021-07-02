import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CheckBox from './CheckBox';

afterEach(cleanup);

describe('Renders CheckBox Component', () => {
  const props = {
    label: 'Delay entry by 5 seconds',
  };

  it('renders correctly', () => {
    const { asFragment } = render(<CheckBox {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an input field with checkbox atribute', () => {
    const { getByTestId } = render(<CheckBox {...props} />);
    expect(getByTestId('checkbox')).toHaveAttribute('type', 'checkbox');
  });
});
