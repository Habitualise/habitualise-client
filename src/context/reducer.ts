import {IState} from '@/types';

export const ACTIONS = {
  SET_ALL_HABITS: 'SET_ALL_HABITS',
  TOGGLE_HABIT_IS_COMPLETED: 'TOGGLE_HABIT_IS_COMPLETED',
  HANDLE_LOGOUT: 'HANDLE_LOGOUT',
};

export const reducer = (state: IState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ALL_HABITS:
      // action.payload should be an array of habits
      // TODO: add some validation here
      return {...state, habits: action.payload};
    case ACTIONS.HANDLE_LOGOUT:
      return {...state, habits: []};
    case ACTIONS.TOGGLE_HABIT_IS_COMPLETED: {
      // action.payload should be the id of the habit
      // scan through habits and find the one that matches the id
      // then toggle the isCompleted property
      const updatedHabits = state.habits.map(habit => {
        if (habit.id === action.payload) {
          const updatedIsCompleted = !habit.isCompleted;
          // today's date e.g. '2023-02-13' to add to or remove from lastSevenCompletions array
          const today = new Date();
          const todayString = today.toISOString().split('T')[0];

          if (updatedIsCompleted) {
            habit.lastSevenCompletions.push(todayString);
          } else {
            habit.lastSevenCompletions = habit.lastSevenCompletions.filter(
              date => date !== todayString,
            );
          }

          return {...habit, isCompleted: !habit.isCompleted};
        }
        return habit;
      });
      return {...state, habits: updatedHabits};
    }
    default:
      return state;
  }
};
