import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LanguageToggle from './components/LanguageToggle';
import { LanguageProvider } from './context/LanguageContext';
import './styles/App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <LanguageToggle />
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
