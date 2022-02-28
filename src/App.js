import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Home from './Components/Home'
import MostPopular from './Components/MostPopular'
import MoreIdeas from './Components/MoreIdeas'
import Inspirations from './Components/Inspirations'
import Tips from './Components/Tips'
import AboutUs from './Components/AboutUs';
import Reviews from './Components/Reviews';
import './App.css'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<MostPopular />} />
        <Route path="/ideas" element={<MoreIdeas />} />
        <Route path="/inspirations" element={<Inspirations />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reviews" element={<Reviews />} />



      </Routes>
    </div>
  )
}

export default App