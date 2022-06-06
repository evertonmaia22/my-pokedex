import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Home } from './pages/Home'
import { Pokemons } from './pages/Pokemons'
import { Contact } from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Pokemons' element={<Pokemons />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
  </Router>
  </>
);
