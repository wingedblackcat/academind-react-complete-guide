import './ExpensesFilter.css';

/**
 * @param {ExpensesFilterProps} props
 * @returns {JSX.Element}
 */
const ExpensesFilter = (props) => {
  const { onChangeFilter, selected } = props;

  /**
   * @param {ChangeEvent<HTMLSelectElement>} event
   */
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

/**
 * @typedef ExpensesFilterProps
 * @type object
 * @property {Function} onChangeFilter
 * @property {string} selected
 */
