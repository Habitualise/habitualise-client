import {Habit, UserBE} from './types';

export const ACTIONS = {
  SET_ALL_HABITS: 'SET_ALL_HABITS',
  TOGGLE_HABIT_IS_COMPLETED: 'TOGGLE_HABIT_IS_COMPLETED',
  HANDLE_LOGOUT: 'HANDLE_LOGOUT',
  ADD_HABIT: 'ADD_HABIT',
  SET_USER: 'SET_USER',
  TOGGLE_HABIT_ACTIVE: 'TOGGLE_HABIT_ACTIVE',
  DELETE_HABIT: 'DELETE_HABIT',
  SET_THEME_DARK: 'SET_THEME_DARK',
} as const;

type Action = {
  type: keyof typeof ACTIONS;
  payload: any;
};

export interface State {
  habits: Habit[];
  // BE = backend, additional info about the user, not the same as user from Auth0
  userBE: UserBE;
  isThemeDark: boolean;
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME_DARK:
      return {...state, isThemeDark: action.payload};
    case ACTIONS.SET_USER:
      return {...state, userBE: action.payload};
    case ACTIONS.SET_ALL_HABITS:
      // action.payload should be an array of habits
      // TODO: add some validation here
      return {...state, habits: action.payload};
    case ACTIONS.ADD_HABIT:
      // action.payload should be a habit
      return {...state, habits: [...state.habits, action.payload]};
    case ACTIONS.HANDLE_LOGOUT:
      return {...state, habits: [], userBE: {name: ''}};
    case ACTIONS.TOGGLE_HABIT_IS_COMPLETED: {
      // action.payload should be the id of the habit
      // scan through habits and find the one that matches the id
      // then toggle the isCompleted property
      const updatedHabits = state.habits.map(habit => {
        if (habit.id === action.payload) {
          // push true to habit.completionHistory [] if habit.isCompleted is false
          // else, pop off the last element of habit.completionHistory []
          // then toggle habit.isCompleted
          if (!habit.isCompletedToday) {
            habit.completionHistory.push(true);
          } else {
            habit.completionHistory.pop();
          }

          return {...habit, isCompletedToday: !habit.isCompletedToday};
        }
        return habit;
      });
      return {...state, habits: updatedHabits};
    }
    case ACTIONS.TOGGLE_HABIT_ACTIVE: {
      // action.payload should be the id of the habit
      const updatedHabits = state.habits.map(habit => {
        if (habit.id === action.payload) {
          return {...habit, active: !habit.active};
        }
        return habit;
      });
      return {...state, habits: updatedHabits};
    }
    case ACTIONS.DELETE_HABIT: {
      // action.payload should be the id of the habit
      const updatedHabits = state.habits.filter(
        habit => habit.id !== action.payload,
      );
      return {...state, habits: updatedHabits};
    }
    default:
      return state;
  }
};
