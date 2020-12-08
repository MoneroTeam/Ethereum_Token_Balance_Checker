import React, { useState, useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";
import getBalance from "../utils/getBalance";
import { Segment, Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { utils as ethersUtil } from "ethers";

export default function AddressForm() {
  const [clicked, setClicked] = useState(false);
  const [state, dispatch] = useContext(BalanceContext);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

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

  console.log("errors", errors);

  const formatCheck = input => {
    return ethersUtil.isAddress(input);
  };

  return (
    <Segment basic>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <input
              name="token"
              placeholder="Token Address"
              ref={register({
                required: true,
                validate: formatCheck
              })}
            />
            {errors.token &&
              errors.token.type === "validate" && (
                <div className="error">Please use a valid Ethereum address</div>
              )}
          </Form.Field>
          <Form.Field width={6}>
            <input
              name="wallet"
              placeholder="Wallet Adress"
              ref={register({
                required: true,
                validate: formatCheck
              })}
            />
            {errors.wallet &&
              errors.wallet.type === "validate" && (
                <div className="error">Please use a valid Ethereum address</div>
              )}
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
