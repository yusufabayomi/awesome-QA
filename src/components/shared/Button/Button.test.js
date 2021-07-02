import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Button from './Button';
import { faSort } from '@fortawesome/free-solid-svg-icons';

afterEach(cleanup);

describe('Renders Button Component', () => {
  const props = {
    buttonText: 'Sort Questions',
    buttonColor: 'blue',
    emitEvent: jest.fn(),
  };

  it('renders correctly', () => {
    const { asFragment } = render(<Button {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a FontAwesomeIcon when icon prop is defined', () => {
    const { getByTestId } = render(<Button {...props} icon={faSort} />);
    expect(getByTestId('buttonIcon')).toBeTruthy();
  });

  it('should emit a callback on click event', () => {
    const { getByTestId } = render(<Button {...props} />);
    fireEvent.click(getByTestId('button'));
    expect(props.emitEvent).toHaveBeenCalled();
  });
});
