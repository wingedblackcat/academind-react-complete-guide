import './ChartBar.css';

/**
 * @param {ChartBarProps} props
 * @returns {JSX.Element}
 */
const ChartBar = (props) => {
  const { value, maxValue, label } = props;

  let barFillHeight = '0%';

  if (maxValue > 0) {
    barFillHeight = `${Math.round((value / maxValue) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;

/**
 * @typedef ChartBarProps
 * @type object
 * @property {number} value
 * @property {number} maxValue
 * @property {string} label
 */
