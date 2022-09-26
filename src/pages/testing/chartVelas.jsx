//components
import axios from "axios";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useFormState } from "react-hook-form";

function ChartVelas() {
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
          "https://comforting-bunny-ac7ccc.netlify.app/fn-data-chart?crypto="
        );
        setChart(response.data);
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, [seconds]);

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get(
          "https://comforting-bunny-ac7ccc.netlify.app/fn-tickerPrice?crypto=BTC"
        );
        setPrice(response.data);
      } catch (err) {
        console.log("error", err);
      }
    })();
  }, [seconds]);

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
      text: `CandleStick Chart `,
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
      <h1>BTC: {price}</h1>
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

export default ChartVelas;