import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, IconButton, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

import {WeekdayPicker} from './WeekdayPicker';
import {LABEL} from '@app/language';
import {themeColors} from '@app/theme';
import {useStore, ACTIONS} from '@app/context/StoreContext';

interface AddHabitModalProps {
  navigation: any;
  route: any;
}

export const AddHabitModal: React.FC<AddHabitModalProps> = ({
  navigation,
  route,
}) => {
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

  const [nameError, setNameError] = useState('');
  const [iconError, setIconError] = useState('');

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

    if (icon === 'image') {
      setIconError(LABEL.CHOOSE_ICON);
      isValid = false;
    } else {
      setIconError('');
    }

    return isValid;
  }, [name, icon]);

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

    const newHabit = {
      id: habits.length + 1,
      name,
      iconName: icon,
      colour: 'rgb(66, 135, 245)',
      isCompleted: false,
      completionPercentage: 0,
      status: 'active',
      daysDue: selectedDays
        .map((day, index) => {
          if (day) {
            return index + 1;
          }
        })
        .filter(day => day !== undefined),
      completionHistory: [],
    };

    dispatch({
      type: ACTIONS.ADD_HABIT,
      payload: newHabit,
    });

    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
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
        {iconError ? <Text style={styles.error}>{iconError}</Text> : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: 'lightgray',
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
    color: themeColors.red[600],
  },
  create: {
    fontSize: 16,
    color: themeColors.blue[600],
  },
  createDisabled: {
    fontSize: 16,
    color: themeColors.grey[500],
  },
  error: {
    color: themeColors.red[600],
    marginBottom: 16,
  },
});
