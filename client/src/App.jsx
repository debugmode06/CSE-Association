import React from 'react';
import Header from './view/components/common/header/Header';
import Footer from './view/components/common/footer/Footer';
import ClubDetails from './view/pages/ClubDetails';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <ClubDetails />
      <Footer />
    </>
  );
}

export default App;
