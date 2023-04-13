import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Missions from '../components/mission';
import Store from '../slices/store';

describe('Missions', () => {
  test('Render Missions Component', () => {
    const tree = TestRenderer.create(
      <Provider store={Store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
