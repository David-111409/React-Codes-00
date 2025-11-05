import { useState, useContext } from "react";
import { listContext } from "../App";

function AddTransaction() {
  const { transactions, setTransactions } = useContext(listContext);
  const [newTrans, setNewTrans] = useState({id : "", text: "", amount: "" });

  function handleAmount(e) {
    setNewTrans({ ...newTrans, amount: e.target.value });
  }

  function handleText(e) {
    setNewTrans({ ...newTrans, text: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newTrans.text || !newTrans.amount) return;

    const newTransaction = {
      id: crypto.randomUUID(),
      text: newTrans.text,
      amount: Number(newTrans.amount),
    };

    setTransactions([...transactions, newTransaction]);
    setNewTrans({ text: "", amount: "" }); // ✅ Reset input fields
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={newTrans.text}
            onChange={handleText}
            type="text"
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={newTrans.amount}
            onChange={handleAmount}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
