import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';

/**
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
const Expenses = (props) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  /**
   * @param {string} selectedYear
   */
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;

/**
 *  @typedef ExpensesProps
 *  @type object
 *  @property {Expense[]} expenses - Expenses list
 */
