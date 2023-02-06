import { useState } from 'react';

import './ExpenseForm.css';

/**
 * @param {Date} date
 */
const formatDateValue = (date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return `${year}-${month}-${day}`;
};

/**
 * @param {ExpenseFormProps} props
 * @returns {JSX.Element}
 */
const ExpenseForm = (props) => {
  const { onSaveExpenseData } = props;

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState(new Date());

  /**
   * @param {ChangeEvent<HTMLInputElement>} event
   */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  /**
   * @param {ChangeEvent<HTMLInputElement>} event
   */
  const amountChangeHandler = (event) => {
    const amountValue = event.target.valueAsNumber;

    if (!isNaN(amountValue)) {
      setEnteredAmount(amountValue);
    } else {
      setEnteredAmount(0);
    }
  };

  /**
   * @param {ChangeEvent<HTMLInputElement>} event
   */
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.valueAsDate);
  };

  /**
   * @param {FormEvent<HTMLFormElement>} event
   */
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount(0);
    setEnteredDate(new Date());
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder='Expense Title'
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={formatDateValue(enteredDate)}
            min='2019-01-01'
            max='2023-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/**
 * @typedef ExpenseFormProps
 * @type Object
 * @property {Function} onSaveExpenseData
 */
