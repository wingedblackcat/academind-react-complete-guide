import ExpenseItem from './ExpenseItem';
import './Expenses.css';

/**
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
function Expenses(props) {
  const { expenses } = props;

  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </div>
  );
}

export default Expenses;

/**
 *  @typedef ExpensesProps
 *  @type object
 *  @property {Expense[]} expenses - Expenses list
 */
