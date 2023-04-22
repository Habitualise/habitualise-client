import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Divider, IconButton, Text} from 'react-native-paper';

import PaperView from '@app/components/PaperView';
import {LABEL} from '@app/language';
import {useStore} from '@app/context/StoreContext';
import {Habit} from './Habit';
import {themeColors} from '@app/theme';
// import {AddHabit} from './AddHabit';
// import {ShadowModal} from '@app/components/ShadowModal';

export const HabitsScreen = () => {
  const [habitsStatus, setHabitsStatus] = useState<'active' | 'archived'>(
    'active',
  );
  const {state} = useStore();
  const {habits} = state;

  //   const [modalVisible, setModalVisible] = useState(false);

  const setActive = () => {
    setHabitsStatus('active');
  };

  const setArchived = () => {
    setHabitsStatus('archived');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
      edges={['top', 'left', 'right']}>
      {/* <ShadowModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <AddHabit setModalVisible={setModalVisible} />
      </ShadowModal> */}

      <PaperView style={{flex: 1}}>
        <View style={styles.headerContainer}>
          <Text variant="headlineLarge" style={styles.heading}>
            {LABEL.HABITS_HEADER}
          </Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonGroup}>
              <Button
                mode={habitsStatus === 'active' ? 'contained-tonal' : 'text'}
                textColor={themeColors.primary}
                onPress={setActive}
                icon="check"
                style={{marginRight: 8}}>
                {LABEL.ACTIVE}
              </Button>
              <Button
                mode={habitsStatus === 'archived' ? 'contained-tonal' : 'text'}
                textColor={themeColors.primary}
                onPress={setArchived}
                icon="archive">
                {LABEL.ARCHIVED}
              </Button>
            </View>
            <IconButton
              icon="plus"
              iconColor={themeColors.primary}
              onPress={() => console.log('add habit pressed')}
            />
          </View>
        </View>
        <Divider />
        <ScrollView>
          {habits
            .filter(habit => habit.status === habitsStatus)
            .map(habit => (
              <Habit
                key={habit.id}
                id={habit.id}
                name={habit.name}
                iconName={habit.iconName}
                colour={habit.colour}
                completionPercentage={habit.completionPercentage}
                status={habit.status}
                completionHistory={habit.completionHistory}
                daysDue={habit.daysDue}
              />
            ))}
        </ScrollView>
      </PaperView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  heading: {
    marginBottom: 5,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
});
