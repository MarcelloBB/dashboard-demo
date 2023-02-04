import LineChart from "./charts/LineChart"
import PieChart from "./charts/PieChart"

const ChartContainer = () => ( // p-4
  <div className="h-[1200px] w-10/12 mx-auto my-4 bg-zinc-100 rounded-xl shadow-xl 
    flex flex-col gap-20 items-center justify-center p-10
    lg:w-11/12 lg:flex lg:flex-row lg:justify-center lg:items-center lg:p-12"
  >
    <div className="h-1/2 w-full font-bold text-md flex flex-col items-center justify-center gap-2 lg:h-full">
      <span>Sales of the week</span>
      <LineChart />
    </div>

    <div className="h-1/2 w-full font-bold text-md flex flex-col items-center justify-center gap-2 lg:h-full">
      <span>Days</span>
      <PieChart />
    </div>
  </div>
)

export default ChartContainer