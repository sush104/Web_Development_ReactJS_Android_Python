import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import api from "../../api/api";


function MultiLineChart() {

    const [one, setOne] = useState()
    const [two, setTwo] = useState()
    const [three, setThree] = useState()
  
    useEffect(() => {
      api.showTripCompleteBarChart().then((res) => {
        setOne(res.data.response[0])
        setTwo(res.data.response[1])
        setThree(res.data.response[2])
        //console.log("Data->",one.num_trips)
      });
    },[]);

const data = {
  labels: ['Byres Road', 'Partik', 'Warehouse'],
  datasets: [
    {
      label: 'Rents',
      data: [one, two, three],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};


return(
  <div>
    <Line data={data} options={{
        scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 10,
            },
          },
    }} />
  </div>
);
}
export default MultiLineChart;