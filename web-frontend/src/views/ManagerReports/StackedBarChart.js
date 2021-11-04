import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import api from "../../api/api";

function StackedbarChart() {

  const [one_a, setOne_a] = useState()
  const [two_a, setTwo_a] = useState()
  const [three_a, setThree_a] = useState()
  const [four_a, setFour_a] = useState()
  const [five_a, setFive_a] = useState()

  const [one_d, setOne_d] = useState()
  const [two_d, setTwo_d] = useState()
  const [three_d, setThree_d] = useState()
  const [four_d, setFour_d] = useState()
  const [five_d, setFive_d] = useState()

  useEffect(() => {
    api.showStackedBarChart().then((res) => {
      setOne_a(res.data.avail[0])
      setTwo_a(res.data.avail[1])
      setThree_a(res.data.avail[2])
      setFour_a(res.data.avail[3])
      setFive_a(res.data.avail[4])

      setOne_d(res.data.damag[0])
      setTwo_d(res.data.damag[1])
      setThree_d(res.data.damag[2])
      setFour_d(res.data.damag[3])
      setFive_d(res.data.damag[4])
      
      //console.log("Data->",one.num_trips)
    });
  },[]);
  
  let data ={ 
   labels:['Byres Road', 'Partik', 'Warehouse', 'Dalmarnock', 'Rutherglen'],
   datasets: [
    {
      label: 'Available',
      backgroundColor: '#00D100',
      borderColor: '#00D100',
      borderWidth: 1,
      stack: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [one_a, two_a, three_a, four_a, five_a]
    },
    {
      label: 'Damaged',
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 1,
      stack: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [one_d, two_d, three_d, four_d, five_d]
    },
  
  ]
  }
  

 return (
      <div>
        <Bar  
          data={data}
          options={{
            scales: {
              y: {
                suggestedMin: 0,
                suggestedMax: 10,
              },
              xAxes: [{
                  stacked: true
              }],
              yAxes: [{
                  stacked: true
              }],
            }
        }} />
      </div>
);
 }

export default StackedbarChart;