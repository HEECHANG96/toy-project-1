import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Total from './page/Total';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Total />} />
      </Routes>
      
    
    </div>
  );
}

export default App;