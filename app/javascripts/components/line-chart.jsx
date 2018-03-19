import React from 'react'
import {
  Line
} from 'react-chartjs-2'

export default (props) => {
  var lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        borderColor: '#2F6690',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#39BFC9',
        pointBorderWidth: 2,
        pointRadius: 5,
        fill: false,
        data: [12, 24, 40, 34, 50, 52, 70]
      }
    ]
  };

  var lineOptions = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    }
  }

  return (
    <Line
      data={lineData}
      options={lineOptions}
      width={300}
      height={200} />
  )
}
