import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from '..';
import {mockUser} from '@/mocks';
import {reducer, StoreContextProvider} from '@/context/StoreContext';

jest.mock('react-native-auth0', () => ({
  useAuth0: () => ({
    user: mockUser,
  }),
}));

describe('Router', () => {
  // Rendering for when user is not defined is tested in app.spec.tsx
  it('should render AppTabs if auth0 user is defined', () => {
    const {getByText} = render(
      <StoreContextProvider reducer={reducer}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </StoreContextProvider>,
    );
    expect(getByText('Today')).toBeTruthy();
  });
});
