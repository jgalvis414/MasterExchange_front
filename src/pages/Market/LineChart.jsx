import { useMemo, useEffect, useState } from "react";
import {API, endpoint} from "../../instances/instances.js"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart(props) {

  let [chart, setChart] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (props.crypto != null) {
          let response = await API.get(endpoint.GET_DATA_CHART+`${props.crypto}`);
          setChart(response.data);

        }else{
         
        }
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, [props.crypto]);

 

  const dataTransformer = (d) => {
    //Transformando la fecha de la vela
    let utcSeconds2 = d;
    let e = new Date(utcSeconds2);
    return JSON.stringify(e);
  };

  const options = {
    fill: false,
    scales:{
     x: {
      display: false,
     },
     y:{
      color: 'red'
      
    }
    },   
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  
  
  let dataLine = (props, ) => {  
    const result = {
      datasets: [
        {
          backgroundColor: '',
          label: `${props.crypto == null ? 'BTC' : props.crypto}USDT`,
          data: chart?.map((item) => {
            return item[4];
          }),
          tension: 0.1,
          borderColor: "#293462",
          pointRadius: 1,
          pointBackgroundColor: "",
        },
      ],
      labels: chart?.map((item) => {
        item = dataTransformer(item[6]);
        return item;
      }),
    }
    return result;
   
  };

  return (
    <>

      <Line data={dataLine(props)} options={options} />
  
    </>
  );
}

