import renderer from 'react-test-renderer'
import Page from '../../pages/index.js'

describe('homepage look and feel', () => {
    it('should render correctly', () => {
        const component = renderer.create(<Page />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});

