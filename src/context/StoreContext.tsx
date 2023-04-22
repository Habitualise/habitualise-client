import * as React from 'react';
import {State} from './reducer';

export * from './reducer';

interface HabitsStore {
  state: State;
  dispatch: React.Dispatch<any>;
}

const StoreContext = React.createContext<HabitsStore>({
  state: {habits: []},
  dispatch: () => {},
});

const initState = {
  habits: [],
};

interface StoreContextProviderProps {
  children: React.ReactNode;
  reducer: React.Reducer<any, any>;
}

export const StoreContextProvider = ({
  children,
  reducer,
}: StoreContextProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  const memoizedValue = React.useMemo(() => ({state, dispatch}), [state]);
  return (
    <StoreContext.Provider value={memoizedValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
