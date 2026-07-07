import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './view/components/common/header/Header';
import Footer from './view/components/common/footer/Footer';
import Home from './view/pages/Home';
import ClubDetails from './view/pages/ClubDetails';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club-details/:id" element={<ClubDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
