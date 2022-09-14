//components
import AppRoutes from "./AppRoutes";
import Navbar from "./utils/Navbar/Navbar";
import "./App.css"


//components


function App() {
  return (
    <div className="container">
    <Navbar />
    <AppRoutes/> 
    </div>
    
  )

  
}

export default App;
