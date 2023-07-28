
//import BannerBackground from "../Assets/home-banner-background.png";
//import BannerImage from "../Assets/home-banner-image.png";
//import Navbar from "../Navbar";
import React, { useState } from 'react'
//import { FiArrowRight } from "react-icons/fi";


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search logic here using the searchTerm
    console.log('Search term:', searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};



const Home = () => {
  return (
    <div className="home-container">
     
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
         
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            
          </h1>
          <p className="primary-text">
           
          </p>
          
        </div>
        <div className="home-image-section">
          
        </div>
      </div>
  </div>
  );
};

export default Home;