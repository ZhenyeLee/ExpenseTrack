import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{ useState } from "react";

const Dummy_Expenses = [
  {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    id: "e1",
  },
  { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), id: "e2" },
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: "e3",
  },
  {
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    id: "e4",
  },
];

const App = () => {
  const [expenses,setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    // console.log('INAPP');
    // console.log(expense);
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })

  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* 这里的 expenses⬆️ 和Expenses.js 的props.expenses[1].title 中的expenses要保持一致 */}
    </div>
  );
}

export default App;
