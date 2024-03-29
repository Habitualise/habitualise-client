export type CustomThemeColors = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  surfaceVariantPressed: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  elevation: {
    level0: string;
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
  };
  surfaceDisabled: string;
  onSurfaceDisabled: string;
  backdrop: string;
  primaryLighter: string;
  success: string;
  successGreyedOut: string;
  grey: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  red: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  blue: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  white: string;
};

export const customLightThemeColors: CustomThemeColors = {
  primary: 'rgb(0, 90, 193)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(216, 226, 255)',
  onPrimaryContainer: 'rgb(0, 26, 65)',
  secondary: 'rgb(87, 94, 113)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(219, 226, 249)',
  onSecondaryContainer: 'rgb(20, 27, 44)',
  tertiary: 'rgb(113, 85, 115)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(251, 215, 252)',
  onTertiaryContainer: 'rgb(41, 19, 45)',
  error: 'rgb(186, 26, 26)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: 'rgb(254, 251, 255)',
  onBackground: 'rgb(27, 27, 31)',
  surface: 'rgb(254, 251, 255)',
  onSurface: 'rgb(27, 27, 31)',
  surfaceVariant: 'rgb(240,240,246)',
  surfaceVariantPressed: 'rgb(231,231,238)',
  onSurfaceVariant: 'rgb(68, 71, 79)',
  outline: 'rgb(117, 119, 127)',
  outlineVariant: 'rgb(196, 198, 208)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(48, 48, 51)',
  inverseOnSurface: 'rgb(242, 240, 244)',
  inversePrimary: 'rgb(173, 198, 255)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(241, 243, 252)',
    level2: 'rgb(234, 238, 250)',
    level3: 'rgb(226, 233, 248)',
    level4: 'rgb(224, 232, 248)',
    level5: 'rgb(218, 229, 246)',
  },
  surfaceDisabled: 'rgba(27, 27, 31, 0.12)',
  onSurfaceDisabled: 'rgba(27, 27, 31, 0.38)',
  backdrop: 'rgba(46, 48, 56, 0.4)',
  // additional fields below
  primaryLighter: 'rgb(0, 122, 189)',
  success: 'rgb(45, 181, 106)',
  successGreyedOut: 'rgb(121, 184, 149)',
  grey: {
    50: 'rgb(250, 250, 250)',
    100: 'rgb(245, 245, 245)',
    200: 'rgb(235,236,239)',
    300: 'rgb(224, 224, 224)',
    400: 'rgb(189, 189, 189)',
    500: 'rgb(158, 158, 158)',
    600: 'rgb(117, 117, 117)',
    700: 'rgb(97, 97, 97)',
    800: 'rgb(66, 66, 66)',
    900: 'rgb(33, 33, 33)',
  },
  red: {
    50: 'rgb(255, 235, 238)',
    100: 'rgb(255, 205, 210)',
    200: 'rgb(239, 154, 154)',
    300: 'rgb(229, 115, 115)',
    400: 'rgb(239, 83, 80)',
    500: 'rgb(244, 67, 54)',
    600: 'rgb(229, 57, 53)',
    700: 'rgb(211, 47, 47)',
    800: 'rgb(198, 40, 40)',
    900: 'rgb(183, 28, 28)',
  },
  blue: {
    50: 'rgb(227, 242, 253)',
    100: 'rgb(187, 222, 251)',
    200: 'rgb(144, 202, 249)',
    300: 'rgb(100, 181, 246)',
    400: 'rgb(66, 165, 245)',
    500: 'rgb(33, 150, 243)',
    600: 'rgb(30, 136, 229)',
    700: 'rgb(25, 118, 210)',
    800: 'rgb(21, 101, 192)',
    900: 'rgb(13, 71, 161)',
  },
  white: 'rgb(255, 255, 255)',
};

export const habitColors = {
  blue: {
    start: 'rgb(161, 203, 255)',
    middle: 'rgb(30, 122, 235)',
    end: 'rgb(0, 92, 204)',
  },
  green: {
    start: 'rgb(167, 219, 177)',
    middle: 'rgb(31, 156, 58)',
    end: 'rgb(1, 99, 22)',
  },
  yellow: {
    start: 'rgb(255, 230, 156)',
    middle: 'rgb(250, 194, 25)',
    end: 'rgb(224, 170, 2)',
  },
  orange: {
    start: 'rgb(247, 179, 119)',
    middle: 'rgb(255, 138, 36)',
    end: 'rgb(196, 93, 2)',
  },
  red: {
    start: 'rgb(250, 159, 152)',
    middle: 'rgb(212, 42, 29)',
    end: 'rgb(138, 18, 0)',
  },
  purple: {
    start: 'rgb(235, 139, 252)',
    middle: 'rgb(161,57,208)',
    end: 'rgb(84,19,166)',
  },
  grey: {
    start: 'rgb(207, 204, 204)',
    middle: 'rgb(125, 125, 125)',
    end: 'rgb(89, 88, 88)',
  },
};

export const customDarkThemeColors: CustomThemeColors = {
  primary: 'rgb(183,208,255)',
  onPrimary: 'rgb(0, 38, 129)',
  primaryContainer: 'rgb(15, 59, 174)',
  onPrimaryContainer: 'rgb(220, 225, 255)',
  secondary: 'rgb(175, 198, 255)',
  onSecondary: 'rgb(0, 45, 108)',
  secondaryContainer: 'rgb(21, 68, 143)',
  onSecondaryContainer: 'rgb(217, 226, 255)',
  tertiary: 'rgb(228, 186, 218)',
  onTertiary: 'rgb(67, 39, 63)',
  tertiaryContainer: 'rgb(92, 61, 86)',
  onTertiaryContainer: 'rgb(255, 215, 245)',
  error: 'rgb(255, 180, 171)',
  onError: 'rgb(105, 0, 5)',
  errorContainer: 'rgb(147, 0, 10)',
  onErrorContainer: 'rgb(255, 180, 171)',
  background: 'rgb(27, 27, 31)',
  onBackground: 'rgb(228, 225, 230)',
  surface: 'rgb(27, 27, 31)',
  onSurface: 'rgb(228, 225, 230)',
  surfaceVariant: 'rgb(54,55,63)',
  surfaceVariantPressed: 'rgb(40,42,49)', // additional field
  onSurfaceVariant: 'rgb(198, 197, 208)',
  outline: 'rgb(144, 144, 154)',
  outlineVariant: 'rgb(69, 70, 79)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(228, 225, 230)',
  inverseOnSurface: 'rgb(48, 48, 52)',
  inversePrimary: 'rgb(51, 85, 198)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(35, 35, 42)',
    level2: 'rgb(40, 41, 49)',
    level3: 'rgb(44, 46, 56)',
    level4: 'rgb(46, 47, 58)',
    level5: 'rgb(49, 51, 62)',
  },
  surfaceDisabled: 'rgba(228, 225, 230, 0.12)',
  onSurfaceDisabled: 'rgba(228, 225, 230, 0.38)',
  backdrop: 'rgba(47, 48, 56, 0.4)',
  // additional fields below
  primaryLighter: 'rgb(145,162,241)',
  success: 'rgb(45, 181, 106)',
  successGreyedOut: 'rgb(121, 184, 149)',
  grey: {
    50: 'rgb(25,25,26)',
    100: 'rgb(34,37,42)',
    200: 'rgb(68,69,80)',
    300: 'rgb(89,93,101)',
    400: 'rgb(125,135,140)',
    500: 'rgb(157,157,157)',
    600: 'rgb(175,175,175)',
    700: 'rgb(194,194,194)',
    800: 'rgb(213,213,213)',
    900: 'rgb(238, 238, 238)',
  },
  red: {
    50: 'rgb(183, 28, 28)',
    100: 'rgb(198, 40, 40)',
    200: 'rgb(211, 47, 47)',
    300: 'rgb(229, 57, 53)',
    400: 'rgb(244, 67, 54)',
    500: 'rgb(239, 83, 80)',
    600: 'rgb(229, 115, 115)',
    700: 'rgb(239, 154, 154)',
    800: 'rgb(255, 205, 210)',
    900: 'rgb(255, 235, 238)',
  },
  blue: {
    50: 'rgb(13, 71, 161)',
    100: 'rgb(21, 101, 192)',
    200: 'rgb(25, 118, 210)',
    300: 'rgb(30, 136, 229)',
    400: 'rgb(33, 150, 243)',
    500: 'rgb(66, 165, 245)',
    600: 'rgb(100, 181, 246)',
    700: 'rgb(144, 202, 249)',
    800: 'rgb(187, 222, 251)',
    900: 'rgb(227, 242, 253)',
  },
  white: 'rgb(255, 255, 255)',
};
