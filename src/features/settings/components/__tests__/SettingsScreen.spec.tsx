import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { SettingsScreen } from '../SettingsScreen';
import { LABEL } from '@/language';
import { mockUser } from '@/mocks';

const mockClearSession = jest.fn();

jest.mock('react-native-auth0', () => ({
  useAuth0: () => ({
    clearSession: mockClearSession,
    user: mockUser,
  }),
}));

describe('SettingsScreen', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<SettingsScreen />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should call useAuth0 clearSession function when sign out button is pressed', () => {
    render(<SettingsScreen />);

    fireEvent.press(screen.getByText(LABEL.LOG_OUT));
    expect(mockClearSession).toHaveBeenCalled();
  });

  //  not working right now
  //   it('should display formatted user name label', async () => {
  //     const wrapper = await render(<SettingsScreen />);

  //     console.log(`=====================${mockUser.email}=====================`);

  //     await new Promise((r) => setTimeout(r, 1000));
  //     wrapper.update(<SettingsScreen />);
  //     wrapper.debug();

  //     await expect(
  //       screen.getByText(LABEL.LOGGED_IN_AS(mockUser.email)),
  //     ).toBeTruthy();
  //   });
});
