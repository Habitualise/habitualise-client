import {Habit, UserBE} from './types';

export const ACTIONS = {
  SET_ALL_HABITS: 'SET_ALL_HABITS',
  TOGGLE_HABIT_IS_COMPLETED: 'TOGGLE_HABIT_IS_COMPLETED',
  HANDLE_LOGOUT: 'HANDLE_LOGOUT',
  ADD_HABIT: 'ADD_HABIT',
  SET_USER: 'SET_USER',
  SET_USER_DISPLAY_NAME: 'SET_USER_DISPLAY_NAME',
  TOGGLE_HABIT_ACTIVE: 'TOGGLE_HABIT_ACTIVE',
  DELETE_HABIT: 'DELETE_HABIT',
} as const;

type SetUserAction = {
  type: typeof ACTIONS.SET_USER;
  payload: UserBE;
};

type SetUserDisplayNameAction = {
  type: typeof ACTIONS.SET_USER_DISPLAY_NAME;
  payload: string;
};

type SetAllHabitsAction = {
  type: typeof ACTIONS.SET_ALL_HABITS;
  payload: Habit[];
};

type AddHabitAction = {
  type: typeof ACTIONS.ADD_HABIT;
  payload: Habit;
};

type ToggleHabitIsCompletedAction = {
  type: typeof ACTIONS.TOGGLE_HABIT_IS_COMPLETED;
  payload: string; // assuming id is string
};

type ToggleHabitActiveAction = {
  type: typeof ACTIONS.TOGGLE_HABIT_ACTIVE;
  payload: string; // assuming id is string
};

type DeleteHabitAction = {
  type: typeof ACTIONS.DELETE_HABIT;
  payload: string; // assuming id is string
};

type HandleLogoutAction = {
  type: typeof ACTIONS.HANDLE_LOGOUT;
};

// Must use this type whenever dispatch is being used
export type DispatchParams =
  | SetUserAction
  | SetUserDisplayNameAction
  | SetAllHabitsAction
  | AddHabitAction
  | ToggleHabitIsCompletedAction
  | ToggleHabitActiveAction
  | DeleteHabitAction
  | HandleLogoutAction;

export interface State {
  habits: Habit[];
  // BE = backend, additional info about the user, not the same as user from Auth0
  userBE: UserBE;
}

export const reducer = (state: State, action: DispatchParams) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {...state, userBE: action.payload};
    case ACTIONS.SET_USER_DISPLAY_NAME:
      return {...state, userBE: {...state.userBE, name: action.payload}};
    case ACTIONS.SET_ALL_HABITS:
      return {...state, habits: action.payload};
    case ACTIONS.ADD_HABIT:
      return {...state, habits: [...state.habits, action.payload]};
    case ACTIONS.HANDLE_LOGOUT:
      return {...state, habits: [], userBE: {name: ''}};
    case ACTIONS.TOGGLE_HABIT_IS_COMPLETED: {
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
      const updatedHabits = state.habits.map(habit => {
        if (habit.id === action.payload) {
          return {...habit, active: !habit.active};
        }
        return habit;
      });
      return {...state, habits: updatedHabits};
    }
    case ACTIONS.DELETE_HABIT: {
      const updatedHabits = state.habits.filter(
        habit => habit.id !== action.payload,
      );
      return {
        ...state,
        habits: updatedHabits,
      };
    }
    default:
      return state;
  }
};
