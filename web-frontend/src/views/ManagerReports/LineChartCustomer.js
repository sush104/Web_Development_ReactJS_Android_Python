import React, {useState, useEffect}  from 'react';
import {Line} from 'react-chartjs-2';
import api from "../../api/api";

function LineChartCustomer() {

  const [one, setOne] = useState()
  const [two, setTwo] = useState()
  const [three, setThree] = useState()
  const [four, setFour] = useState()
  const [five, setFive] = useState()
  const [six, setSix] = useState()
  const [seven, setSeven] = useState()
  const [eight, setEight] = useState()
  const [nine, setNine] = useState()
  const [ten, setTen] = useState()
  const [eleven, setEleven] = useState()
  const [twelve, setTwelve] = useState()

useEffect(() => {
  
  api.showCustomerSignedupLineChart().then((res) => {
    
    setOne(res.data.response[0])
    setTwo(res.data.response[1])
    setThree(res.data.response[2])
    setFour(res.data.response[3])
    setFive(res.data.response[4])
    setSix(res.data.response[5])
    setSeven(res.data.response[6])
    setEight(res.data.response[7])
    setNine(res.data.response[8])
    setTen(res.data.response[9])
    setEleven(res.data.response[10])
    setTwelve(res.data.response[11])

    console.log("Line",res.data.response)
  });
},[]);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'No of customer(s) signed up',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#FF0000',
      borderColor: '#FF0000',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#FF0000',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve]
    }
  ]
};

  return (
    <div>
        <Line data={data} 
              options={{
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                  y: {
                    suggestedMin: 0,
                    suggestedMax: 10,
                  },
                },
              }}/>
    </div>
  );
}
export default LineChartCustomer;