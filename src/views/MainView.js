import React from "react";
import Form from "../components/Form";
import { BalanceContextProvider } from "../contexts/balanceContext";

export default function MainView() {
  return (
    <BalanceContextProvider>
      <div>Balances</div>
    </BalanceContextProvider>
  );
}
