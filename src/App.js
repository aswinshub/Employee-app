import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./ui-components/Navbar";
import Home from "./ui-components/Home";
import Employee from "./ui-components/Employee";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee/>} />
      </Routes>
     
    </div>
  );
}

export default App;
