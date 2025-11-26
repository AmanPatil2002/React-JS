import { useState } from 'react'
import './App.css'
import Chart from 'react-apexcharts';

function App() {
  const [charts, setCharts] = useState(
    {
      options: {
        colors: ['#E91E63', '#FF9800','#E52820'],
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: "series-2",
          data: [35, 45, 40, 55, 45, 65, 75, 90]
        },
        {
          name: "series-3",
          data: [20, 25, 40, 15, 45, 88, 65, 30]
        }
      ]
    }
)

  return (
    <>
      <h1>Charts in React</h1>
      <h3>Bar chart</h3>
      <Chart
              options={charts.options}
              series={charts.series}
              type="bar"
              width="500"
            />
      <h3>Line chart</h3>
      <Chart
              options={charts.options}
              series={charts.series}
              type="line"
              width="500"
            />
      <h3>Area chart</h3>
      <Chart
              options={charts.options}
              series={charts.series}
              type="area"
              width="500"
            />
    </>
  )
}

export default App
