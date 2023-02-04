import LineChart from "./charts/LineChart"

const ChartContainer = () => (
  <div className="h-[600px] w-10/12 mx-auto my-4 p-4 bg-zinc-100 rounded-xl shadow-lg 
    lg:w-6/12 lg:flex lg:flex-row lg:justify-center lg:items-center"
  >
    <div className="h-full w-full font-bold text-md flex flex-col items-center justify-center gap-2">
      <span>Sales of the week</span>
      <LineChart />
    </div>
  </div>
)

export default ChartContainer