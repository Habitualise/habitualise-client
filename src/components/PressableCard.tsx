import React from 'react';
import {Pressable, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

import {themeColors} from '@app/theme';

interface PressableCardProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  isGreyedOut?: boolean;
}

export const PressableCard = (props: PressableCardProps) => {
  const {children, onPress, isGreyedOut, style} = props;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgba(0,0,0,0.04)' : 'rgba(0,0,0,0)',
        },
        style,
      ]}
      android_ripple={{color: themeColors.grey[300]}}>
      <View style={styles(isGreyedOut).card}>{children}</View>
    </Pressable>
  );
};

const styles = (isGreyedOut = false) =>
  StyleSheet.create({
    card: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isGreyedOut ? 'rgba(0,0,0,0.04)' : 'rgba(0,0,0,0)',
    },
  });
