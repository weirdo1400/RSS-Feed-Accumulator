import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./pages/Home";
import Articles from './pages/Articles';


function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to="/"> Home Page</Link>
          <Link to="/articles"> Articles</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/articles" element={<Articles/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
