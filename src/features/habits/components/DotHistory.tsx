import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Dot} from './Dot';
import {HabitColor} from '@app/context/types';

interface HistoryDotViewProps {
  completionHistory: string[];
  colour: HabitColor;
}

export const DotHistory = (props: HistoryDotViewProps) => {
  const {completionHistory, colour} = props;

  const renderDots = () => {
    let streak = 0;
    if (!completionHistory) {
      return [];
    }

    let paddedHistory = completionHistory;
    // if < 28 days, pad the start with 'SKIPPED' states
    // if > 28 days, trim the start
    if (paddedHistory.length < 14) {
      const padding = new Array(14 - paddedHistory.length).fill('MISSED');
      paddedHistory = [...padding, ...paddedHistory];
    } else if (paddedHistory.length > 14) {
      paddedHistory = paddedHistory.slice(paddedHistory.length - 14);
    }

    return paddedHistory.map((state, index) => {
      if (state === 'DONE') {
        streak += 1;
      } else if (state === 'MISSED') {
        streak = 0;
      }
      return (
        <Dot
          key={index}
          colorType={colour}
          state={state}
          consecutiveDaysCompleted={streak}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.firstRow]}>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstRow: {
    paddingBottom: 10,
  },
});
