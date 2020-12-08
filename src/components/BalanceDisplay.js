import React, { useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";

export default function BalanceDisplay() {
  const [state, dispatch] = useContext(BalanceContext);
  if (state.balance === null) {
    return <div />;
  }
  if (state.loading) {
    return <div>loading</div>;
  } else {
    return <div>{state.balance}</div>;
  }
}
