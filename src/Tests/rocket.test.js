import rocketsReducer, {
  fetchRockets,
  reserveRocket,
} from '../slices/featureRocket/rocketSlice';

describe('rocketsSlice reducer', () => {
  const initialState = {
    rockets: [],
    status: false,
  };

  it('should handle initial state', () => {
    expect(rocketsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchRockets.pending', () => {
    const actualState = rocketsReducer(initialState, fetchRockets.pending());
    const expectedState = { ...initialState, status: true };
    expect(actualState).toEqual(expectedState);
  });

  it('should handle reserveRocket', () => {
    const state = {
      rockets: [
        {
          id: 'falcon9',
          name: 'Falcon 9',
          description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
          image: 'https://live.staticflickr.com/65535/50818612488_e25f6e7bb1_o.jpg',
          reserved: false,
        },
      ],
      status: false,
    };
    const actualState = rocketsReducer(state, reserveRocket('falcon9'));
    const expectedState = {
      rockets: [
        {
          id: 'falcon9',
          name: 'Falcon 9',
          description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
          image: 'https://live.staticflickr.com/65535/50818612488_e25f6e7bb1_o.jpg',
          reserved: true,
        },
      ],
      status: false,
    };
    expect(actualState).toEqual(expectedState);
  });
});
