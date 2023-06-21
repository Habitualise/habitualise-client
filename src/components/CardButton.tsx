import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {Card} from 'react-native-paper';
import {themeColors} from '@app/theme';

interface CardButtonProps {
  label: string;
  onPress: () => void;
  isRedText?: boolean;
}

const CardButton: React.FC<CardButtonProps> = ({
  label,
  onPress,
  isRedText = false,
}) => {
  return (
    <Pressable onPress={onPress}>
      {({pressed}) => (
        <Card
          style={[
            styles.buttonCard,
            pressed && styles.pressableContainerPressed,
          ]}
          mode="contained">
          <Card.Content>
            <Text style={[styles.cardText, isRedText && styles.redText]}>
              {label}
            </Text>
          </Card.Content>
        </Card>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonCard: {
    marginBottom: 10,
  },
  cardText: {
    fontWeight: '500',
  },
  redText: {
    color: themeColors.red[500],
  },
  pressableContainer: {
    // Add additional styles for the pressable container if needed
  },
  pressableContainerPressed: {
    backgroundColor: themeColors.grey[200],
  },
});

export default CardButton;
