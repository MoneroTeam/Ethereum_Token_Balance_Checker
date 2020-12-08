import React, { useState, useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";
import getBalance from "../utils/getBalance";
import { Segment, Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function AddressForm() {
  const [clicked, setClicked] = useState(false);
  const [state, dispatch] = useContext(BalanceContext);
  const { register, handleSubmit, watch, errors } = useForm();

  const submitForm = async formData => {
    console.log("submit");
    console.log(formData);
    // dispatch({ type: "LOADING" });
    // // const adr = "0xE1dd10E7639b824395cA5fF098E7C73b79552Ec5";
    // const adr = "0xEc40e5D7aeD3B931F877c96C1cAE975F1DC94574";
    // const balance = await getBalance(adr);
    // console.log(balance);
    // dispatch({ type: "UPDATE_BALANCE", balance });
  };

  const isEven = () => {
    return true;
  };

  return (
    <Segment basic>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <input
              name="token"
              placeholder="Enter Wallet Address"
              ref={register}
            />
          </Form.Field>
          <Form.Field width={6}>
            <input
              name="wallet"
              placeholder="Enter Wallet Address"
              ref={register}
            />
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
