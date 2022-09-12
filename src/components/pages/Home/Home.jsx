import React from "react";
import LineChart from "../ChartTest/LineChart";
import ChartTest from "../ChartTest/ChartTest";
import DoughnutChar from "../ChartTest/DonaChart";
import "./home.css";

const Home = () => {
  return (
    <div>
      <h1>BIENVENIDO A MI PAGINA WEB 😎</h1>
      <div className="Container">
        <LineChart />
      </div>
      <div className="Container2">
      <DoughnutChar />
      </div>
    </div>
  );
};
export default Home;
