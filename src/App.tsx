import React from 'react';
import Navbar from './Components/estaticos/navbar/Navbar';
import Footer from './Components/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';


function App() {
  return (
   <>
  <Navbar />
    <Home />
    <Footer />
   </>
  );
}

export default App;

