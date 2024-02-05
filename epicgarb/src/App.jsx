import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/Home';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import GarbMonitor from './routes/garbMonitor/GarbMonitor';


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/garb-monitor" element={<GarbMonitor/>} />
        
      </Routes>
    </div>
  );
}

export default App;
