import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend ,LinearScale} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import { useEffect, useState } from 'react';
import axios from 'axios'

ChartJS.register(
    Tooltip,Legend,
    ArcElement
)   


const Chart = () => {

    let url = "http://localhost:8888/.netlify/functions/fn-walletBinance";

    let [criptos, setCriptos] = useState([]);
  
    useEffect(() => {
      (async (getCriptos) => {
        try {
          let response = await axios.get(getCriptos);
          setCriptos(response.data);
          console.log(response.data);
        } catch (err) {
          console.log("error", err);
        }
      })(url);
    },[]);

    var data = {
        labels: criptos?.map(x=>x.asset),
        datasets: [{
            label: `${criptos?.map(x=>x.asset.length)} Criptos en wallet`,
            data: criptos?.map(x => x.free),
            backgroundColor: [
              'rgb(255, 99, 132)',
               'rgb(255, 159, 64)',
               'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
             'rgb(54, 162, 235)',
               'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderColor: [
                'black',
                
            ],
            borderWidth: 1
        }]
}

var options = {
    responsive: true,
    maintainAspectRadio:false,

    legend: {
        position: 'top',
        labels:{
            fontSize: 26
        }
    },
    title: {
        display: true,
        text: 'Grafica de Criptos en la wallet'
    }
}
const config = {
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      }
    }
  },
};
  return (
    <div>
    
    <Doughnut
      data = {data}
      weigth={100}  
      height={100}
      config = {config}
    />
      
  </div>
  )
}
export default Chart;