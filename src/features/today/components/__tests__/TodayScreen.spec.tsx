import React from 'react';
import { render } from '@testing-library/react-native';

import { TodayScreen } from '../TodayScreen';
import { LABEL } from '@/language';
import { reducer, StoreContextProvider } from '@/context/StoreContext';
import { mockHabits } from '@/mocks';

// mock useStore state
jest.mock('@/context/StoreContext', () => ({
  ...jest.requireActual('@/context/StoreContext'),
  useStore: () => ({
    state: {
      habits: mockHabits,
    },
  }),
}));

// mock toLocaleDateString to return a consistent value
jest.mock('../../utils/getTodayDateString', () => ({
  __esModule: true,
  default: () => 'Saturday, 11 February',
}));

describe('TodayScreen', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(
      <StoreContextProvider reducer={reducer}>
        <TodayScreen />
      </StoreContextProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should display todays habits header', () => {
    const { getByText } = render(
      <StoreContextProvider reducer={reducer}>
        <TodayScreen />
      </StoreContextProvider>,
    );
    expect(getByText(LABEL.TODAY_HEADER)).toBeTruthy();
  });
});
