import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

/**
 * @param {ExpenseItemProps} props
 * @returns {JSX.Element}
 */
const ExpenseItem = (props) => {
  const { title, date, amount } = props;

  const clickHandler = () => {
    console.log('Clicked :D');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

/**
 * @typedef ExpenseItemProps
 * @type object
 * @property {string} title - Expense title
 * @property {Date} date - Expense date
 * @property {number} amount - Expense Amount
 */
