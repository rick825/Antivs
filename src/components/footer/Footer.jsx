import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'
import { useLocalContext } from '../../context/LocalProvider'

const Footer = () => {

    const navigate = useNavigate()

    const handleNavigation = (path) =>{
        navigate(path)
    }

    const {phone} = useLocalContext();

  return (
    <div className='footer'>
    <div className="footertop footcont">
        <div className="footerleft">
          <h2>Antivs.com</h2>
        </div>
        <div className="footerright">
          <div className="footer-right-cont footerquicklinks">
            <div className="footlist">
                <h2>Quick Links ↓</h2>
                <ul>
                 <li onClick={()=>handleNavigation('/about')}>About Us ↗</li>
                 <li onClick={()=>handleNavigation('/Terms_&_Condition')}>Terms & Conditions ↗</li>
                 <li onClick={()=>handleNavigation('/Disclaimer')}>Disclaimer ↗</li>
                 <li onClick={()=>handleNavigation('/Terms_&_Condition')}>Privacy Policy ↗</li>
                 <li onClick={()=>handleNavigation('/refund_policy')}>Refund Policy ↗</li>
                </ul>
            </div>
          </div>
          <div className="footer-right-cont footaddress">
            <div className="footlist">
                <h2>Address ↓</h2>
                <ul>
                    <li>Address: 123, ABC Street, New York, USA</li>
                    <li>Phone: {phone}</li>
                    <li>Email: <a href="mailto:info@antivs.com">info@antivs.com</a></li>
                </ul>
            </div>
          </div>
          <div className="footer-right-cont footsocial">
            <div className="footlist">
                <h2>Follow Us ↓</h2>
                <ul>
                    <li><img src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new"/></li>
                    <li><img src="https://img.icons8.com/ios/50/telegram.png" alt="telegram"/></li>
                    <li><img src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1"/></li>
                    <li><img src="https://img.icons8.com/ios/50/twitterx--v1.png" alt="twitterx--v1"/></li>
                </ul>
            </div>
          </div>
          <div className="footer-right-cont footmail">
            <div className="footlist">
                <h2>Mail Us ↓</h2>
                <form action="">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    <textarea name="message" placeholder="Message"/>
                    <button type="submit">Send</button>
                </form>
            </div>
          </div>

        </div>
    </div>
    <div className="footermid  footcont">
     <div className="footmidpartners">
        <h2>Our Payment Partners →</h2>
        <div className="footpartnerslist">
        <img  src="https://img.icons8.com/color/50/visa.png" alt="visa"/>
        <img  src="https://img.icons8.com/color/50/mastercard.png" alt="mastercard"/>
        <img  src="https://img.icons8.com/color/50/discover.png" alt="discover"/>
        <img src="https://img.icons8.com/fluency/48/jcb.png" alt="jcb" />
        <img  src="https://img.icons8.com/color/50/paypal.png" alt="paypal"/>
        </div>
     </div>
    </div>
    <div className="footerbot  footcont">
        <div className="copy">
            <p>&copy; 2024 Antivs.com. All rights reserved.</p>
        </div>
    </div>
    </div>
  )
}

export default Footer