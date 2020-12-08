import React from "react";
import AddressForm from "../components/AddressForm";
import BalanceDisplay from "../components/BalanceDisplay";
import { BalanceContextProvider } from "../contexts/balanceContext";

export default function MainView() {
  return (
    <BalanceContextProvider>
      <h1 className="title">Token Balance Checker</h1>
      <AddressForm />
      <BalanceDisplay />
    </BalanceContextProvider>
  );
}
