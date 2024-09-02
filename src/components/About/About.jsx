import React from 'react';
import './About.css';
import sec from '../../assets/img/sec.png'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate()

  const handleNavigation = (value)=>{
    navigate(value)
  } 

  return (
    <div className='about'>
      <div className="aboutmain">
        <div className="aboutleft">
            <div className="aboutsec aboutmainsec">
            <h2>About Us →</h2>
              <p>
              We are a dedicated team committed to delivering the best services to our customers. 
              Our mission is to innovate and provide top-notch solutions tailored to the unique needs 
              of each client. With years of experience in the industry, we pride ourselves on our 
              ability to adapt and thrive in the ever-changing landscape of technology.
              </p>
            </div>
            <div className="aboutsec">
            <h2>What We Do?</h2>
              <p>
               we specialize as authorized resellers of leading antivirus solutions such as McAfee and Norton, as well as a variety of computer peripherals. Our robust e-commerce platform ensures a smooth and efficient online shopping experience for both software and peripherals.
              </p>
            </div>
            <div className="aboutsec">
            <h2>Our Vision →</h2>
              <p>
              We aspire to redefine the e-commerce landscape for computer software and peripherals, offering competitive pricing and a steadfast commitment to exceptional customer service.
              </p>
            </div>

            <div className="aboutsec aboutlinks">
            <h2>Quick Links →</h2>
             <ul>
                <li onClick={()=>handleNavigation('/contact')}>Contact Us ↗</li>
                <li onClick={()=>handleNavigation('/Disclaimer')}>Disclaimer ↗</li>
                <li onClick={()=>handleNavigation('/Terms_&_Condition')}>Terms & Conditions ↗</li>
             </ul>
            </div>
            
            
          
        </div>
        <div className="aboutright">
          <img 
            src={sec} 
            alt="About Us" 
            className="about-img" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;
