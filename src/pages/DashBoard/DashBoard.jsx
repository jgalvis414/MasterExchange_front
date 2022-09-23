import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import DonaChart from "./DashBoardComponents/DonaChart/DonaChart";
//css styles
import "./DashBoard.css";

const DashBoard = () => {
  const { authenticated, logout, user } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>DashBoard</h1>
      <div className="containerDashboard">
        <div className="containerBalance">Estimate Balance:</div>
        <div className="containerButtons">componente de botones</div>
      </div>

      <div className="containerChart">
        <DonaChart user={user} />
      </div>

      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default DashBoard;
