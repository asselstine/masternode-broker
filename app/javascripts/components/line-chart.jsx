import React from 'react'
import {
  Line
} from 'react-chartjs-2'

export default (props) => {
  var lineData = {
    labels: ["November", "December", "January", "February", "March"],
    datasets: [
      {
        borderColor: '#26596B',
        pointBackgroundColor: '#FFF',
        pointBorderColor: '#43A2A1',
        pointBorderWidth: 2,
        pointRadius: 5,
        fill: false,
        data: [25500, 32432, 46984, 48232, 51175]
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
