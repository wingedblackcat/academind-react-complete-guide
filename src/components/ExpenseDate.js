import './ExpenseDate.css';

/**
 * @param props {{date: Date}}
 * @returns {JSX.Element}
 */
function ExpenseDate(props) {
  const { date } = props;
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
