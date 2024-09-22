import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Awards from './pages/Awards';
import About from './pages/About'; 
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Background from "./pages/Background"

const App = () => {
return (
  <div>
    <Background />
    <Navbar />
    <div className='relative'>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/awards" element={<Awards />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <Footer />
  </div>
);
};

export default App;
