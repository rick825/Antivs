import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../context/ProductContext';


const HeaderMobile = ({isMenuOpen, setIsMenuOpen}) => {
  const navigate = useNavigate();

  const {cart} = useProduct();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false)
  };

  return (
    <div style={isMenuOpen ? {display:"block"}:{display:"none"}} className="header-mobile">
     <div style={isMenuOpen ? {transform:"translate(0)"}:{transform:"translate(100rem)"}} className="backblack"></div>
      {isMenuOpen && (
        <div className="header-mobile-menu">
            <div className="close">
                <button onClick={() => setIsMenuOpen(false)}>X</button>
            </div>
          <ul>
            <li onClick={() => handleNavigation('/')}>Home</li>
            <li onClick={() => handleNavigation('/about')}>About</li>
            <li onClick={() => handleNavigation('/contact')}>Contact</li>
            <li onClick={() => handleNavigation('/cart')}>Cart ({cart.length > 0 ? cart.length:'0'})</li>
            <li onClick={() => handleNavigation('/login')}>Login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
