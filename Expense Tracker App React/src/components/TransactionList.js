import React from "react";
import { listContext } from "../App";
import { useContext } from "react";
function TransactionList() {
  const { transactions, setTransactions } = useContext(listContext);
  function handleDelete(id) {
    setTransactions(transactions.filter((tran) => tran.id !== id));
  }
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((tran) => (
          <li key={tran.id} className={tran.amount < 0 ? "minus" : "plus"}>
            {tran.text}{" "}
            <span>
              {tran.amount < 0 ? "-" : "+"}${Math.abs(tran.amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => handleDelete(tran.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
