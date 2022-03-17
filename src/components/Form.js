import React from "react"
import DatePicker from "react-datepicker"


export default function Form() {
    const [formData, setFormData] = React.useState({
        currencySelect: "",
        expense: "",
        amount: "",
        calender: ""
    })

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value

            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <>
            <p className="add">Add a new item: </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="Card">Card</label>
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
                <DatePicker placeholderText="Click to select a date"
                    // required="required"
                    name="calender" />

                <br />
                <br />
                <label htmlFor="expense">Expense</label>
                <br />
                <input
                    type="text"
                    placeholder="Expense"
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
                <button type="submit">Add Expense</button>
                <br />
                <br />
            </form>
        </>
    )
}