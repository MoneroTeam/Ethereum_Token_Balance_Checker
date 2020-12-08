import React, { useReducer, createContext } from "react";

export const BalanceContext = createContext();

const initialState = {
  balance: 0,
  loading: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_BALANCE":
      return {
        ...state,
        loading: false,
        balance: 0
      };
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    default:
      return { ...state };
  }
};

export const BalanceContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BalanceContext.Provider value={[state, dispatch]}>
      {props.children}
    </BalanceContext.Provider>
  );
};
