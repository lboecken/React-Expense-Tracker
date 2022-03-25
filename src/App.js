import { useState, useEffect } from 'react';
import Header from 'components/Header';
import AddExpense from 'components/AddExpense';
import Table from 'components/TableInfo.js';

export default function App() {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem('expenses')) || []
  );

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <>
      <Header />
      <AddExpense setExpenses={setExpenses} />
      <Table expenses={expenses} setExpenses={setExpenses} />
    </>
  );
}
