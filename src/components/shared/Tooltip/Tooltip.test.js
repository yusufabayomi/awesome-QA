import { render, cleanup, fireEvent } from '@testing-library/react';
import ToolTip from './Tooltip';

afterEach(cleanup);

describe('Renders Tooltip Component', () => {
  const props = {
    description: 'Here you can add a new question',
  };

  it('renders correctly', () => {
    const { asFragment } = render(<ToolTip {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shows, then hides (toogle) tooltip on button click', () => {
    let tooltip;
    const { getByTestId, queryByTestId } = render(<ToolTip {...props} />);
    fireEvent.click(getByTestId('tooltip-trigger'));
    tooltip = queryByTestId('tooltip');
    expect(tooltip).toBeTruthy();
    fireEvent.click(getByTestId('tooltip-trigger'));
    tooltip = queryByTestId('tooltip');
    expect(tooltip).toBeFalsy();
  });
});
