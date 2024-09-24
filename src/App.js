
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// soumils_uh all components goes here ->
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Destinations from './components/Destinations/Destinations.jsx';
import BookingForm from './components/BookingForm/BookingForm.jsx';
import Contact from './components/Contact/Contact.jsx';

import './App.css'; 
function App() {
  return (
    <div>
      <Header />
      <main>
        
        <Home /> 
        <Destinations />
        <BookingForm />
        <Contact />
        
      </main>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
