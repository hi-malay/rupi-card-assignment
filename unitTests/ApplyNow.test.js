import React from 'react';
import { shallow } from 'enzyme';
import ApplyNow from '../src/components/ApplyNow';

// Renders a form with a phone number input and a checkbox for consent
it('renders a form with a phone number input and a checkbox for consent', () => {
    // Arrange
    const wrapper = shallow(<ApplyNow />);

    // Assert
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
});

// Does not allow the user to input more than 10 digits in the phone number input
it('does not allow the user to input more than 10 digits in the phone number input', () => {
    // Arrange
    const wrapper = shallow(<ApplyNow />);
    const input = wrapper.find('input[type="text"]');

    // Act
    input.simulate('change', { target: { value: '12345678901' } });

    // Assert
    expect(input.prop('value')).toBe('1234567890');
});
