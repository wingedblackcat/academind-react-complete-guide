import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

/**
 * @param {ExpensesProps} props
 * @returns {JSX.Element}
 */
const Expenses = (props) => {
  const { expenses } = props;

  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  /**
   * @param {string} selectedYear
   */
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

/**
 *  @typedef ExpensesProps
 *  @type object
 *  @property {Expense[]} expenses - Expenses list
 */
