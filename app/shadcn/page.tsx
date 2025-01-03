import { AreaChartInteractive } from "./AreaChartInteractive";
import AreaChartStacked from "./AreaChartStacked";
import { BarChartMultiple } from "./BarChartMultiple";
import { BarChartNegative } from "./BarChartNegative";
import { LineChartLabel } from "./LineChartLabel";

const ShadcnPage = () => {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <AreaChartStacked />
    <BarChartMultiple />
    <AreaChartInteractive />
    <BarChartNegative />
    <LineChartLabel />
  </div>;
}

export default ShadcnPage;