import React, { useState, useEffect, useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";
import getBalance from "../utils/getBalance";
import { Segment, Form, Input, Button } from "semantic-ui-react";

export default function AddressForm() {
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

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input placeholder="Enter Token Address" required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Enter Wallet Address" required />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              Check Balance
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}
