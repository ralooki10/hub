import renderer from 'react-test-renderer'
import Page from '../../pages/index.js'

describe('homepage look and feel', () => {
	it('should have a page title', () => {
		const component = renderer.create(<Page />);
		const tree = component.toJSON();

		expect(tree.children[0].type).toEqual('title');
	});
});

