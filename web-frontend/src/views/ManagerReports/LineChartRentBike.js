import React, {useState, useEffect} from 'react';
import {Line} from 'react-chartjs-2';
import api from "../../api/api";


function LineChartRentBike() {

    const [one, setOne] = useState()
    const [two, setTwo] = useState()
    const [three, setThree] = useState()
    const [four, setFour] = useState()
    const [five, setFive] = useState()

  
    useEffect(() => {
      api.showTripCompleteLineChart().then((res) => {
        setOne(res.data.response[0])
        setTwo(res.data.response[1])
        setThree(res.data.response[2])
        setFour(res.data.response[3])
        setFive(res.data.response[4])
        //console.log("Data from here->",res)
      });
    },[]);

const data = {
  labels: ['Byres Road', 'Partik', 'Warehouse', 'Dalmarnock', 'Rutherglen'],
  datasets: [
    {
      label: 'Rents',
      data: [one, two, three, four, five],
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
export default LineChartRentBike;
