import React, { useState, useEffect } from "react";
import getBalance from "../utils/getBalance";
function Form() {
  const [clicked, setClicked] = useState(false);

  // useEffect(
  //   () => {
  //     const fetchData = async () => {
  //       // const adr = "0xE1dd10E7639b824395cA5fF098E7C73b79552Ec5";
  //       const adr = "0xEc40e5D7aeD3B931F877c96C1cAE975F1DC94574";
  //       const balance = await getBalance(adr);
  //       console.log(balance);
  //     };
  //
  //     fetchData();
  //   },
  //   [clicked]
  // );

  const fetchData = async () => {
    // const adr = "0xE1dd10E7639b824395cA5fF098E7C73b79552Ec5";
    const adr = "0xEc40e5D7aeD3B931F877c96C1cAE975F1DC94574";
    const balance = await getBalance(adr);
    console.log(balance);
  };

  return (
    <div>
      <button onClick={async () => fetchData()}>Click me</button>
    </div>
  );
}

export default Form;
