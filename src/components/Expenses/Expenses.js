import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
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
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expense) => (
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
