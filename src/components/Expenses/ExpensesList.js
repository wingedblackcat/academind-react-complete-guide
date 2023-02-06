import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

/**
 * @param {ExpensesListProps} props
 * @returns {JSX.Element}
 */
const ExpensesList = (props) => {
  const { expenses } = props;

  if (expenses.length === 0) {
    return <p className="expenses-list__fallback">No expenses found :D</p>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

/**
 * @typedef ExpensesListProps
 * @type object
 * @property {Expense[]} expenses
 */
