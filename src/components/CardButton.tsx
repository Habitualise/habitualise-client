import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {customLightThemeColors} from '@app/theme';

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
    <View
      style={[styles.buttonContainer, isDisabled && styles.disabledContainer]}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: customLightThemeColors.grey[400]}}
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

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 10,
    backgroundColor: customLightThemeColors.surfaceVariant,
    borderRadius: 10,
    overflow: 'hidden', // added to contain the ripple within the View
  },
  pressable: {
    padding: 15,
  },
  cardText: {
    fontWeight: '500',
    color: customLightThemeColors.grey[900],
  },
  redText: {
    color: customLightThemeColors.red[500],
  },
  pressableContainerPressed: {
    backgroundColor: customLightThemeColors.surfaceVariantPressed,
  },
  disabledContainer: {
    opacity: 0.5,
  },
});

export default CardButton;
