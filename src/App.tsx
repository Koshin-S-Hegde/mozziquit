import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Awards from './pages/Awards';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <main className="pt-24 sm:pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
