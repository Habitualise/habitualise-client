import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconButton, Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

import {WeekdayPicker} from './WeekdayPicker';
import {ColorSwatchSelector} from './ColorSwatchSelector';
import {LABEL} from '@app/language';
import {ACTIONS, DispatchParams, useStore} from '@app/context/StoreContext';
import {Habit, HabitColor} from '@app/context/types';
import {useCustomTheme} from '@app/theme/useCustomTheme';
import {habitColors} from '@app/theme';
import {commonStyles} from '@app/components/styles';

interface AddHabitModalProps {
  navigation: any;
  route: any;
}

export const AddHabitModal: React.FC<AddHabitModalProps> = ({
  navigation,
  route,
}) => {
  const theme = useCustomTheme();

  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('image'); // default icon is image
  const [selectedDays, setSelectedDays] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [selectedColor, setSelectedColor] = useState<HabitColor>('blue');

  const [nameError, setNameError] = useState('');

  const {state, dispatch} = useStore();
  const {habits} = state;

  const validateForm = useCallback(() => {
    let isValid = true;

    if (!name) {
      setNameError(LABEL.HABIT_REQUIRED);
      isValid = false;
    } else {
      setNameError('');
    }

    return isValid;
  }, [name]);

  useFocusEffect(
    useCallback(() => {
      const iconName = route.params?.iconName;
      if (iconName) {
        setIcon(iconName);
      }
    }, [route]),
  );

  useEffect(() => {
    if (submitAttempted) {
      validateForm();
    }
  }, [submitAttempted, name, icon, validateForm]);

  const handleIconPress = () => {
    navigation.navigate(LABEL.HABITS_STACK, {screen: LABEL.PICK_ICON_MODAL});
  };

  const handleCreateHabit = () => {
    setSubmitAttempted(true);

    if (!validateForm()) {
      return;
    }

    const newHabit: Habit = {
      id: (habits.length + 1).toString(),
      name,
      iconName: icon,
      colour: selectedColor || theme.colors.grey[600],
      isCompletedToday: false,
      completionPercentage: 0,
      active: true,
      daysDue: selectedDays
        .map((day, index) => {
          if (day) {
            return index + 1;
          }
        })
        .filter(day => day !== undefined) as number[],
      completionHistory: Array(28).fill(false),
    };

    dispatch({
      type: ACTIONS.ADD_HABIT,
      payload: newHabit,
    } as DispatchParams);

    navigation.pop();
  };

  const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomColor: theme.colors.grey[400],
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    iconButton: {
      marginRight: 16,
      marginLeft: 0,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
      marginBottom: 32,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
    },
    discard: {
      fontSize: 16,
      color: theme.colors.red[600],
    },
    create: {
      fontSize: 16,
      color: theme.colors.primary,
    },
    createDisabled: {
      fontSize: 16,
      color: theme.colors.grey[500],
    },
    error: {
      color: theme.colors.red[600],
      marginBottom: 16,
    },
    repeatLabel: {
      marginLeft: 4,
      marginBottom: 8,
      fontWeight: '300',
    },
  });

  return (
    <SafeAreaView
      style={commonStyles.safeArea}
      edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Text style={styles.discard}>{LABEL.DISCARD}</Text>
        </TouchableOpacity>
        <Text variant="titleMedium">{LABEL.CREATE_HABIT}</Text>
        <TouchableOpacity onPress={handleCreateHabit}>
          <Text style={styles.create}>{LABEL.CREATE}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <IconButton
            style={styles.iconButton}
            icon={icon}
            onPress={() => {
              handleIconPress();
            }}
            mode={'contained'}
            size={42}
            iconColor={
              habitColors[selectedColor].middle || theme.colors.grey[600]
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder={LABEL.HABIT_NAME}
            onChangeText={text => {
              setName(text);
            }}
            value={name}
            underlineColor="transparent"
          />
        </View>
        <Text variant="labelMedium" style={styles.repeatLabel}>
          {LABEL.COLOUR}
        </Text>
        <ColorSwatchSelector
          selectedColor={selectedColor}
          onColorPress={setSelectedColor}
        />
        <Text variant="labelMedium" style={styles.repeatLabel}>
          {LABEL.REPEAT}
        </Text>
        <WeekdayPicker
          selectedDays={selectedDays}
          onDayPress={index => {
            setSelectedDays(days => {
              const newDays = [...days];
              newDays[index] = !newDays[index];
              return newDays;
            });
          }}
        />
        {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
      </View>
    </SafeAreaView>
  );
};
