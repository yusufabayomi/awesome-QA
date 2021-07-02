import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TextArea from './TextArea';

afterEach(cleanup);

describe('Renders TextArea Component', () => {
  const props = {
    label: 'Answer',
  };

  it('renders correctly', () => {
    const { asFragment } = render(<TextArea {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
