import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredNumber: "",
  //     enteredDate: "",
  //   });
  // ⬆️pass in object

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // })
    // setUserInput((prevState) => {
    //     return {...prevState,enteredTitle:event.target.value};
    // })
  };

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredNumber: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredNumber,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    // console.log('INFORM');
    //To set clear the input
    setEnteredTitle('');
    setEnteredNumber('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            //👇to cleat the input
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredNumber}
            onChange={numberChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
