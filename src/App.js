import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>

      <BrowserRouter>
        
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />

        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
