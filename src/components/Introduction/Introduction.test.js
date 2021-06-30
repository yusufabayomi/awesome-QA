import React from 'react';
import { shallow } from 'enzyme';
import Introduction from './Introduction';
import { findByTestAtrribute } from '../../utils/testUtil';

const setUp = (props={}) => {
    const component = shallow(<Introduction {...props} />);
    return component;
}

describe('Introduction Component', () => {
    let  component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render app name', () => {
        const wrapper = findByTestAtrribute(component, 'appName');
        expect(wrapper.length).toBe(1);

    })

    it('Should render app description', () => {
        const wrapper = findByTestAtrribute(component, 'appDescription');
        expect(wrapper.length).toBe(1);
    })
})