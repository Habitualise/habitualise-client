import React, {useCallback, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WeekdayPicker} from './WeekdayPicker';
import {useFocusEffect} from '@react-navigation/native';
import {LABEL} from '@app/language';
import {themeColors} from '@app/theme';

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
    console.log({
      name,
      icon,
      selectedDays,
    });
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
          <IconButton icon={icon} onPress={handleIconPress} />
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
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    fontSize: 16,
    paddingLeft: 8,
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
