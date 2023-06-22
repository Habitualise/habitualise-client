import {Habit, UserBE} from './types';

export const ACTIONS = {
  SET_ALL_HABITS: 'SET_ALL_HABITS',
  TOGGLE_HABIT_IS_COMPLETED: 'TOGGLE_HABIT_IS_COMPLETED',
  HANDLE_LOGOUT: 'HANDLE_LOGOUT',
  ADD_HABIT: 'ADD_HABIT',
  SET_USER: 'SET_USER',
} as const;

type Action = {
  type: keyof typeof ACTIONS;
  payload: any;
};

export interface State {
  habits: Habit[];
  // BE = backend, additional info about the user, not the same as user from Auth0
  userBE: UserBE;
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
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
