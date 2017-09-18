import Navbar from '../../components/Navbar.react';
import {mount} from 'enzyme';

describe('navigation bar', () => {
	it('should render given array of navigation items', () => {
		let navbarItems = ['a', 'b', 'c'];
		let wrapper = mount(<Navbar items={navbarItems}/>);
		const count = wrapper.children().length;

		expect(count).toBe(3);
	});

	it('should render the correct name for a navigation item', () => {
		let testItem = {
			name: 'Test name',
			url: '/',
			blurb: 'Some test blurb'
		};
		let wrapper = mount(<Navbar items={[testItem]}/>);

		expect(wrapper.find('.navigationItem').text()).toBe('Test name');
	});
});

