import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Service';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/> 
          <Route exact path='/about' element={<About/>}/> 
          <Route exact path='/service' element={<Service />}/> 
          <Route exact path='/contact' element={<Contact />}/>                 
        </Routes>
      </Router>

    <Footer />    
    </div>
  );
}

export default App;