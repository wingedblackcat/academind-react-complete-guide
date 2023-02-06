import ChartBar from './ChartBar';
import './Chart.css';

/**
 * @param {ChartProps} props
 * @returns {JSX.Element}
 */
const Chart = (props) => {
  const { dataPoints } = props;

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          max={null}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

/**
 * @typedef ChartProps
 * @type object
 * @property {DataPoint[]} dataPoints
 */
