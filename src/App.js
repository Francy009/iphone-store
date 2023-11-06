import './App.css';
import ChiSiamo from './components/ChiSiamo';
import Contattaci from './components/Contattaci';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contattaci" element={<Contattaci />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
