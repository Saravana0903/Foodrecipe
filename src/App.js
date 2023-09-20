import './App.css';
import {Routes,BrowserRouter as Router,Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import Login from "./Components/Login/Login"
import Product from "./Components/Product/Product"
import ProDetails from "./Components/ProDetails/ProDetails"
function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path= "/" element={<Home />} />
      <Route exact path= "/product" element={<Product />} />
      <Route exact path= "/details" element={<ProDetails />} />
    </Routes>
   </Router>   
    </div>
  );
}

export default App;
