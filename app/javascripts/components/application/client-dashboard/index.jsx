import React from 'react'

import FontAwesome from 'react-fontawesome'
import Panel from '@/components/panel'
import style from './style'

import {
  Line,
  Doughnut
} from 'react-chartjs-2'
// var LineChart = require("react-chartjs").Line;

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

  var pieData = {
    labels: ["Dash", "High Cap MN", "Diversified Income", "High Cap POS"],
    datasets: [
      {
        backgroundColor: ['#FF715B', '#39BFC9', '#2F6690', '#CCA43B'],
        data: [35, 29, 22, 16]
      }
    ]
  }

  var pieOptions = {
    legend: {
      position: 'bottom'
    },
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <section className='section'>
      <div className='container is-fluid'>
        <h1 className='title'>
          Client Dashboard
        </h1>
        <div className='columns'>
          <div className='column is-one-quarter'>
            <h5 className='cd-label'>Client Info</h5>
            <Panel headingClassName='nai-panel__teal'>
              <p className='has-text-grey'><b>543254 Canada Inc.</b></p>
              <p className='has-text-grey has-text-weight-light'>
                <span>#50 - 569 Hector Creek</span><br />
                <span>Vancouver, BC</span><br />
                <span>V5J 1K3, Canada</span><br />
              </p>
              <p className='text-teal'>
                <FontAwesome name='phone' className='nai-panel__icon' /> <b>555-555-5555</b>
              </p>
              <p className='text-teal'>
                <FontAwesome name='envelope' className='nai-panel__icon' /> <b>fake@fakeness.com</b>
              </p>
            </Panel>
          </div>
          <div className='column is-three-quarters'>
            <h5 className='cd-label'>Performance</h5>
            <div className='columns'>
              <div className='column'>
                <Line
                  data={lineData}
                  options={lineOptions}
                  width={300}
                  height={200} />
              </div>
              <div className='column'>
                <Doughnut
                  data={pieData}
                  options={pieOptions}
                  width={170}
                  height={170} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
