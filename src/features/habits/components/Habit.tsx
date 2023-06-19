import React from 'react';
import {Divider, IconButton, Menu, Text} from 'react-native-paper';

import {HabitIcon} from '@app/components/HabitIcon';
import {Alert, StyleSheet, View} from 'react-native';
import {themeColors} from '@app/theme';
import {LABEL} from '@app/language';
import {DotHistory} from './DotHistory';
import {Habit as HabitType} from '@app/context/types';
import {ACTIONS, useStore} from '@app/context/StoreContext';

export const Habit = (props: HabitType) => {
  const {
    id,
    name,
    iconName,
    colour,
    completionPercentage,
    active,
    completionHistory,
    // daysDue,
  } = props;

  const {dispatch} = useStore();

  const toggleHabitActive = (habitId: string) => {
    dispatch({
      type: ACTIONS.TOGGLE_HABIT_ACTIVE,
      payload: habitId,
    });
  };

  const openDeleteHabitConfirmation = (habitId: string) => {
    Alert.alert(LABEL.DELETE_HABIT, LABEL.DELETE_ARE_YOU_SURE, [
      {
        text: LABEL.CANCEL,
        style: 'cancel',
      },
      {
        text: LABEL.DELETE,
        onPress: () =>
          dispatch({
            type: ACTIONS.DELETE_HABIT,
            payload: habitId,
          }),
        style: 'destructive',
      },
    ]);
  };

  const [visible, setVisible] = React.useState(false);
  const openContextMenu = () => setVisible(true);
  const closeContextMenu = () => setVisible(false);

  return (
    <>
      <View style={styles.cardContainer}>
        <HabitIcon iconName={iconName} colour={colour} />
        <View style={{flex: 1}}>
          <Text style={styles.habitName}>{name}</Text>
          <Text style={styles.habitDaysDue} variant={'bodySmall'}>
            {LABEL.DAYS_COMPLETED(completionPercentage)}
          </Text>
        </View>
        <Menu
          visible={visible}
          onDismiss={closeContextMenu}
          anchor={
            <IconButton icon={'dots-vertical'} onPress={openContextMenu} />
          }>
          <Menu.Item
            onPress={() => {
              toggleHabitActive(id);
            }}
            title={active ? LABEL.ARCHIVE_HABIT : LABEL.UNARCHIVE_HABIT}
          />
          <Menu.Item
            onPress={() => {
              openDeleteHabitConfirmation(id);
            }}
            title={LABEL.DELETE_HABIT}
          />
        </Menu>
      </View>
      <View style={styles.dotHistoryContainer}>
        <DotHistory completionHistory={completionHistory} colour={colour} />
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  habitName: {
    marginBottom: 4,
    fontWeight: 'bold',
  },
  habitDaysDue: {
    color: themeColors.grey[500],
  },
  dotHistoryContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
