

//indha slider ku 
//react-slick nu solitu irukum da soumils uh adha add panika local la paka modhu

import React from 'react';
import Slider from 'react-slick';
import './Home.css';

const Home = () => {
  const destinations = [
    {
      name: 'Chennai',
      image: ''
    },
    {
      name: 'Thanjavaur',
      image: ''
    },
    {
      name: 'Kanyakumari',
      image: ''
    },
    {
      name: 'Ooty',
      image: ''
    },
    {
      name: 'Madurai',
      image: ''
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to Our Travel Agency</h1>
        <p>Your adventure begins here! Discover amazing destinations and create unforgettable memories.</p>
        <button className="cta-button">Explore Destinations</button>
      </div>

      <div className="featured-destinations">
        <h2>Featured Destinations</h2>
        <div className="slider-container"> {/* Added container for the slider */}
          <Slider {...settings}>
            {destinations.map((destination, index) => (
              <div key={index} className="destination-card">
                <h3>{destination.name}</h3>
                <p>Explore the beauty and culture of {destination.name}!</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
