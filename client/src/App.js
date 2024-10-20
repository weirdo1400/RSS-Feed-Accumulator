import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import News from './pages/News';
import Sport from './pages/Sport';
import Astronomie from './pages/Astronomie';
import Technik from './pages/Technik';
import Spanisch from './pages/Spanisch'
import Einstellungen from './pages/Einstellungen'; 

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to="/"> Home Page</Link>
          <Link to="/news"> News </Link>
          <Link to="/sport"> Sport</Link>
          <Link to="/astronomie"> Astronomie</Link>
          <Link to="/technik"> Technik</Link>
          <Link to="/spanisch"> Spanisch</Link>
          <Link to="/einstellungen"> Einstellungen</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/sport" element={<Sport/>} />
          <Route path="/astronomie" element={<Astronomie/>} />
          <Route path="/technik" element={<Technik/>} />
          <Route path="/spanisch" element={<Spanisch/>} />
          <Route path="/einstellungen" element={<Einstellungen/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;