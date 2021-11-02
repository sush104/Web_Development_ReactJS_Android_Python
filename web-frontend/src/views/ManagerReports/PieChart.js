import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2';
import JSONDATA from './data.json'
import api from "../../api/api";

function PieChart() {
  const [pieData, setPieData] = useState()
  const [one, setOne] = useState()
  const [two, setTwo] = useState()
  const [three, setThree] = useState()

useEffect(() => {
  
  api.showPieChart().then((res) => {
    
    setOne(res.data.response[0])
    setTwo(res.data.response[1])
    setThree(res.data.response[2])
    //console.log("Pie",chartData)
  });
},[]);

//console.log("Pie2->",pieData.chartData)

//let exactData = [pieData]

const data = {
  labels: [
    'Available',
    'Damaged',
    'Rented'
  ],
  datasets: [{
    data: [one, two, three],
    backgroundColor: [
    '#00D100',
    '#FF6384',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#00D100',
    '#FF6384',
    '#FFCE56'
    ]
  }]
};

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