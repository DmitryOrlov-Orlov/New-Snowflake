import React from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';

import './App.global.css';

const App = () => {

  return (
    <div className="container">
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
