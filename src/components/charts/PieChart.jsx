import {
  Chart,
  Tooltip,
  Title,
  ArcElement,
  Legend
} from "chart.js"

import { Pie } from "react-chartjs-2"

const PieChart = () => {
  Chart.register(
    Tooltip,
    Title,
    ArcElement,
    Legend
  )

  const data = {
    datasets: [{
      data: [35, 25, 40],
      backgroundColor: [
        "#b09696",
        "#e0b6b6",
        "#854d4d"
      ]
    }],
    labels: [
      "Day 1", "Day 2", "Day 3"
    ]
  }

  return (
    <Pie data={data}/>
  )
}

export default PieChart