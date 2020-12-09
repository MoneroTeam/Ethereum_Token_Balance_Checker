import React, { useState, useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";
import getTokenAndBalance from "../utils/getTokenAndBalance";
import { getAddressFromEns, getEnsFromAddress } from "../utils/ensLookup";
import validateEns from "../utils/validateEns";
import { Segment, Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { utils as ethersUtil } from "ethers";
import {
  UPDATE_BALANCE,
  IS_FETCHING,
  FETCH_FAILED
} from "../constants/actions";

export default function AddressForm() {
  const [validAddress, setValidAddress] = useState("");
  const [validEns, setValidEns] = useState("");
  const [state, dispatch] = useContext(BalanceContext);
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const submitForm = async formData => {
    setValidAddress("");
    setValidEns("");
    const { token, wallet } = formData;
    dispatch({ type: IS_FETCHING });
    let symbol, balance;
    try {
      [symbol, balance] = await getTokenAndBalance({
        token,
        wallet
      });
      dispatch({ type: UPDATE_BALANCE, payload: { symbol, balance } });
    } catch (e) {
      dispatch({ type: FETCH_FAILED });
    }
  };

  const checkForEnsOrAddress = async e => {
    const val = e.target.value;
    setValidAddress("");
    setValidEns("");
    if (validateEns(val)) {
      let adr = await getAddressFromEns(val);
      if (adr) {
        setValidAddress(adr);
      }
    }
    if (ethersUtil.isAddress(val)) {
      let ens = await getEnsFromAddress(val);
      if (ens) {
        setValidEns(ens);
      }
    }
  };

  const formatCheck = async input => {
    return ethersUtil.isAddress(input);
  };

  const displayEnsOrAddress = () => {
    if (validAddress) {
      return (
        <div className="ens-validAddress">
          You entered the ENS for: <br />
          <span className="highlight">{validAddress}</span>
        </div>
      );
    }
    if (validEns) {
      return (
        <div className="ens-validAddress">
          You entered the wallet address for: <br />
          <span className="highlight">{validEns}</span>
        </div>
      );
    }
  };

  return (
    <Segment basic>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <label>Token Adress</label>
            <input
              name="token"
              placeholder="Enter Token Address"
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
            <label>Wallet Adress</label>
            <input
              name="wallet"
              placeholder="Enter Wallet Adress"
              onChange={checkForEnsOrAddress}
              ref={register({
                required: true,
                validate: formatCheck
              })}
            />
            {errors.wallet &&
              errors.wallet.type === "validate" && (
                <div className="error">
                  Please use a valid Ethereum validAddress
                </div>
              )}
            {displayEnsOrAddress()}
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
