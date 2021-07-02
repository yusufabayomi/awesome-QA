import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TextInput from './TextInput';

afterEach(cleanup);

describe('Renders TextInput Component', () => {
  const props = {
    label: 'Question',
  };

  it('renders correctly', () => {
    const { asFragment } = render(<TextInput {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an input field with text atribute', () => {
    const { getByTestId } = render(<TextInput {...props} />);
    expect(getByTestId('text')).toHaveAttribute('type', 'text');
  });
});
