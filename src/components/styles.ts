import {StyleSheet} from 'react-native';
import {customLightThemeColors} from '@app/theme';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  paddedContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  heading: {
    fontWeight: '600',
  },
  safeArea: {
    flex: 1,
    backgroundColor: customLightThemeColors.background,
  },
  paperView: {
    flex: 1,
  },
});
