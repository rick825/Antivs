import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './Banner.css';
import nort from '../../assets/img/nort.png';
import sec from '../../assets/img/sec.png'
import { useNavigate } from 'react-router-dom';

const Banner = () => {

  const navigate = useNavigate();

  const handleNavigation = ()=>{
    navigate('/Norton_support');
  }

  return (
    <div className="banner-container">
      <Carousel
        autoPlay={true} 
        infiniteLoop={true} 
        showStatus={false} 
        interval={3000}
        transitionTime={500}
        stopOnHover={false}
        showArrows={true} 
      >
        <div className="banner">
          <div className="bannertext">
            <h2>Buy the Best Antivirus!</h2>
            <p>Protect your digital world with our top-rated antivirus solutions. At Antivs.com, we offer a wide range of reliable and cutting-edge antivirus software designed to safeguard your devices against viruses, malware, and online threats. Our products ensure real-time protection, secure browsing, and peace of mind, so you can focus on what matters most.</p>
            <button onClick={handleNavigation}>Buy Now →</button>
          </div>
          <div className="bannerpic">
            <img src={nort} alt="Antivirus" />
          </div>
        </div>
        <div className="banner banner2">
          <div className="bannertext">
          <h2>Secure Your Devices!</h2>
          <p>Ensure your digital safety with our top-rated antivirus software. At Antivs.com, we provide reliable and efficient solutions to protect your devices from the latest threats. Our advanced technology offers comprehensive defense against viruses, malware, and cyber attacks, so you can enjoy worry-free browsing and secure your valuable information. Discover the ultimate in device security with us!</p>
          <button>Learn More →</button>

          </div>
          <div className="bannerpic bannerpic2">
            <img src={sec} alt="Another Product" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
