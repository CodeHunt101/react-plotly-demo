import PlotlyComponent1 from "./PlotComponent1"
import PlotlyComponent2 from "./PlotComponent2"
import PlotlyComponent3 from "./PlotComponent3"
import PlotlyComponent4 from "./PlotComponent4"

const Plotly = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <PlotlyComponent1 />
    <PlotlyComponent2 />
    <PlotlyComponent3 />
    <PlotlyComponent4 />
    </div>
  )
}
export default Plotly