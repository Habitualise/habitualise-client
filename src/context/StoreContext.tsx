import * as React from 'react';

export * from './reducer';

// TODO: Add types to state
const StoreContext = React.createContext({state: null, dispatch: null});

const initState = {
  habits: [],
};

export const StoreContextProvider = ({children, reducer}) => {
  const [state, dispatch] = React.useReducer(reducer, initState);
  const memoizedValue = React.useMemo(() => ({state, dispatch}), [state]);
  return (
    <StoreContext.Provider value={memoizedValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
