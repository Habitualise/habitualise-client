import React, {ReactNode} from 'react';
import {withTheme, MD3Theme} from 'react-native-paper';
import {StyleProp, ViewStyle, View} from 'react-native';

type Props = {
  theme: MD3Theme;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

/**
 * Use this component to when you want to use the respective theme background color, the default view is transparent
 * Just have one of these components as a parent of the component you want to have the theme background color
 */
const PaperView = ({theme, style, children}: Props) => (
  <View style={[{backgroundColor: theme.colors.background}, style]}>
    {children}
  </View>
);

export default withTheme(PaperView);
