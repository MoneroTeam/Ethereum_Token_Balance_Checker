import React, { useReducer, createContext } from "react";
import { tokenReducer } from "../reducers/tokenReducer";

export const BalanceContext = createContext();
export const BalanceContextProvider = props => {
  const [state, dispatch] = useReducer(tokenReducer, {
    symbol: null,
    balance: null,
    fetching: false,
    failed: false
  });
  return (
    <BalanceContext.Provider value={[state, dispatch]}>
      {props.children}
    </BalanceContext.Provider>
  );
};
