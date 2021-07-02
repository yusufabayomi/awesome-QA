import React from 'react';
import QuestionButton from './QuestionButton';
import { render, cleanup, fireEvent, createEvent } from '@testing-library/react';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

afterEach(cleanup);

describe('Renders Button Component', () => {
  const props = {
    buttonText: 'Edit',
    emitEvent: jest.fn(),
  };

  it('renders correctly', () => {
    const { asFragment } = render(<QuestionButton {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render a FontAwesomeIcon when icon prop is defined', () => {
    const { getByTestId } = render(<QuestionButton {...props} icon={faPencilAlt} />);
    expect(getByTestId('buttonIcon')).toBeTruthy();
  });

  it('should stop event propagation on click event', () => {
    const { getByTestId } = render(<QuestionButton {...props} />);
    const questionButton = getByTestId('button');
    const buttonEvent = createEvent.click(questionButton);
    fireEvent.click(questionButton, buttonEvent);
    expect(buttonEvent.stopPropagation).toBeTruthy();
  });

  it('should emit a callback on click event', () => {
    const { getByTestId } = render(<QuestionButton {...props} />);
    fireEvent.click(getByTestId('button'));
    expect(props.emitEvent).toHaveBeenCalled();
  });
});
