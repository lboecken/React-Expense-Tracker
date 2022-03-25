import Table from 'react-bootstrap/Table';

export default function TableInfo({ expenses, setExpenses }) {
  function deleteTableRow(index) {
    const list = [...expenses];
    list.splice(index, 1);
    setExpenses(list);
  }

  return (
    <>
      <Table striped bordered hover className='project--table'>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Date</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Comments</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, idx) => (
            <tr key={idx}>
              <td>{expense.currencySelect}</td>
              <td>{expense.date}</td>
              <td>{expense.expense}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>
                <button onClick={() => deleteTableRow(idx)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
