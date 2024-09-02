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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas, consequatur labore ratione pariatur nesciunt doloremque, itaque voluptatum expedita voluptas tenetur laborum saepe quos architecto suscipit rerum corporis voluptatibus adipisci!</p>
            <button onClick={handleNavigation}>Buy Now →</button>
          </div>
          <div className="bannerpic">
            <img src={nort} alt="Antivirus" />
          </div>
        </div>
        <div className="banner banner2">
          <div className="bannertext">
            <h2>Secure Your Devices!!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas, consequatur labore ratione pariatur nesciunt doloremque, itaque voluptatum expedita voluptas tenetur laborum saepe quos architecto suscipit rerum corporis voluptatibus adipisci!</p>
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
