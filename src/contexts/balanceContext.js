import React, { useReducer, createContext } from "react";
import { mainReducer } from "../reducers/mainReducer";

export const BalanceContext = createContext();
export const BalanceContextProvider = props => {
  const [state, dispatch] = useReducer(mainReducer, {
    balance: null,
    loading: false
  });
  return (
    <BalanceContext.Provider value={[state, dispatch]}>
      {props.children}
    </BalanceContext.Provider>
  );
};
