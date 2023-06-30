import React from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useCustomTheme} from '@app/theme/useCustomTheme';

interface PressableCardProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isGreyedOut?: boolean;
}

export const PressableCard = (props: PressableCardProps) => {
  const {children, onPress, isGreyedOut, style} = props;
  const theme = useCustomTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor:
            pressed || isGreyedOut ? theme.colors.grey[100] : 'transparent',
          opacity: pressed || isGreyedOut ? 0.6 : 1,
        },
        style,
      ]}
      android_ripple={{color: theme.colors.grey[300]}}>
      <View style={styles.card}>{children}</View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
