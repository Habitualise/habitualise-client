import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { TodayHabit } from '../TodayHabit';
import { StoreContextProvider, ACTIONS } from '@/context/StoreContext';

const toggleHabit = jest.fn();

const reducer = jest.fn((state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_HABIT_IS_COMPLETED:
      toggleHabit();
      return state;
    default:
      return state;
  }
});

describe('TodayHabit', () => {
  it('should match snapshot for not completed', () => {
    const { toJSON } = render(
      <StoreContextProvider reducer={reducer}>
        <TodayHabit
          colour="rgb(0, 0, 0"
          daysDue={[1, 2, 3, 4, 5, 6, 7]}
          iconName="abacus"
          id="1"
          isCompleted={false}
          name="test"
        />
      </StoreContextProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should match snapshot for completed', () => {
    const { toJSON } = render(
      <StoreContextProvider reducer={reducer}>
        <TodayHabit
          colour="rgb(0, 0, 0"
          daysDue={[1, 2, 3]}
          iconName="abacus"
          id="1"
          isCompleted={true}
          name="test"
        />
      </StoreContextProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call dispatch when pressed', () => {
    render(
      <StoreContextProvider reducer={reducer}>
        <TodayHabit
          colour="rgb(0, 0, 0"
          daysDue={[0, 1, 2, 3, 4, 5, 6]}
          iconName="abacus"
          id="1"
          isCompleted={false}
          name="test"
        />
      </StoreContextProvider>,
    );

    fireEvent.press(screen.getByText('test'));
    expect(toggleHabit).toHaveBeenCalled();
  });
});
