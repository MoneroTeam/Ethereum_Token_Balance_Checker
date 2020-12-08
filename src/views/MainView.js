import React from "react";
import Form from "../components/Form";
import BalanceDisplay from "../components/BalanceDisplay";
import { BalanceContextProvider } from "../contexts/balanceContext";

export default function MainView() {
  return (
    <BalanceContextProvider>
      <div>Balances</div>
      <Form />
      <BalanceDisplay />
    </BalanceContextProvider>
  );
}
