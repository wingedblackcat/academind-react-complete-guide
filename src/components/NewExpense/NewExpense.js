import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

/**
 * @param {NewExpenseProps} props
 * @returns {JSX.Element}
 */
const NewExpense = (props) => {
  const { onAddExpense } = props;
  const [isEditing, setIsEditing] = useState(false);

  /**
   * @param {ExpenseData} enteredExpenseData
   */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;

/**
 * @typedef NewExpenseProps
 * @type object
 * @property {Function} onAddExpense
 */

/**
 * @typedef ExpenseData
 * @type object
 * @property {string} title
 * @property {number} amount
 * @property {Date} date
 */
