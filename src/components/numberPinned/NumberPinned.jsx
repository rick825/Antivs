import React, { useState, useEffect } from 'react';
import './NumberPinned.css';
import { useLocalContext } from '../../context/LocalProvider';

const NumberPinned = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isScrolled, setIsScrolled] = useState(false);
  const {phone} = useLocalContext();


  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobileView(mobileView);

      if (!mobileView) {
        window.removeEventListener('scroll', handleScroll);
        setIsScrolled(false); 
      } else {
        window.addEventListener('scroll', handleScroll);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('resize', handleResize);

    if (isMobileView) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileView]);

  return (
    <a href="tel:+11234567890">
      <div className={`numberpinned ${isMobileView ? (isScrolled ? 'scrolled' : 'default-mobile') : 'scrolled'}`}>
        <div className='numberpinned__number'>
          <h2>24 / 7 Customer Support :</h2>
          <a href={`tel:${phone}}`}>{phone}</a>
        </div>
      </div>
    </a>
  );
};

export default NumberPinned;
