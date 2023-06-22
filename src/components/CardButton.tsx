import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {themeColors} from '@app/theme';

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
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.buttonContainer,
        pressed && styles.pressableContainerPressed,
        isDisabled && styles.disabledContainer,
      ]}
      disabled={isDisabled}>
      <Text style={[styles.cardText, isRedText && styles.redText]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: themeColors.surfaceVariant,
    borderRadius: 10,
  },
  cardText: {
    fontWeight: '500',
  },
  redText: {
    color: themeColors.red[500],
  },
  pressableContainerPressed: {
    backgroundColor: themeColors.surfaceVariantDarker,
  },
  disabledContainer: {
    opacity: 0.5,
  },
});

export default CardButton;
