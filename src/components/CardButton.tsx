import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useCustomTheme} from '@app/theme/useCustomTheme';

interface CardButtonProps {
  label: string;
  onPress: () => void;
  isRedText?: boolean;
  isDisabled?: boolean;
}

const CardButton: React.FC<CardButtonProps> = ({
  label,
  onPress,
  isRedText = false,
  isDisabled = false,
}) => {
  const theme = useCustomTheme();

  const styles = StyleSheet.create({
    buttonContainer: {
      marginBottom: 10,
      backgroundColor: theme.colors.surfaceVariant,
      borderRadius: 10,
      overflow: 'hidden', // added to contain the ripple within the View
    },
    pressable: {
      padding: 15,
    },
    cardText: {
      fontWeight: '500',
      color: theme.colors.grey[900],
    },
    redText: {
      color: theme.colors.red[500],
    },
    pressableContainerPressed: {
      backgroundColor: theme.colors.surfaceVariantPressed,
    },
    disabledContainer: {
      opacity: 0.5,
    },
  });

  return (
    <View
      style={[styles.buttonContainer, isDisabled && styles.disabledContainer]}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: theme.colors.grey[300]}}
        style={({pressed}) => [
          styles.pressable,
          pressed && styles.pressableContainerPressed,
        ]}
        disabled={isDisabled}>
        <Text style={[styles.cardText, isRedText && styles.redText]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default CardButton;
