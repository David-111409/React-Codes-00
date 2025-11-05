import React from "react";
import { listContext } from "../App";
function Balance() {
  const { transactions } = React.useContext(listContext);
  // console.log(transactions);
  const sum = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {sum < 0 ? "-" : sum > 0 ? "+" : ""}${sum < 0 ? -sum : sum}
      </h1>
    </>
  );
}

export default Balance;
