// import React,{ useState } from 'react';
      /* 倒入特定包⬆️ */

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
function ExpenseItem(props){
  // const [title,setTitle] = useState(props.title);
  //  //  assign an initial value for that ⬆️special variable
   
  // const clickHandler = () =>{
  //   setTitle('Updated!');
  // };
    return (
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
          {/* 没有括号 不执行 只是listen👇 */}
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
      </li>
    );
}

export default ExpenseItem;