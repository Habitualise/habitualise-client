import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
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
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: themeColors.grey[400]}}
        style={({pressed}) => [
          styles.pressable,
          pressed && styles.pressableContainerPressed,
          isDisabled && styles.disabledContainer,
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
    backgroundColor: themeColors.surfaceVariant,
    borderRadius: 10,
    overflow: 'hidden', // added to contain the ripple within the View
  },
  pressable: {
    padding: 15,
  },
  cardText: {
    fontWeight: '500',
    color: themeColors.grey[900],
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
