import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

/**
 * @param {NewExpenseProps} props
 * @returns {JSX.Element}
 */
const NewExpense = (props) => {
  const { onAddExpense } = props;

  /**
   * @param {ExpenseData} enteredExpenseData
   */
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
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
