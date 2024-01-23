import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Property from './components/Property';
import Home from './components/Home';
import CarouselComp from './components/CarouselComp';
import Footer from './components/Footer';

import './styles/index.css' 

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
          {/* <Route path="/" element={<PropertyList/>} /> */}
          <Route path="/" element={<Home/>} />
          {/* <Route path="/propdetails" element={<Header/>} /> */}
          <Route path="/properties/:id" element={<Property/>} />
          <Route path="/images" element={<CarouselComp/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
	
		</>
  );
}

export default App;
