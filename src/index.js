import React from "react";
import ReactDOM from "react-dom";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./assets/transactions.json";

ReactDOM.render(
  <TransactionHistory items={transactions} />,
  document.getElementById("root"),
);
