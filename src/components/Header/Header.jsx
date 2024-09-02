import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import HeaderMobile from './HeaderMobile';
import { useProduct } from '../../context/ProductContext';

const Header = () => {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {cart} = useProduct();

  const handleNavigation = (path) => {
     navigate(path)
  };

  console.log('Cart:', cart);

  const cartlength = cart.length;

  return (
    <div className="nav">
      <div className="ham" onClick={()=>setIsMenuOpen(true)}>
        <div className="ham__line"></div>
        <div className="ham__line"></div>
        <div className="ham__line"></div>
      </div>
      <div className="navleft">
        <div className="navlogo">
          <a href onClick={()=>handleNavigation('/')}>
            <h2>Antivs.Com</h2>
          </a>
        </div>
      </div>
      <div className="navmid">
        <input type="text" placeholder="Search For Items" />
        <button>
          <img src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1" />
        </button>
      </div>
      <div className="navright">
        <div className="navlist">
          <ul className="notlogin">
            <li className="navitem" onClick={() => handleNavigation('/')}>
              <a href className="navlink" onClick={()=>handleNavigation('/')}>
                <img src="https://img.icons8.com/sf-regular/48/home-page.png" alt="Home" />
                <span className="tooltip">Home</span>
              </a>
            </li>
            <li className="navitem" onClick={() => handleNavigation('/about')}>
              <a href className="navlink" onClick={()=>handleNavigation('/about')}>
                <img src="https://img.icons8.com/windows/32/about.png" alt="About" />
                <span className="tooltip">About</span>
              </a>
            </li>
            <li className="navitem" onClick={() => handleNavigation('/contact')}>
              <a href className="navlink" onClick={()=>handleNavigation('/contact')}>
                <img src="https://img.icons8.com/windows/32/phone-disconnected--v1.png" alt="Contact" />
                <span className="tooltip">Contact</span>
              </a>
            </li>
            {/* <li className="navitem" onClick={() => handleNavigation('/wishlist')}>
              <a href className="navlink">
                <img src="https://img.icons8.com/windows/32/like--v1.png" alt="Wishlist" />
                <p>0</p>
                <span className="tooltip">Wishlist</span>
              </a>
            </li> */}
            <li className="navitem" onClick={() => handleNavigation('/cart')}>
              <a href className="navlink" onClick={()=>handleNavigation('/cart')}>
                <img src="https://img.icons8.com/ios/50/shopping-bag--v1.png" alt="Cart" />
                <p>{cart.length > 0 ? cartlength : '0'}</p>
                <span className="tooltip">Cart</span>
              </a>
            </li>
            <li className="navitem">
              <a href="/login" className="navlink signup">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <HeaderMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default Header;
