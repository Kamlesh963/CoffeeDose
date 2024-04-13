import React, { useEffect, useState } from 'react';
import '../CSS/HomeReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomeReview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const circles = document.querySelectorAll('.circle');
    const slides = document.querySelectorAll('#bg .slide1');
    const images = document.querySelectorAll('#image1 .img1');
    const quotes = document.querySelectorAll('.quote');

    const animate = setInterval(() => {
      setActiveIndex((prevIndex) => {
        if (prevIndex < circles.length - 1) {
          circles[prevIndex].classList.remove('active');
          slides[prevIndex].classList.remove('active');
          images[prevIndex].classList.remove('active');
          quotes[prevIndex].classList.remove('active');
          circles[prevIndex + 1].classList.add('active');
          slides[prevIndex + 1].classList.add('active');
          images[prevIndex + 1].classList.add('active');
          quotes[prevIndex + 1].classList.add('active');
          return prevIndex + 1;
        } else {
          circles[prevIndex].classList.remove('active');
          slides[prevIndex].classList.remove('active');
          images[prevIndex].classList.remove('active');
          quotes[prevIndex].classList.remove('active');
          circles[0].classList.add('active');
          slides[0].classList.add('active');
          images[0].classList.add('active');
          quotes[0].classList.add('active');
          return 0;
        }
      });
    }, 4500);

    circles.forEach((circle, index) => {
      circle.addEventListener('click', () => {
        clearInterval(animate);
        setActiveIndex(index);
      });
    });

    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    leftBtn.addEventListener('click', () => {
      clearInterval(animate);
      setActiveIndex((prevIndex) => {
        if (prevIndex === 0) {
          circles[prevIndex].classList.remove('active');
          slides[prevIndex].classList.remove('active');
          images[prevIndex].classList.remove('active');
          quotes[prevIndex].classList.remove('active');
          circles[circles.length - 1].classList.add('active');
          slides[slides.length - 1].classList.add('active');
          images[images.length - 1].classList.add('active');
          quotes[quotes.length - 1].classList.add('active');
          return circles.length - 1;
        } else {
          circles[prevIndex].classList.remove('active');
          slides[prevIndex].classList.remove('active');
          images[prevIndex].classList.remove('active');
          quotes[prevIndex].classList.remove('active');
          circles[prevIndex - 1].classList.add('active');
          slides[prevIndex - 1].classList.add('active');
          images[prevIndex - 1].classList.add('active');
          quotes[prevIndex - 1].classList.add('active');
          return prevIndex - 1;
        }
      });
    });

    rightBtn.addEventListener('click', () => {
      clearInterval(animate);
      setActiveIndex((prevIndex) => {
        if (prevIndex < circles.length - 1) {
          circles[prevIndex].classList.remove('active');
          slides[prevIndex].classList.remove('active');
          images[prevIndex].classList.remove('active');
          quotes[prevIndex].classList.remove('active');
          circles[prevIndex + 1].classList.add('active');
          slides[prevIndex + 1].classList.add('active');
          images[prevIndex + 1].classList.add('active');
          quotes[prevIndex + 1].classList.add('active');
          return prevIndex + 1;
        } else {
          circles[prevIndex].classList.remove('active');
          slides[prevIndex].classList.remove('active');
          images[prevIndex].classList.remove('active');
          quotes[prevIndex].classList.remove('active');
          circles[0].classList.add('active');
          slides[0].classList.add('active');
          images[0].classList.add('active');
          quotes[0].classList.add('active');
          return 0;
        }
      });
    });

    return () => {
      clearInterval(animate);
      circles.forEach((circle, index) => {
        circle.removeEventListener('click', () => {
          setActiveIndex(index);
        });
      });

      leftBtn.removeEventListener('click', () => {
        setActiveIndex((prevIndex) => {
          if (prevIndex === 0) {
            circles[prevIndex].classList.remove('active');
            slides[prevIndex].classList.remove('active');
            images[prevIndex].classList.remove('active');
            quotes[prevIndex].classList.remove('active');
            circles[circles.length - 1].classList.add('active');
            slides[slides.length - 1].classList.add('active');
            images[images.length - 1].classList.add('active');
            quotes[quotes.length - 1].classList.add('active');
            return circles.length - 1;
          } else {
            circles[prevIndex].classList.remove('active');
            slides[prevIndex].classList.remove('active');
            images[prevIndex].classList.remove('active');
            quotes[prevIndex].classList.remove('active');
            circles[prevIndex - 1].classList.add('active');
            slides[prevIndex - 1].classList.add('active');
            images[prevIndex - 1].classList.add('active');
            quotes[prevIndex - 1].classList.add('active');
            return prevIndex - 1;
          }
        });
      });

      rightBtn.removeEventListener('click', () => {
        setActiveIndex((prevIndex) => {
          if (prevIndex < circles.length - 1) {
            circles[prevIndex].classList.remove('active');
            slides[prevIndex].classList.remove('active');
            images[prevIndex].classList.remove('active');
            quotes[prevIndex].classList.remove('active');
            circles[prevIndex + 1].classList.add('active');
            slides[prevIndex + 1].classList.add('active');
            images[prevIndex + 1].classList.add('active');
            quotes[prevIndex + 1].classList.add('active');
            return prevIndex + 1;
          } else {
            circles[prevIndex].classList.remove('active');
            slides[prevIndex].classList.remove('active');
            images[prevIndex].classList.remove('active');
            quotes[prevIndex].classList.remove('active');
            circles[0].classList.add('active');
            slides[0].classList.add('active');
            images[0].classList.add('active');
            quotes[0].classList.add('active');
            return 0;
          }
        });
      });
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 py-2 py-sm-3 py-md-4 text-center">
            <span className='reviewtitle discover'>Customer Reviews</span>
          </div>
        </div>
      </div>
      <div id="reviewmainsection" className='reviewbox container-fluid ps-0' style={{ overflow: 'hidden' }}>
        <div id="holder">
          <div id="image1" className='py-1 py-sm-0'>
            <div className={`img1 jobs ${activeIndex === 0 ? 'active1' : ''}`}></div>
            <div className={`img1 zuck ${activeIndex === 1 ? 'active1' : ''}`}></div>
            <div className={`img1 musk ${activeIndex === 2 ? 'active1' : ''}`}></div>
          </div>
          <div id="right"></div>
          <div id="text">
            <div id="centerText">
              <p className={`quote reviewparagraph ${activeIndex === 0 ? 'active1' : ''}`}>
                <span className='person_review'>Amelia</span><br />
                <span className='my-2 mx-1' style={{ color: '#ffb400' }}><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /></span> <br />
                <FontAwesomeIcon icon="fa fa-quote-left" style={{ fontSize: '30px', color: 'blue' }} />
                The Coffee Dose Cafe is a delightful experience! The cozy atmosphere, friendly staff, and rich coffee varieties make it a favorite spot.
                <FontAwesomeIcon icon="fa fa-quote-right" style={{ fontSize: '30px', color: 'blue' }} />
              </p>
              <p className={`quote reviewparagraph exception ${activeIndex === 1 ? 'active1' : ''}`} > 
                <span className='person_review'>Olivia</span><br />
                <span className='my-2 mx-1' style={{ color: '#ffb400' }}><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star-half" /></span> <br />
                <FontAwesomeIcon icon="fa fa-quote-left" style={{ fontSize: '30px', color: 'blue' }} />
                The Coffee Dose Cafe is a hidden gem! Exceptional coffee, cozy vibes, and the staff's warmth make each visit memorable.
                <FontAwesomeIcon icon="fa fa-quote-right" style={{ fontSize: '30px', color: 'blue' }} />
              </p>
              <p className={`quote reviewparagraph ${activeIndex === 2 ? 'active1' : ''}`}>
                <span className='person_review'>Sofia</span><br />
                <span className='my-2 mx-1' style={{ color: '#ffb400' }}><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-solid fa-star" /><FontAwesomeIcon icon="fa-regular fa-star" /></span> <br />
                <FontAwesomeIcon icon="fa fa-quote-left" style={{ fontSize: '30px', color: 'blue' }} />
                Visited Coffee Dose Cafe and fell in love! The aromatic brews, inviting ambiance, and attentive staff create a haven for coffee lovers.
                <FontAwesomeIcon icon="fa fa-quote-right" style={{ fontSize: '30px', color: 'blue' }} />
              </p>
            </div>
            <nav className='homenavcompoent'>
              <a id="leftBtn" className="prev reviewancor"><FontAwesomeIcon icon="fa fa-arrow-left" /></a>
              <a id="rightBtn" className="next reviewancor"><FontAwesomeIcon icon="fa fa-arrow-right" /></a>
            </nav>
          </div>
        </div>
        <div id="bg">
          <div className={`slide1 jobs-bg ${activeIndex === 0 ? 'active1' : ''}`}></div>
          <div className={`slide1 zuck-bg ${activeIndex === 1 ? 'active1' : ''}`}></div>
          <div className={`slide1 musk-bg ${activeIndex === 2 ? 'active1' : ''}`}></div>
        </div>
        <div id="nav_cirlces">
          <div className={`circle ${activeIndex === 0 ? 'active1' : ''}`}></div>
          <div className={`circle ${activeIndex === 1 ? 'active1' : ''}`}></div>
          <div className={`circle ${activeIndex === 2 ? 'active1' : ''}`}></div>
        </div>
      </div>
    </>
  );
}

export default HomeReview;
