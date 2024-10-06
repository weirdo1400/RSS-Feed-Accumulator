import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import News from './pages/News';
import Sport from './pages/Sport';
import Wissenschaft from './pages/Wissenschaft';
import Einstellungen from './pages/Einstellungen'; 

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to="/"> Home Page</Link>
          <Link to="/news"> News </Link>
          <Link to="/sport"> Sport</Link>
          <Link to="/wissenschaft"> Wissenschaft</Link>
          <Link to="/einstellungen"> Einstellungen</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/sport" element={<Sport/>} />
          <Route path="/wissenschaft" element={<Wissenschaft/>} />
          <Route path="/einstellungen" element={<Einstellungen/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;