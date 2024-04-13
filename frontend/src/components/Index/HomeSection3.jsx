import React, { useEffect, useState } from 'react';
import '../CSS/HomeSection3.css';

const HomeSection3 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll('.slide');
    let interval;

    const handleSlideClick = (index) => {
      clearInterval(interval);
      setActiveIndex(index);
    };

    const autoPlay = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    slides.forEach((slide, index) => {
      slide.addEventListener('click', () => handleSlideClick(index));
    });

    interval = setInterval(autoPlay, 4000);

    return () => {
      clearInterval(interval);
      slides.forEach((slide, index) => {
        slide.removeEventListener('click', () => handleSlideClick(index));
      });
    };
  }, []);

  return (
    <>
      <div className="container-fluid py-2 py-lg-3">
        <div className=" h1 discover">
          Gallery
        </div>
      </div>
      <div className="containerbox ">
        <div className="cont p-0">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className={`slide ${index === activeIndex ? 'active' : 'nonActive'}`}
              style={{
                backgroundImage: `url('${getImageUrl(index)}',)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

const getImageUrl = (index) => {
  const images = [
    'https://images.pexels.com/photos/437716/pexels-photo-437716.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://c0.wallpaperflare.com/preview/439/110/359/beverage-biscuit-blur-brown.jpg',
    'https://img.freepik.com/free-photo/four-different-cocktail-smoothies-with-milky-cream-top_114579-1097.jpg?size=626&ext=jpg&uid=R123337181&ga=GA1.1.282867472.1702277351&semt=sph',
    'https://img.freepik.com/free-photo/bowl-noodle-trivet-tomatoes-lemon-garlic-marble-surface_114579-91260.jpg?size=626&ext=jpg&uid=R123337181&ga=GA1.1.282867472.1702277351&semt=sph',
    'https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?size=626&ext=jpg&uid=R123337181&ga=GA1.1.282867472.1702277351&semt=sph',
    'https://img.freepik.com/free-photo/crispy-french-fries-with-ketchup-mayonnaise_1150-26588.jpg?size=626&ext=jpg&uid=R123337181&ga=GA1.1.282867472.1702277351&semt=sph',
  ];

  return images[index];
};

export default HomeSection3;
