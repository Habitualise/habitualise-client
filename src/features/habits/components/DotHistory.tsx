import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Dot} from './Dot';

interface HistoryDotViewProps {
  completionHistory: string[];
  colour: string;
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
    if (paddedHistory.length < 28) {
      const padding = new Array(28 - paddedHistory.length).fill('SKIPPED');
      paddedHistory = [...padding, ...paddedHistory];
    } else if (paddedHistory.length > 28) {
      paddedHistory = paddedHistory.slice(paddedHistory.length - 28);
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
          baseColour={colour}
          state={state}
          consecutiveDaysCompleted={streak}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.firstRow]}>
        {renderDots().slice(0, 14)}
      </View>
      <View style={styles.row}>{renderDots().slice(14)}</View>
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
