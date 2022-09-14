import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const HomePage = () => {
  const { authenticated } = useContext(AuthContext);

 
  return (
    <>
    
    
      <h1>Home Page</h1>
    
    </>
  );



}; 
export default HomePage;
