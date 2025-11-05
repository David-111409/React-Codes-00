import React from "react";
import { useContext } from "react";
import { listContext } from "../App";
function IncomeExpenses() {
  const {transactions} = useContext(listContext);

  const plusSum = transactions.reduce((acc, curr) => {
    return curr.amount < 0 ? acc : acc + curr.amount;
  }, 0);

  const minusSum = -transactions.reduce((acc, curr) => {
    return curr.amount > 0 ? acc : acc + curr.amount;
  }, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${plusSum}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${minusSum}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
