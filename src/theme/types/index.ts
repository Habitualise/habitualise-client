import {HabitColor} from '@app/context/types';

type Transparent = 'transparent';
type RGB = `rgb(${number}, ${number}, ${number})`; // IMPORTANT: make sure to include spaces between numbers
type RGBA = `rgba(${number}, ${number}, ${number}, ${
  | number
  | (number & string)})`; // The fourth value can be an integer or a float

type RGBColor = RGB | RGBA | Transparent;

type ColorPalette = {
  50: RGBColor;
  100: RGBColor;
  200: RGBColor;
  300: RGBColor;
  400: RGBColor;
  500: RGBColor;
  600: RGBColor;
  700: RGBColor;
  800: RGBColor;
  900: RGBColor;
};

type ElevationColors = {
  level0: RGBColor;
  level1: RGBColor;
  level2: RGBColor;
  level3: RGBColor;
  level4: RGBColor;
  level5: RGBColor;
};

type SurfaceColors = {
  background: RGBColor;
  onBackground: RGBColor;
  surface: RGBColor;
  onSurface: RGBColor;
  surfaceVariant: RGBColor;
  surfaceVariantPressed: RGBColor;
  onSurfaceVariant: RGBColor;
  surfaceDisabled: RGBColor;
  onSurfaceDisabled: RGBColor;
};

type ThemedColors = {
  primary: RGBColor;
  onPrimary: RGBColor;
  primaryContainer: RGBColor;
  onPrimaryContainer: RGBColor;
  secondary: RGBColor;
  onSecondary: RGBColor;
  secondaryContainer: RGBColor;
  onSecondaryContainer: RGBColor;
  tertiary: RGBColor;
  onTertiary: RGBColor;
  tertiaryContainer: RGBColor;
  onTertiaryContainer: RGBColor;
};

type ErrorColors = {
  error: RGBColor;
  onError: RGBColor;
  errorContainer: RGBColor;
  onErrorContainer: RGBColor;
};

type MiscColors = {
  outline: RGBColor;
  outlineVariant: RGBColor;
  shadow: RGBColor;
  scrim: RGBColor;
  inverseSurface: RGBColor;
  inverseOnSurface: RGBColor;
  inversePrimary: RGBColor;
  backdrop: RGBColor;
  primaryLighter: RGBColor;
  success: RGBColor;
  successGreyedOut: RGBColor;
  white: RGBColor;
};

type HabitColorGradient = {
  start: RGBColor;
  middle: RGBColor;
  end: RGBColor;
};

export type HabitColorGradients = {
  [key in HabitColor]: HabitColorGradient;
};

export type CustomThemeColors = ThemedColors &
  SurfaceColors &
  ErrorColors &
  MiscColors & {
    elevation: ElevationColors;
    grey: ColorPalette;
    red: ColorPalette;
    blue: ColorPalette;
    habitColorGradients: HabitColorGradients;
  };
