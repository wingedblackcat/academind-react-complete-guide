import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

/**
 * @param props {{title: string; date: Date; amount: number}}
 * @returns {JSX.Element}
 */
function ExpenseItem(props) {
  const { title, date, amount } = props;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
