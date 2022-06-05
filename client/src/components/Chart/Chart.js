import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointerValues = props.dataPointers.map(
    (dataPointer) => dataPointer.value
  );
  const totalMax = Math.max(...dataPointerValues);

  return (
    <div className="chart">
      {props.dataPointers.map((dataPointer) => (
        <ChartBar
          key={dataPointer.label}
          value={dataPointer.value}
          maxValue={totalMax}
          barLabel={dataPointer.label}
        />
      ))}
    </div>
  );
};

export default Chart;
