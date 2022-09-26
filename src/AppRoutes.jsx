import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { AuthProvider, AuthContext } from "./contexts/auth";
import {  useContext } from "react";
import DashBoard from "./pages/DashBoard/DashBoard";
import Market from "./pages/Market/Market";
import SimpleCard from "./pages/LoginChakra/LoginChakra";
import NavBarControl from "./utils/Navbar/NavBarControl";
import TableCoinsMain from "./pages/TableCoins/TableCoinsMain";
import Footer from "./utils/Footer/Footer";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Recharge from "./pages/Recharge/Recharge";
import Pay from "./pages/Pay/Pay";

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
          <Route exact path="/register" element={  <RegisterPage /> } />  
          //PRIVATE SOLO PARA USER REGISTRADOS
          <Route exact path="/dashboard" element = {<Private> <DashBoard /> </Private> } />
          <Route exact path="/market" element = {<Private> <Market /> </Private> } />  
          <Route exact path="/table" element = {<Private> <TableCoinsMain /> </Private> } />  
          <Route exact path="/recharge" element = {<Private> <Recharge /> </Private> } />  
          <Route exact path="/pay" element = {<Private> <Pay /> </Private> } />  


        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
