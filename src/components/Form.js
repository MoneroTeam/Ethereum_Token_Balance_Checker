import React, { useState, useEffect, useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";
import getBalance from "../utils/getBalance";

export default function Form() {
  const [clicked, setClicked] = useState(false);
  const [state, dispatch] = useContext(BalanceContext);

  const onSubmit = async () => {
    dispatch({ type: "LOADING" });
    // const adr = "0xE1dd10E7639b824395cA5fF098E7C73b79552Ec5";
    const adr = "0xEc40e5D7aeD3B931F877c96C1cAE975F1DC94574";
    const balance = await getBalance(adr);
    console.log(balance);
    dispatch({ type: "UPDATE_BALANCE", balance });
  };

  console.log(state);

  return (
    <div>
      <button onClick={async () => onSubmit()}>Click me</button>
    </div>
  );
}
