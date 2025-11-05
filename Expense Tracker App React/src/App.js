import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { createContext } from "react";
export const listContext = createContext();
const dummyTransactions = [];
function App() {
  const [transactions, setTransactions] = React.useState(dummyTransactions);
  return (
    <listContext.Provider value={{ transactions, setTransactions }}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </listContext.Provider>
  );
}

export default App;
