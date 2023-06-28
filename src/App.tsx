import React, {useCallback, useMemo, useState} from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

import {Router} from './routes';
import {themeColors} from './theme';
import {reducer, StoreContextProvider} from '@app/context/StoreContext';
import {PreferencesContext} from '@app/context/PreferencesContext';

const PaperLightTheme = {
  ...MD3LightTheme,
  colors: themeColors,
};

const CombinedLightTheme = merge(NavigationLightTheme, PaperLightTheme);
const CombinedDarkTheme = merge(NavigationDarkTheme, PaperDarkTheme);

export const App = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  let currentTheme = isThemeDark ? CombinedDarkTheme : CombinedLightTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={currentTheme}>
        <StoreContextProvider reducer={reducer}>
          <NavigationContainer theme={currentTheme}>
            <Router />
          </NavigationContainer>
        </StoreContextProvider>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
