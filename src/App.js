import React from 'react';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Footer from './components/footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/profile" element={<h1>Profile Page</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
