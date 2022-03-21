import React, { useState } from "react";
import Header from "./components/Header";
import AddExpense from "./components/AddExpense";
import TableInfo from "./components/TableInfo";

export default function App() {
  // const [formData, setFormData] = useState({
  //   currencySelect: "",
  //   date: "",
  //   description: "",
  //   amount: "",
  //   expense: "",
  // })
  const [expenses, setExpenses] = useState([]);

  // console.log(expenses)
  return (
    <>
      <Header />
      <AddExpense setExpenses={setExpenses} />
      <TableInfo expenses={expenses} setExpenses={setExpenses} />
    </>
  );
}
