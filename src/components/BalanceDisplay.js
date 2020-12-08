import React, { useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";
import { Segment } from "semantic-ui-react";

export default function BalanceDisplay() {
  const [state, dispatch] = useContext(BalanceContext);
  if (state.loading) {
    return (
      <Segment basic>
        <div>loading</div>
      </Segment>
    );
  }

  if (state.balance === null) {
    return <div />;
  } else {
    return (
      <Segment basic>
        <p className="balance">
          Your <span className="highlight">{state.symbol}</span> Balance is:{" "}
          <span className="highlight">{state.balance}</span>
        </p>
      </Segment>
    );
  }
}
