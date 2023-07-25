import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  return (
    <div className='alert alert-secondary'>
      <span>Budget: {currency}
        <input type="number" step="10" defaultValue={budget} onChange={(e) => {
          console.log(e)
          console.log(expenses)
          console.log(budget)
          let sumExpenses = expenses.reduce((p, c) => {
            return p+c.cost}
        ,0
      )
          console.log("sum", sumExpenses)
          if ((e.target.value - sumExpenses) < 0) {
            alert("You cannot lower budget below expenses")
            return
          }
          dispatch({ type: "SET_BUDGET", payload: e.target.value })
          console.log(budget)
        }} />
      </span>
    </div>
  );
};
export default Budget;
