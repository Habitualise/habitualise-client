import React from 'react';
import {render} from '@testing-library/react-native';
import App from '@app/App';

jest.mock('react-native-auth0', () => ({
  useAuth0: () => ({
    user: null, // or any other mock value you want to use
  }),
}));

// Might need to put this into the setupTests.ts file later on
jest.mock('react-native-mmkv-storage', () => ({
  MMKVLoader: () => ({
    initialize: () => ({
      getArray: (arr: any[]) => arr,
    }),
  }),
  useMMKVStorage: () => [true, () => {}],
}));

describe('App', () => {
  it('renders correctly', () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
