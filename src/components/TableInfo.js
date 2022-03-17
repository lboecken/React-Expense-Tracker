import React from "react";
import Table from 'react-bootstrap/Table'


export default function TableInfo() {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Date</th>
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
    )
}