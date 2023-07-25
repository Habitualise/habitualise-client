import React, {useCallback, useMemo, useState} from 'react';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

import {AuthStack} from '@app/routes/AuthStack';
import {customDarkThemeColors, customLightThemeColors} from './theme';
import {reducer, StoreContextProvider} from '@app/context/StoreContext';
import {PreferencesContext} from '@app/context/PreferencesContext';
import {StatusBar} from 'react-native';

const PaperLightTheme = {
  ...MD3LightTheme,
  colors: customLightThemeColors,
};

const PaperDarkTheme = {
  ...MD3DarkTheme,
  colors: customDarkThemeColors,
};

const CombinedLightTheme = merge(NavigationLightTheme, PaperLightTheme);
const CombinedDarkTheme = merge(NavigationDarkTheme, PaperDarkTheme);

export const App = () => {
  const [isThemeDark, setIsThemeDark] = useState(true);
  StatusBar.setBarStyle(isThemeDark ? 'light-content' : 'dark-content');

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
            <AuthStack />
          </NavigationContainer>
        </StoreContextProvider>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
