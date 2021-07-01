
import checkPropTypes from 'check-prop-types';

export const findByTestAtrribute = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = ({propTypes, name}, expectedProps) => {
    const propsErr = checkPropTypes(propTypes, expectedProps, 'props', name);
    return propsErr;
};