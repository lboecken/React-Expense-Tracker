import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TableInfo from "./components/TableInfo";

export default function App() {
  const [formData, setFormData] = useState({
    currencySelect: "",
    date: "",
    description: "",
    amount: "",
    expense: "",
  });

  return (
    <>
      <Header />
      <Form formData={formData} setFormData={setFormData} />
      <TableInfo />
    </>
  );
}
