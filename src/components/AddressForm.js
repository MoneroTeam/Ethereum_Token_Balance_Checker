import React, { useState, useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";
import getTokenAndBalance from "../utils/getTokenAndBalance";
import { Segment, Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { utils as ethersUtil } from "ethers";
import {
  UPDATE_BALANCE,
  IS_FETCHING,
  FETCH_FAILED
} from "../constants/actions";

export default function AddressForm() {
  const [clicked, setClicked] = useState(false);
  const [state, dispatch] = useContext(BalanceContext);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const submitForm = async formData => {
    const { token, wallet } = formData;
    dispatch({ type: IS_FETCHING });
    let symbol, balance;
    try {
      [symbol, balance] = await getTokenAndBalance({
        token,
        wallet
      });
      dispatch({ type: UPDATE_BALANCE, payload: { symbol, balance } });
      console.log(symbol, balance);
    } catch (e) {
      dispatch({ type: FETCH_FAILED });
    }
  };

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
