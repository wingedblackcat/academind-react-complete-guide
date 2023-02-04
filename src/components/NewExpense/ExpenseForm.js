import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState(new Date());

  /**
   * @param {ChangeEvent<HTMLInputElement>=} event
   */
  const titleChangeHandler = (event) => {
    if (event) {
      setEnteredTitle(event.target.value);
    }
  };

  /**
   * @param {ChangeEvent<HTMLInputElement>=} event
   */
  const amountChangeHandler = (event) => {
    if (event) {
      setEnteredAmount(event.target.valueAsNumber);
    }
  };

  /**
   * @param {ChangeEvent<HTMLInputElement>=} event
   */
  const dateChangeHandler = (event) => {
    if (event) {
      setEnteredDate(event.target.valueAsDate);
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(event) => titleChangeHandler(event)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => amountChangeHandler(event)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => dateChangeHandler(event)}
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
