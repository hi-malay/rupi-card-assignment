import Header from "../src/components/Header";

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/components/Header';

// Renders the header component with the logo and menu button
it('should render the header component with the logo and menu button', () => {
    // Initialize the Header component
    const wrapper = shallow(<Header />);

    // Assert that the logo and menu button are rendered
    expect(wrapper.find('[data-testid="logo"]').exists()).toBe(true);
    expect(wrapper.find('button[aria-label="menu"]').exists()).toBe(true);
});