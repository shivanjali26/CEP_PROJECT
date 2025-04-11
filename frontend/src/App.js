import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import AboutUs from './pages/AboutUs';
import SellProduct from './pages/SellProduct';
import BuyProduct from './pages/BuyProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/divein" element={<LoginRegister />} />
        <Route path="/sellproduct" element={<SellProduct />} />
        <Route path="/buyproduct" element={<BuyProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
