import {StyleSheet} from 'react-native';

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
  },
  paperView: {
    flex: 1,
  },
});
