import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import JSONDATA from './data.json'
const data = {
  labels: [
    'Stand1',
    'Stand2',
    'Stand3'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};
function PieChart() {
  return (
    <div>
        <Doughnut data={data}
            options={{
                responsive: true,
                maintainAspectRatio: true,
            }} />
    </div>
  );
}
export default PieChart;