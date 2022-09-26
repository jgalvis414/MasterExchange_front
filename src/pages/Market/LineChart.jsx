/*import { useMemo, useEffect, useState } from "react";
import { API, endpoint } from "../../instances/instances.js";
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
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    (async () => {
      try {
        if (props.crypto != null) {
          let response = await API.get(
            endpoint.GET_DATA_CHART + `${props.crypto}`
          );
          setChart(response.data);
        } else {
        }
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, [props.crypto, seconds]);

  const dataTransformer = (d) => {
    //Transformando la fecha de la vela
    let utcSeconds2 = d;
    let e = new Date(utcSeconds2);
    return JSON.stringify(e);
  };

  const options = {
    fill: false,
    borderWidth: 0.7,
    scales: {
      x: {
        display: false,
  
      },
      y: {
        backgroundColor: "",
        display: true,
        gridLines: {
          color: "white",
        },
        grid: {
          lineWidth: 0,
        },
        ticks: {
          color: "#270537",
          padding: 3,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  let dataLine = (props) => {
    const result = {
      datasets: [
        {
          backgroundColor: "#270537",
          label: `${props.crypto == null ? "BTC" : props.crypto}USDT`,
          data: chart?.map((item) => {
            return item[4];
          }),
          tension: 0,
          borderColor: "#270537",
          pointRadius: 0,
          pointBackgroundColor: "",
        },
      ],
      labels: chart?.map((item) => {
        item = dataTransformer(item[6]);
        return item;
      }),
    };
    return result;
  };

  return (
    <>
      <Line data={dataLine(props)} options={options} />
    </>
  );
}
*/
//components
import axios from "axios";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useFormState } from "react-hook-form";

export default function LineChart(props)  {
  let [chart, setChart] = useState([]);
  let [seconds, setSeconds] = useState([]);
  let [price, setPrice] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          `https://comforting-bunny-ac7ccc.netlify.app/fn-data-chart?crypto=${props.crypto}`
        );
        setChart(response.data);
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, [seconds, props.crypto]);

let chart1 = {
  background: 'black',
     
  animations: {
    enabled: true,
    easing: 'easeinout',
    speed: 800,
    animateGradually: {
        enabled: true,
        delay: 150
    },
    dynamicAnimation: {
        enabled: true,
        speed: 350
    }
},
}


  let options = {
    
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#6F38C5',
          downward: '#D800A6'
        }
      }
    },
    chart: {
      type: "candlestick",
      height: 1,
    },
    title: {
      text: `${props.crypto} `,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };
  let dataset = chart?.map((item, key) => {
    return {
        x: new Date(item[6]),
        y: [item[1], item[2], item[3], item[4]]};
  });
  let series = [
    {
      data: dataset,
    },
  ];

  return (
    
    <div>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        width={800}
        height={320}
      />
    </div>
  );
}

