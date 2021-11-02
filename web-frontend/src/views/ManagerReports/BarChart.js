import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import api from "../../api/api";

function BarChart() {

  const [pieData, setPieData] = useState()
  const [one, setOne] = useState()
  const [two, setTwo] = useState()
  const [three, setThree] = useState()

useEffect(() => {
  
  api.showBarChart().then((res) => {
    
    setOne(res.data.response[0])
    setTwo(res.data.response[1])
    setThree(res.data.response[2])
    //console.log("Pie",chartData)
  });
},[]);

const data = {
  labels: ['Byres Road', 'Partik', 'Warehouse'],
  datasets: [
    {
      label: 'No of Cycle(s)',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [one, two, three]
    }
  ]
};

  return (
    <div>
        <Bar
          data={data}
          width={50}
          height={50}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              y: {
                  suggestedMin: 0,
                  suggestedMax: 10,
              }
            },
          }}
          
        />
    </div>
  );
}
export default BarChart;