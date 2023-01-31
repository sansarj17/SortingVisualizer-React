import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from "./pages/Home/Home";
import SortingVisualizer from "./pages/SortingVisualizer/SortingVisualizer";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/" element={<SortingVisualizer/>} />
      </Routes>
    </div>
  );
}

export default App;
