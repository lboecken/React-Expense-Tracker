import { render } from "@testing-library/react";
import React, { useState } from "react";
//Psuedocode:
//The data needs to be moved from the child into the parent.
//The children(Form and TableInfo) needs to given access to the data
// In your Form function place props as the argument.
// how do i get the data type from the array and how do i map it out.

export default function Form({ formData, setFormData }) {
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <p className="add">Add a new item: </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="Currency">Currency</label>
        <br />
        <select
          id="currencySelect"
          required="required"
          value={formData.currencySelect}
          onChange={handleChange}
          name="currencySelect"
        >
          <option value="">--Choose Currency--</option>
          <option value="free">Free</option>
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="crypto">Crypto Currency</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />

        <label htmlFor="Date">Date</label>
        <input
          type="date"
          required="required"
          value={formData.date}
          name="date"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="expense">Expense</label>
        <br />
        <input
          type="text"
          placeholder="What did you buy?"
          required="required"
          onChange={handleChange}
          value={formData.expense}
          name="expense"
        />
        <br />
        <br />
        <label htmlFor="amount">Amount</label>
        <br />
        <input
          type="text"
          placeholder="Amount"
          required="required"
          onChange={handleChange}
          value={formData.amount}
          name="amount"
        />
        <br />
        <br />
        <label htmlFor="comments">Comments</label>
        <br />
        <textarea
          placeholder="comments"
          onChange={handleChange}
          name="description"
          value={formData.description}
        />
        <br />
        <br />
        <button type="submit">Add Expense</button>
        <br />
        <br />
      </form>
    </>
  );
}

// export default function TableInfo(props) {
//     render()(
//         { props.currencySelect }
//         { props.expense }
//         { props.amount }
//         { props.date }

//     )
// }
