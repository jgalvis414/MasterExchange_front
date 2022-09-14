import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import { AuthProvider, AuthContext } from "./contexts/auth";
import { useState, useContext } from "react";
import DashBoard from "./pages/DashBoard/DashBoard";
import Market from "./pages/Market/Market";
import SimpleCard from "./pages/LoginChakra/LoginChakra";
import NavBarControl from "./utils/Navbar/NavBarControl";
import RegisterChakra from "./pages/RegisterPage/RegisterChakra";
import Footer from "./utils/Footer/Footer";

//user != null
// authenticated == true

const AppRoutes = () => {

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    if (loading) {
      return <div className="loading">Loading...</div>;
    }   

    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  

  return (
    <Router>
      <AuthProvider>
        <NavBarControl/>
       
        <Routes>
          //RUTAS PUBLICAS
          <Route exact path="/login" element={<SimpleCard />} />
          <Route exact path="/" element={  <HomePage />  } />
          <Route exact path="/register" element={  <RegisterChakra/> } />  
          //PRIVATE SOLO PARA USER REGISTRADOS
          <Route exact path="/dashboard" element = {<Private> <DashBoard /> </Private> } />
          <Route exact path="/market" element = {<Private> <Market /> </Private> } />        
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
