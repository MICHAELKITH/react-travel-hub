import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../mission';
// eslint-disable-next-line import/extensions
import { reserveMission, leaveMission } from '../slices/missionSlice';

const mockStore = configureStore([thunk]);

describe('Missions component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      missionReducer: {
        missionStore: [
          {
            mission_id: 'mission1',
            mission_name: 'Test mission 1',
            description: 'Mission description',
            reserved: false,
          },
          {
            mission_id: 'mission2',
            mission_name: 'Test mission 2',
            description: '',
            reserved: true,
          },
        ],
      },
    });

    component = shallow(<Missions store={store} />).dive();
  });

  it('should render the Missions component', () => {
    expect(component.length).toEqual(1);
  });

  it('should dispatch reserveMission action when join button is clicked', () => {
    component.find('.join_button').at(0).simulate('click');
    const actions = store.getActions();
    expect(actions).toEqual([reserveMission('mission1')]);
  });

  it('should dispatch leaveMission action when leave button is clicked', () => {
    component.find('.leave_button').at(0).simulate('click');
    const actions = store.getActions();
    expect(actions).toEqual([leaveMission('mission2')]);
  });
});
