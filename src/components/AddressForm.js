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
  const [address, setAddress] = useState("");
  const [ens, setEns] = useState("");
  const [state, dispatch] = useContext(BalanceContext);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const submitForm = async formData => {
    setAddress("");
    setEns("");
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
    setAddress("");
    setEns("");
    if (validateEns(val)) {
      let adr = await getAddressFromEns(val);
      if (adr) {
        setAddress(adr);
      }
    }
    if (ethersUtil.isAddress(val)) {
      let ens = await getEnsFromAddress(val);
      if (ens) {
        setEns(ens);
      }
    }
  };

  const formatCheck = async input => {
    return ethersUtil.isAddress(input);
  };

  const displayEnsOrAddress = () => {
    if (address) {
      return (
        <div className="ens-address">
          You entered the ENS for: <br />
          <span className="highlight">{address}</span>
        </div>
      );
    }
    if (ens) {
      return (
        <div className="ens-address">
          You entered the wallet address for: <br />
          <span lassName="highlight">{ens}</span>
        </div>
      );
    }
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
              onChange={checkForEnsOrAddress}
              ref={register({
                required: true,
                validate: formatCheck
              })}
            />
            {errors.wallet &&
              errors.wallet.type === "validate" && (
                <div className="error">Please use a valid Ethereum address</div>
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
