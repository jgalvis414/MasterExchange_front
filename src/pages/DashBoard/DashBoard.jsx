import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const DashBoard = () => {
  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <h1>DashBoard</h1>
     
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default DashBoard;
