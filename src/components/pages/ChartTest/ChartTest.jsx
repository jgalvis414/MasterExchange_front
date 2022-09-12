import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import BarChart from "./LineChart";

const ChartTest = () => {
  let url = "http://localhost:8888/.netlify/functions/fn-data-chart";

  let [data, setData] = useState([]);
  

  useEffect(() => {
    (async (getData) => {
      try {
        let response = await axios.get(getData);
        setData(response.data);
      } catch (err) {
        console.log("error", err);
      }
    })(url);
  }, []);
 
  const dataTransformer = (d) => { //Transformando la fecha de la vela
    let utcSeconds2 = d;
    let e = new Date(utcSeconds2)
    return JSON.stringify(e);

  }

  return (    
    <>
      <>Data Binance: </>
      <ul>
        {data.map( (data, item) => { 
            return (
            <li key= {item}> {(dataTransformer(data[6]) + ' - '+ data[4]) +'$'} </li>
            )})
            
        }
      </ul>

    </>
  );
};

export default ChartTest