import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import axios from 'axios';
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';
import books from '../assets/books.jpg';

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img4];

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle search
  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  // Function to handle category click
  const handleCategoryClick = (category) => {
    navigate(`/buyproduct?category=${category}`);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>EduMart</h2>
        <div className="nav_tags">
          <a href="/">Home</a>
          <a href="/divein">Dive In</a>
          <a href="/sellproduct">Sell Product</a>
          <a href="/buyproduct">Buy Product</a>
          <a href="/about">About Us</a>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>🔍</button>
        </div>
      </nav>

      {/* Image Slider */}
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="slide" />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <section className="categories">
        <div className="category" onClick={() => handleCategoryClick('Electronics')}>
          <img src={img1} alt="Electronics" />
          <div className="category-overlay">Electronics</div>
        </div>
        <div className="category" onClick={() => handleCategoryClick('Books')}>
          <img src={books} alt="Books" />
          <div className="category-overlay">Books</div>
        </div>
        <div className="category" onClick={() => handleCategoryClick('Instruments')}>
          <img src={img4} alt="Instruments" />
          <div className="category-overlay">Instruments</div>
        </div>
        <div className="category" onClick={() => handleCategoryClick('Others')}>
          <img src={img3} alt="Others" />
          <div className="category-overlay">Others</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-block">
          <h3>Contact</h3>
          <p>📧 Email: EduMart@pccoe.org</p>
          <p>📞 Contact: +123 456 7890</p>
        </div>
        <div className="footer-block">
          <h3>About</h3>
          <p>Welcome to EduMart! Your one-stop destination for amazing products and services.</p>
        </div>
        <div className="footer-block">
          <h3>Quick Links</h3>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Contact Us</a></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
