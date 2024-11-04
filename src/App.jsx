import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";         
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import ProductViewDetails from "./components/ProductViewDetails";

function App() {
  return (
    <>
      <div className="bg-gray-100 font-sora">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/:productId" element={<ProductViewDetails />} />
          </Routes>
          <ToastContainer/>
        </Router>
      </div>
    </>
  );
}

export default App;
