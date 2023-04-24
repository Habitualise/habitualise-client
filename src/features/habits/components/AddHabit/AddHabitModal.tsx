import React, {useCallback, useState} from 'react';
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

  const {state, dispatch} = useStore();
  const {habits} = state;

  // when this modal is focused again, check if iconName is passed in params
  // if it is, set the icon to the iconName
  useFocusEffect(
    useCallback(() => {
      const iconName = route.params?.iconName;
      if (iconName) {
        setIcon(iconName);
      }
    }, [route]),
  );

  const handleIconPress = () => {
    navigation.navigate(LABEL.HABITS_STACK, {screen: LABEL.PICK_ICON_MODAL});
  };

  const handleCreateHabit = () => {
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
          <Text style={styles.discard}>Discard</Text>
        </TouchableOpacity>
        <Text variant="titleMedium">Add Habit</Text>
        <TouchableOpacity onPress={handleCreateHabit}>
          <Text style={styles.create}>Create</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <IconButton
            style={styles.iconButton}
            icon={icon}
            onPress={handleIconPress}
            mode={'contained'}
            size={42}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Habit name"
            onChangeText={setName}
            value={name}
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
});
