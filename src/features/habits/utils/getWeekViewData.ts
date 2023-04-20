// input:
// lastSevenCompletions: ["2021-03-01", "2021-03-02", "2021-03-03", "2021-03-05", "2021-03-06", "2021-03-07"]
// daysDue: [1, 2, 5, 7];

// output:
// [
//   { dayOfMonth: '7', dayString: 'Wed', status: 'completed' },
//   { dayOfMonth: '6', dayString: 'Tue', status: 'completed' },
//   { dayOfMonth: '5', dayString: 'Mon', status: 'completed' },
//   { dayOfMonth: '4', dayString: 'Sun', status: 'missed' }
//   { dayOfMonth: '3', dayString: 'Sat', status: 'skipped' },
//   { dayOfMonth: '2', dayString: 'Fri', status: 'completed' },
//   { dayOfMonth: '1', dayString: 'Thu', status: 'completed' },
// ]

import {habitStatus} from '../types';

export const getWeekViewData = (
  lastSevenCompletions: string[],
  daysDue: number[],
) => {
  const lastSevenDays = Array.from({length: 7}, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  });

  const weekViewData = lastSevenDays.map(day => {
    const completed = lastSevenCompletions.includes(day);
    const missed = daysDue.includes(new Date(day).getDay()) && !completed;
    // if completed, return "completed", if missed, return "missed", else return "skipped"
    const status: habitStatus = completed
      ? 'completed'
      : missed
      ? 'missed'
      : 'skipped';

    const dayString = new Date(day)
      .toLocaleDateString('en-US', {
        weekday: 'short',
      })
      .substring(0, 3);

    const dayOfMonth = new Date(day).toLocaleDateString('en-US', {
      day: 'numeric',
    });

    return {dayOfMonth, dayString, status};
  });

  weekViewData.reverse();

  return weekViewData;
};
