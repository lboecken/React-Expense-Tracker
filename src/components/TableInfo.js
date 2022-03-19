import React from "react";
import Table from "react-bootstrap/Table";
import Form from "./Form";

export default function TableInfo() {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Date</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
