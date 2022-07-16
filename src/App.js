import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Total from './page/Total';
import Login from './page/Login';
import AddLocation from './page/AddLocation';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Total />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add_location" element={<AddLocation />} />
      </Routes>
      
    
    </div>
  );
}

export default App;