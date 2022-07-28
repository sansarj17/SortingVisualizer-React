import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./pages/Home/Home";
import SortingVisualizer from "./pages/SortingVisualizer/SortingVisualizer";
import Whatsapp from "./pages/Whatsapp/Whatsapp";

import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<Whatsapp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
