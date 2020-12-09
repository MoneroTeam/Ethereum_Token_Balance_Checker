import React, { useContext } from "react";
import { BalanceContext } from "../contexts/balanceContext";
import { Segment, Loader } from "semantic-ui-react";

export default function BalanceDisplay() {
  const [state, dispatch] = useContext(BalanceContext);

  // loading state
  if (state.fetching) {
    return (
      <div>
        <Loader active content="Fetching Token Balance" />
      </div>
    );
  }
  // no data yet
  if (state.balance === null) {
    if (state.failed) {
      return (
        <Segment basic>
          <p>Failed to Fetch Balance</p>
        </Segment>
      );
    } else {
      return <div />;
    }
  } else {
    return (
      <Segment basic>
        <p>
          Your <span className="highlight">{state.symbol}</span> Balance is:{" "}
          <span className="highlight">{state.balance}</span>
        </p>
      </Segment>
    );
  }
}
