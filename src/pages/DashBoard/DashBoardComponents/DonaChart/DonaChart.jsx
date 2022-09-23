import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend ,LinearScale} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
import { useEffect, useState } from 'react';
//instancias de endpoint
import {API, endpoint} from "../../../../instances/instances.js"


ChartJS.register(
    Tooltip,Legend,
    ArcElement
)   


const DonaChart = ({user}) => {

  let [criptos, setCriptos] = useState([]);
  
    useEffect(() => {
      (async () => {
        try {
          let response = await API.get(endpoint.DATA_USER+`?user=${user.email}`);
          setCriptos(response.data[0].wallet);
        } catch (err) {
          console.log("error", err);
        }
      })();
    },[]);

    var data = {
        labels: criptos?.map(x=>x.coin),
        datasets: [{
            label: `${3} Criptos en wallet`,
            data: criptos?.map(x=>x.free),
            backgroundColor: [
              '#2E0249',
              '#570A57',
              '#F806CC'
            ],
            borderColor: [
                'white',
                
            ],
            borderWidth: 1.5
        }]
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
export default DonaChart;