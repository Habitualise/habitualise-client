import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';

import { WelcomeScreen } from '../WelcomeScreen';
import { LABEL } from '@/language';

const mockAuthorize = jest.fn();

jest.mock('react-native-auth0', () => ({
  useAuth0: () => ({
    authorize: mockAuthorize,
  }),
}));

describe('WelcomeScreen', () => {
  it('should match snapshot', () => {
    const { toJSON } = render(<WelcomeScreen />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should call useAuth0 authorize function when login button is pressed', () => {
    render(<WelcomeScreen />);

    fireEvent.press(screen.getByText(LABEL.SIGN_UP));
    expect(mockAuthorize).toHaveBeenCalled();
  });
});
