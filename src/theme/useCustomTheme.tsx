import {MD3Theme, useTheme as usePaperTheme} from 'react-native-paper';
import {CustomThemeColors} from '@app/theme/index';

export interface CustomTheme extends MD3Theme {
  colors: CustomThemeColors;
}

export function useCustomTheme(): CustomTheme {
  const theme = usePaperTheme();
  return theme as unknown as CustomTheme;
}
