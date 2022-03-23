import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import Products from './components/products';
import Footer from './components/footer';
import Login from './components/login';
import About from './components/about';


function App() {
  return (
    <Router>
        <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
        <Footer />
    </Router>
  );
}

export default App;
