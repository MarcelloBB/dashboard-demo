import {
  Chart,
  LineElement,
  CategoryScale, // x
  LinearScale,  // y
  PointElement,
  Legend,
  Tooltip,
  Filler
} from "chart.js"

import { Line } from "react-chartjs-2"

const LineChart = () => {
  Chart.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend,
    Tooltip,
    Filler
  )

  const data = {
    // borderColor: "#a37676",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      label: "Sales of the week",
      data: [5, 9, 4, 7, 12, 8, 6, 8],
      
      pointBorderColor: "aqua",
      fill: true,
      tension: 0.4
    }]
  }

  const options = {
    plugins: {
      legend: false
    }
  }

  return (
    <Line 
      data={data}
      options={options}
    />
  )
}

export default LineChart