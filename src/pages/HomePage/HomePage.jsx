import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import Footer from "../../utils/Footer/Footer";
import Landing from "../Landing/Landing";

const HomePage = () => {
  const { authenticated } = useContext(AuthContext);

 
  return (
    <>

      <div style={{background:'white', height:'700px'}}>
        <Landing/>
      </div>
      
      <Footer/>
        </>
    
  
  );



}; 
export default HomePage;
